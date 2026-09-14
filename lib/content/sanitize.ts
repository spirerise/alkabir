/**
 * Conservative, dependency-free HTML sanitizer for admin-authored content.
 *
 * Content blocks and blog bodies allow a small set of formatting tags. This
 * strips anything dangerous (scripts, event handlers, javascript: URLs, style,
 * iframe, etc.) before content is committed. It is intentionally strict — an
 * allow-list, not a block-list.
 *
 * NOTE: This runs server-side on WRITE. Because authors are authenticated
 * admins, this is defense-in-depth rather than the sole protection, but it
 * prevents stored-XSS from a compromised admin session or bad paste.
 */

const ALLOWED_TAGS = new Set([
  "p", "br", "strong", "b", "em", "i", "u", "s",
  "h1", "h2", "h3", "h4", "h5", "h6",
  "ul", "ol", "li",
  "blockquote", "code", "pre",
  "a", "span", "div",
  "table", "thead", "tbody", "tr", "th", "td",
  "img",
]);

// Attributes allowed per tag.
const ALLOWED_ATTRS: Record<string, Set<string>> = {
  a: new Set(["href", "title", "target", "rel"]),
  img: new Set(["src", "alt", "width", "height"]),
  span: new Set(["class"]),
  div: new Set(["class"]),
  code: new Set(["class"]),
  th: new Set(["colspan", "rowspan"]),
  td: new Set(["colspan", "rowspan"]),
};

function isSafeUrl(value: string): boolean {
  const v = value.trim().toLowerCase();
  if (v.startsWith("javascript:") || v.startsWith("data:") || v.startsWith("vbscript:")) {
    return false;
  }
  return true;
}

/**
 * Sanitize an HTML string down to the allow-listed tags/attributes.
 * Removes disallowed tags entirely (including their contents for <script>/<style>).
 */
export function sanitizeHtml(input: string): string {
  if (!input) return "";

  // 1. Drop script/style/iframe blocks with their contents.
  let html = input
    .replace(/<\s*(script|style|iframe|object|embed|noscript)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/<\s*(script|style|iframe|object|embed|noscript)[^>]*\/?>/gi, "");

  // 2. Walk tags and rebuild only what's allowed.
  html = html.replace(/<(\/?)([a-zA-Z0-9]+)((?:[^>"']|"[^"]*"|'[^']*')*)>/g, (
    _match,
    closing: string,
    tagName: string,
    attrs: string,
  ) => {
    const tag = tagName.toLowerCase();
    if (!ALLOWED_TAGS.has(tag)) return "";
    if (closing) return `</${tag}>`;

    const allowedForTag = ALLOWED_ATTRS[tag];
    if (!allowedForTag) return `<${tag}>`;

    const kept: string[] = [];
    const attrRe = /([a-zA-Z0-9-]+)\s*=\s*("([^"]*)"|'([^']*)')/g;
    let m: RegExpExecArray | null;
    while ((m = attrRe.exec(attrs)) !== null) {
      const name = m[1].toLowerCase();
      const value = m[3] ?? m[4] ?? "";
      if (name.startsWith("on")) continue; // no event handlers
      if (!allowedForTag.has(name)) continue;
      if ((name === "href" || name === "src") && !isSafeUrl(value)) continue;
      kept.push(`${name}="${value.replace(/"/g, "&quot;")}"`);
    }

    // Force safe rel on links that open in a new tab.
    if (tag === "a") {
      const hasTargetBlank = /target\s*=\s*["']_blank["']/i.test(attrs);
      if (hasTargetBlank && !kept.some((a) => a.startsWith("rel="))) {
        kept.push('rel="noopener noreferrer"');
      }
    }

    return kept.length ? `<${tag} ${kept.join(" ")}>` : `<${tag}>`;
  });

  return html;
}

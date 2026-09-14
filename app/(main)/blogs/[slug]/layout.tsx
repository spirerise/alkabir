import type { Metadata } from "next";
import { getBlogPostBySlug, allBlogPosts } from "@/lib/data/blogs";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { absoluteUrl } from "@/lib/seo/site";

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post was not found.",
      robots: { index: false, follow: false },
    };
  }

  const url = `/blogs/${post.slug}`;
  // Truncate the post title for SEO (Google shows ~60 chars). Append brand only if there's room.
  const brandSuffix = " | AL-KABIR";
  const maxTitleLen = 60;
  const seoTitle =
    post.title.length + brandSuffix.length <= maxTitleLen
      ? post.title + brandSuffix
      : post.title.length <= maxTitleLen
        ? post.title
        : post.title.slice(0, maxTitleLen - 1).replace(/\s+\S*$/, "") + "…";

  // Pad/truncate the excerpt to fit Google's sweet-spot description range (120-160)
  let seoDesc = post.excerpt.replace(/\s+/g, " ").trim();
  if (seoDesc.length < 120) {
    seoDesc = `${seoDesc} Read AL-KABIR's expert guide to construction equipment rental in Dubai & UAE.`.replace(/\s+/g, " ").trim();
  }
  if (seoDesc.length > 158) {
    seoDesc = seoDesc.slice(0, 155).replace(/[,.;:\s]+\S*$/, "") + "…";
  }

  return {
    title: { absolute: seoTitle },
    description: seoDesc,
    keywords: [...post.tags, post.category, "AL-KABIR blog", "construction machinery Dubai"],
    authors: [{ name: post.author.name }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: seoTitle,
      description: seoDesc,
      url: absoluteUrl(url),
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      section: post.category,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDesc,
      images: [post.image],
    },
  };
}

export default async function BlogDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  return (
    <>
      {post && (
        <JsonLd
          id={`article-${post.slug}`}
          data={[
            articleSchema({
              headline: post.title,
              description: post.excerpt,
              image: post.image,
              datePublished: post.publishedAt,
              dateModified: post.publishedAt,
              authorName: post.author.name,
              authorRole: post.author.role,
              url: `/blogs/${post.slug}`,
              keywords: post.tags,
              articleSection: post.category,
            }),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blogs" },
              { name: post.title, url: `/blogs/${post.slug}` },
            ]),
          ]}
        />
      )}
      {children}
    </>
  );
}

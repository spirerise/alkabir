"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  getRecentPosts,
  blogCategories,
  allBlogPosts,
} from "@/lib/data/blogs";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Icons as components
const CalendarIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const BookmarkIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.id, 3);
  const recentPosts = getRecentPosts(5);

  // Get previous and next posts for navigation
  const currentIndex = allBlogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allBlogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allBlogPosts.length - 1 ? allBlogPosts[currentIndex + 1] : null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-zinc-200 dark:bg-zinc-800">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-20 md:py-28">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950" />
        
        {/* Decorative Elements */}
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm">
            <Link href="/" className="text-zinc-400 transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRightIcon />
            <Link href="/blogs" className="text-zinc-400 transition-colors hover:text-white">
              Blog
            </Link>
            <ChevronRightIcon />
            <span className="truncate max-w-[200px] text-zinc-500">{post.category}</span>
          </nav>

          <div className="mx-auto max-w-4xl text-center">
            {/* Category Badge */}
            <Badge className="mb-6 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/30">
              {post.category}
            </Badge>

            {/* Title */}
            <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl">
              {post.excerpt}
            </p>

            {/* Author & Meta Row */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-amber-500/50">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">{post.author.name}</p>
                  <p className="text-sm text-amber-500">{post.author.role}</p>
                </div>
              </div>

              <Separator orientation="vertical" className="h-10 bg-zinc-700 hidden sm:block" />

              {/* Meta Info */}
              <div className="flex items-center gap-6 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <CalendarIcon />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group h-14 bg-amber-500 px-8 text-base font-semibold text-black hover:bg-amber-400"
              >
                <Link href="/get-quote" className="flex items-center justify-center gap-2">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  Get a Quote
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 border-zinc-700 bg-zinc-900/50 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-zinc-800"
              >
                <Link href="tel:+971554555786" className="flex items-center justify-center gap-2">
                  <svg
                    className="h-5 w-5 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-12 mb-16 md:-mt-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Content & Sidebar */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-12">
              {/* Floating Share Bar - Desktop */}
              <aside className="hidden lg:col-span-1 lg:block">
                <div className="sticky top-24">
                  <div className="flex flex-col items-center gap-3">
                    <span className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">Share</span>
                    <button
                      onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-[#1DA1F2] hover:text-white dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      <TwitterIcon />
                    </button>
                    <button
                      onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`, '_blank')}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-[#0A66C2] hover:text-white dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      <LinkedInIcon />
                    </button>
                    <button
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-[#1877F2] hover:text-white dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      <FacebookIcon />
                    </button>
                    <button
                      onClick={handleCopyLink}
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                        copied 
                          ? 'bg-green-500 text-white' 
                          : 'bg-zinc-100 text-zinc-600 hover:bg-amber-500 hover:text-black dark:bg-zinc-800 dark:text-zinc-400'
                      }`}
                    >
                      <LinkIcon />
                    </button>
                    <Separator className="my-2 w-6" />
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-red-500 hover:text-white dark:bg-zinc-800 dark:text-zinc-400">
                      <HeartIcon />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-amber-500 hover:text-black dark:bg-zinc-800 dark:text-zinc-400">
                      <BookmarkIcon />
                    </button>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-7">
                {/* Article Content */}
                <div
                  className="prose prose-lg prose-zinc dark:prose-invert max-w-none 
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-amber-500 prose-h2:pl-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-zinc-600 prose-p:leading-relaxed dark:prose-p:text-zinc-300
                    prose-a:text-amber-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-zinc-900 dark:prose-strong:text-white
                    prose-ul:my-6 prose-li:text-zinc-600 dark:prose-li:text-zinc-300
                    prose-blockquote:border-l-amber-500 prose-blockquote:bg-zinc-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg dark:prose-blockquote:bg-zinc-900"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-medium text-zinc-500">Tags:</span>
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-zinc-100 text-zinc-700 hover:bg-amber-100 hover:text-amber-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-amber-500/20 dark:hover:text-amber-500 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Mobile Share Bar */}
                <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
                  <span className="text-sm font-medium text-zinc-500">Share:</span>
                  <button
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-[#1DA1F2] hover:text-white dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    <TwitterIcon />
                  </button>
                  <button
                    onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`, '_blank')}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-[#0A66C2] hover:text-white dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    <LinkedInIcon />
                  </button>
                  <button
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-[#1877F2] hover:text-white dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    <FacebookIcon />
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                      copied 
                        ? 'bg-green-500 text-white' 
                        : 'bg-zinc-100 text-zinc-600 hover:bg-amber-500 hover:text-black dark:bg-zinc-800 dark:text-zinc-400'
                    }`}
                  >
                    <LinkIcon />
                  </button>
                </div>

                {/* Author Card */}
                <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 p-8 dark:from-zinc-900 dark:to-zinc-800">
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl ring-4 ring-amber-500/20">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 text-xs font-medium uppercase tracking-wider text-amber-600">
                        Written by
                      </div>
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                        {post.author.name}
                      </h4>
                      <p className="text-amber-600">{post.author.role}</p>
                      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                        Contributing writer at Al Kabir with expertise in construction
                        equipment, industry best practices, and project management solutions.
                      </p>
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <TwitterIcon />
                          Follow
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                          <LinkedInIcon />
                          Connect
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Post Navigation */}
                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                  {prevPost ? (
                    <Link
                      href={`/blogs/${prevPost.slug}`}
                      className="group rounded-xl border border-zinc-200 p-5 transition-all hover:border-amber-500/50 hover:bg-amber-50/50 dark:border-zinc-800 dark:hover:border-amber-500/50 dark:hover:bg-amber-500/5"
                    >
                      <div className="mb-2 flex items-center gap-2 text-sm text-zinc-500">
                        <ArrowLeftIcon />
                        <span>Previous Article</span>
                      </div>
                      <h4 className="line-clamp-2 font-semibold text-zinc-900 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500">
                        {prevPost.title}
                      </h4>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {nextPost && (
                    <Link
                      href={`/blogs/${nextPost.slug}`}
                      className="group rounded-xl border border-zinc-200 p-5 text-right transition-all hover:border-amber-500/50 hover:bg-amber-50/50 dark:border-zinc-800 dark:hover:border-amber-500/50 dark:hover:bg-amber-500/5"
                    >
                      <div className="mb-2 flex items-center justify-end gap-2 text-sm text-zinc-500">
                        <span>Next Article</span>
                        <ArrowRightIcon />
                      </div>
                      <h4 className="line-clamp-2 font-semibold text-zinc-900 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500">
                        {nextPost.title}
                      </h4>
                    </Link>
                  )}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-24 space-y-8">
                  {/* Newsletter Card */}
                  <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 p-6 text-black">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black/10 text-2xl">
                      ✉️
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Stay Updated</h3>
                    <p className="mb-4 text-sm text-black/80">
                      Get the latest articles and industry insights delivered to your inbox weekly.
                    </p>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="mb-3 w-full rounded-lg border-0 bg-white/90 px-4 py-3 text-sm text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                    <Button className="w-full bg-black text-amber-500 hover:bg-zinc-900">
                      Subscribe Now
                    </Button>
                  </div>

                  {/* Recent Posts */}
                  <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
                    <h3 className="mb-5 text-lg font-bold text-zinc-900 dark:text-white">
                      Recent Articles
                    </h3>
                    <div className="space-y-5">
                      {recentPosts.slice(0, 4).map((recentPost, index) => (
                        <Link
                          key={recentPost.id}
                          href={`/blogs/${recentPost.slug}`}
                          className="group flex gap-4"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-sm font-bold text-zinc-400 group-hover:bg-amber-500 group-hover:text-black dark:bg-zinc-800">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <h4 className="line-clamp-2 text-sm font-medium text-zinc-700 group-hover:text-amber-600 dark:text-zinc-300 dark:group-hover:text-amber-500">
                              {recentPost.title}
                            </h4>
                            <p className="mt-1 text-xs text-zinc-500">
                              {recentPost.readTime} min read
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
                    <h3 className="mb-5 text-lg font-bold text-zinc-900 dark:text-white">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {blogCategories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/blogs?category=${category.slug}`}
                          className="flex items-center justify-between rounded-lg p-3 text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                          <span className="font-medium text-zinc-700 dark:text-zinc-300">
                            {category.name}
                          </span>
                          <Badge variant="secondary" className="bg-zinc-100 dark:bg-zinc-800">
                            {category.count}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Equipment CTA */}
                  <div className="overflow-hidden rounded-2xl bg-zinc-900 p-6 text-white">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-2xl">
                      🚜
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Need Equipment?</h3>
                    <p className="mb-4 text-sm text-zinc-400">
                      Get a free quote for your construction equipment rental needs.
                    </p>
                    <Button asChild className="w-full bg-amber-500 text-black hover:bg-amber-400">
                      <Link href="/get-quote">Get Free Quote</Link>
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-20 dark:bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge className="mb-4 bg-amber-500/10 text-amber-600">
                Keep Reading
              </Badge>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                Related Articles
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="group overflow-hidden border-zinc-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <Link href={`/blogs/${relatedPost.slug}`}>
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <Badge className="absolute left-4 top-4 bg-amber-500 text-black">
                        {relatedPost.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center gap-3 text-sm text-zinc-500">
                        <span>{formatDate(relatedPost.publishedAt)}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime} min read</span>
                      </div>
                      <h3 className="line-clamp-2 text-lg font-bold text-zinc-900 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500">
                        {relatedPost.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-zinc-500">Want to explore more articles?</p>
          <Button asChild size="lg" className="gap-2 bg-amber-500 text-black hover:bg-amber-400">
            <Link href="/blogs">
              <ArrowLeftIcon />
              Back to All Articles
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

import React from "react";

import { notFound } from "next/navigation";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import MDXContent from "@/components/mdx-content";

import { getPostBySlug, getPosts } from "@/lib/api";

import type { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="flex flex-col mt-6 ">
      <Link className="mt-6 mb-6" href="/">
        <span className="py-2 px-4 pr-6 rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors duration-200 inline-flex items-center text-sm text-zinc-200">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to blog
        </span>
      </Link>
      <div className="p-4 border border-zinc-700 rounded-2xl">
        <h1 className="text-4xl text-zinc-50 font-semibold">{post.title}</h1>
        <p className="text-xs text-zinc-200 mt-2">
          Written by {post.author.name}
        </p>
        <article className="max-w-none prose prose-invert prose-sm mt-10 mx-auto">
          <MDXContent source={post.content} />
        </article>
      </div>
    </div>
  );
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return {
    title: `${post.title} | someblog`,
  };
}

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

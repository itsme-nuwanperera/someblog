import React from "react";

import Link from "next/link";

import { getPosts } from "@/lib/api";

export default function BlogCard() {
  const posts = getPosts();
  return (
    <>
      {!!posts &&
        posts.map((post) => (
          <div key={post.slug} className="mb-4 p-6 border border-zinc-700 hover:bg-zinc-800 transition-all duration-200 rounded-2xl">
            <Link className="text-xl text-zinc-50 font-medium" href={`/posts/${post.slug}`}>
              {post.title}
              <p className="text-xs text-zinc-400 mt-2">{post.excerpt}</p>
              <p className="text-xs text-zinc-400 mt-2">
                Written by {post.author.name}
              </p>
            </Link>
          </div>
        ))}
    </>
  );
}

import React from "react";
import { blogPosts } from "../data/mockData";

const cream = "#e6dcd3";
const charcoal = "#1c1c1e";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
// Numbers (date) seedhe dikhane ke liye
const plain = { fontFamily: "system-ui, Arial, sans-serif" };

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="px-4 py-24 sm:px-6 lg:px-8"
      style={{ backgroundColor: charcoal, color: cream }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2
            className="mb-5 text-3xl font-medium uppercase leading-[1.1] sm:text-5xl"
            style={serif}
          >
            Sanctuary Journal &amp; Blog
          </h2>
          <p className="mx-auto max-w-xl text-xs leading-relaxed opacity-75 sm:text-sm">
            Writings across earth-based wisdom, ecology, and spiritual
            contemplative practice.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="p-8 shadow-xl sm:p-10"
              style={{ backgroundColor: cream, color: charcoal }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: charcoal, color: cream }}
                >
                  {post.category}
                </span>
                <span className="text-xs opacity-60" style={plain}>
                  {post.date}
                </span>
              </div>
              <h3
                className="mb-3 text-xl font-semibold uppercase leading-snug sm:text-2xl"
                style={serif}
              >
                {post.title}
              </h3>
              <p className="mb-5 text-xs leading-relaxed opacity-75 sm:text-sm">
                {post.excerpt}
              </p>
              <a
                href="#read-more"
                className="text-xs font-medium underline underline-offset-4 transition hover:opacity-70 sm:text-sm"
              >
                Read Full Article →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

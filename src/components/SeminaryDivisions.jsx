import React from "react";
import { seminaryDivisions } from "../data/mockData";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export default function SeminaryDivisions() {
  return (
    <section id="seminary" className="bg-[#e6dcd3]">
      {/* Solid navy top band */}
      <div className="relative overflow-hidden bg-[#14213d] px-4 pt-20 pb-56 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2
            className="mb-5 text-3xl font-medium uppercase leading-[1.1] text-[#b8895a] sm:text-5xl"
            style={serif}
          >
            University &amp; Seminary Divisions
          </h2>
          <p className="mx-auto max-w-xl text-xs leading-relaxed text-gray-200 sm:text-sm">
            Explore our structured pathways designed for contemplative study,
            sovereign living, and spiritual leadership.
          </p>
        </div>
      </div>

      {/* Cards straddling navy band and cream area */}
      <div className="relative z-20 -mt-40 px-4 pb-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 bg-[#faf7f4] shadow-2xl md:grid-cols-2">
          {seminaryDivisions.map((div, i) => (
            <article
              key={div.id}
              className={`p-8 sm:p-10 ${i % 2 === 1 ? "bg-[#f3eeea]" : ""}`}
            >
              <span className="mb-4 inline-block rounded-full bg-[#14213d] px-3 py-1 text-[11px] uppercase tracking-wider text-[#b8895a]">
                {div.badge}
              </span>
              <h3
                className="mb-3 text-xl font-semibold uppercase leading-snug text-[#8a6d4f] sm:text-2xl"
                style={serif}
              >
                {div.title}
              </h3>
              <p className="mb-6 text-xs leading-relaxed text-gray-500 sm:text-sm">
                {div.description}
              </p>
              <a
                href="https://skillspring.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-medium text-[#8a6d4f] transition hover:text-[#14213d] sm:text-sm"
              >
                Access via SkillSpring Portal →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

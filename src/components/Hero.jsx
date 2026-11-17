import React from "react";

// Colors: yahan se poore hero ka rang badal sakti hain
const bg = "#1f2530";
const stripeA = "#2b323e";
const stripeB = "#242a35";
const gold = "#b8895a";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

const highlights = [
  {
    title: "Seminary Programs",
    meta: "Enrollment open",
    text: "Ordination paths grounded in Christ Consciousness and inner practice.",
  },
  {
    title: "Elemental Wisdom",
    meta: "Weekly teachings",
    text: "Earth, water, fire and air as a living curriculum for the spirit.",
  },
  {
    title: "Ecological Communion",
    meta: "Seasonal gatherings",
    text: "Rituals and retreats rooted in the land and its cycles.",
  },
  {
    title: "Sanctuary Store",
    meta: "Always open",
    text: "Books, tools and offerings to support your daily practice.",
  },
];

export default function Hero() {
  return (
    <section className="bg-[#e6dcd3]">
      {/* Dark hero */}
      <div
        className="relative overflow-hidden px-4 pt-24 pb-56 text-white sm:pb-52"
        style={{
          backgroundColor: bg,
          backgroundImage: `repeating-linear-gradient(115deg, ${stripeA} 0 38px, ${stripeB} 38px 76px)`,
        }}
      >
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-5 text-sm uppercase tracking-widest text-gray-300">
            A Spiritual Seminary &amp; University Ecosystem
          </p>
          <h1
            className="text-4xl font-medium uppercase leading-[1.1] sm:text-6xl"
            style={{ ...serif, color: gold }}
          >
            Earth-Based Spirituality &amp; Elemental Wisdom
          </h1>
          <p className="mx-auto mb-10 mt-7 max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base">
            Welcome to a sanctuary dedicated to Christ Consciousness as an inner
            frequency, embodied personal transformation, and deep ecological
            communion.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Seminary Programs Button */}
            <a
              href="#seminary"
              className="inline-block rounded bg-[#b8895a] px-7 py-3 text-sm font-semibold text-[#1f2530] no-underline shadow-md transition hover:bg-[#a6784a]"
            >
              Explore Seminary Programs &nbsp;→
            </a>
            {/* Visit Store Button */}
            <a
              href="#store"
              className="inline-block rounded bg-[#b8895a] px-7 py-3 text-sm font-semibold text-[#1f2530] no-underline shadow-md transition hover:bg-[#a6784a]"
            >
              Visit Store
            </a>
          </div>
        </div>
      </div>

      {/* Cards straddling the dark hero and cream area */}
      <div className="relative z-20 -mt-40 px-4 pb-24 sm:-mt-36">
        <div className="mx-auto grid max-w-5xl grid-cols-1 bg-[#faf7f4] shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <article
              key={item.title}
              className={`p-6 sm:p-8 ${i % 2 === 1 ? "bg-[#f3eeea]" : ""}`}
            >
              <h3
                className="mb-3 text-lg font-bold uppercase leading-snug text-[#8a6d4f]"
                style={serif}
              >
                {item.title}
              </h3>
              <p className="mb-2 text-xs font-medium text-[#8a6d4f]">
                {item.meta}
              </p>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

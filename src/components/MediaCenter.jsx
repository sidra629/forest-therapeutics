import React from "react";
import { mediaItems } from "../data/mockData";

const cream = "#e6dcd3";
const charcoal = "#1c1c1e";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
// Numbers (date, duration) seedhe dikhane ke liye
const plain = { fontFamily: "system-ui, Arial, sans-serif" };

export default function MediaCenter() {
  return (
    <section
      id="media"
      className="px-4 py-24 sm:px-6 lg:px-8"
      style={{ backgroundColor: cream, color: charcoal }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2
            className="mb-5 text-3xl font-medium uppercase leading-[1.1] sm:text-5xl"
            style={serif}
          >
            Media Center
          </h2>
          <p className="mx-auto max-w-xl text-xs leading-relaxed opacity-75 sm:text-sm">
            Explore our archived podcasts, televised interviews, and spoken
            teachings.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {mediaItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between p-8 shadow-xl"
              style={{ backgroundColor: charcoal, color: cream }}
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: cream, color: charcoal }}
                  >
                    {item.type}
                  </span>
                  <span className="text-xs opacity-60" style={plain}>
                    {item.date}
                  </span>
                </div>
                <h3
                  className="mb-3 text-xl font-semibold uppercase leading-snug sm:text-2xl"
                  style={serif}
                >
                  {item.title}
                </h3>
                <p className="mb-6 text-xs opacity-70 sm:text-sm" style={plain}>
                  Duration: {item.duration}
                </p>
              </div>
              <button className="text-left text-xs font-medium underline underline-offset-4 transition hover:opacity-70 sm:text-sm">
                Listen / Watch Episode →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";

const cream = "#e6dcd3";
const charcoal = "#1c1c1e";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
const plain = { fontFamily: "system-ui, Arial, sans-serif" };

const columns = [
  {
    heading: "Navigate",
    links: [
      { label: "Seminary", href: "#seminary" },
      { label: "Store", href: "#store" },
      { label: "Bookings", href: "#booking" },
      { label: "Media", href: "#media" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    heading: "Our Portals",
    links: [
      { label: "WithMe Community", href: "https://withme.app", external: true },
      {
        label: "SkillSpring Classroom",
        href: "https://skillspring.com",
        external: true,
      },
    ],
  },
  {
    heading: "Information",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

// Social links: apne asli links yahan daal dein
const socials = [
  { icon: "fa-brands fa-facebook-f", href: "#", label: "Facebook" },
  { icon: "fa-brands fa-instagram", href: "#", label: "Instagram" },
  { icon: "fa-brands fa-youtube", href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      className="border-t px-4 pt-14 sm:px-6 lg:px-8"
      style={{
        backgroundColor: charcoal,
        color: cream,
        borderColor: `${cream}33`,
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Top: about + buttons */}
        <div
          className="flex flex-col gap-10 border-b pb-10 md:flex-row md:items-start md:justify-between"
          style={{ borderColor: `${cream}33` }}
        >
          <div className="max-w-md">
            <h3
              className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
              style={plain}
            >
              About Us
            </h3>
            <p
              className="mb-2 text-2xl uppercase tracking-[0.2em]"
              style={serif}
            >
              Forest Therapeutics
            </p>
            <p className="mb-5 text-xs leading-relaxed opacity-70">
              Spiritual Seminary &amp; University Ecosystem
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border text-sm transition hover:opacity-70"
                  style={{ borderColor: `${cream}66` }}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 md:w-56">
            <a
              href="#booking"
              className="rounded px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest transition hover:opacity-80"
              style={{ backgroundColor: cream, color: charcoal, ...plain }}
            >
              Schedule a Session
            </a>
            <a
              href="#store"
              className="rounded border px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest transition hover:opacity-70"
              style={{ borderColor: cream, ...plain }}
            >
              Visit Store
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-3">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4
                className="mb-4 text-xs font-semibold uppercase tracking-[0.25em]"
                style={plain}
              >
                {col.heading}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="opacity-75 transition hover:opacity-100"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Fine print */}
      <div
        className="border-t py-6 text-center text-[11px] opacity-60"
        style={{ borderColor: `${cream}33`, ...plain }}
      >
        &copy; {new Date().getFullYear()} Forest Therapeutics. All Rights
        Reserved.
      </div>
    </footer>
  );
}

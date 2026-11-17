import React, { useState } from "react";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

const links = [
  ["#seminary", "Seminary"],
  ["#store", "Store"],
  ["#booking", "Bookings"],
  ["#media", "Media"],
  ["#blog", "Blog"],
];

function Logo({ className = "h-12 w-12 shrink-0" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Forest Therapeutics logo"
    >
      <circle cx="60" cy="60" r="58" fill="#1c1c1e" />
      <circle
        cx="60"
        cy="60"
        r="55"
        fill="none"
        stroke="#b8895a"
        strokeWidth="2"
      />
      <circle
        cx="60"
        cy="60"
        r="51"
        fill="none"
        stroke="#b8895a"
        strokeWidth="0.6"
        opacity="0.7"
      />
      <g stroke="#1c1c1e" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M60 80C36 86 20 78 14 62C32 60 50 66 60 80Z" fill="#8a6d4f" />
        <path
          d="M60 80C84 86 100 78 106 62C88 60 70 66 60 80Z"
          fill="#8a6d4f"
        />
        <path d="M60 80C44 78 32 66 30 46C46 50 56 62 60 80Z" fill="#b8895a" />
        <path d="M60 80C76 78 88 66 90 46C74 50 64 62 60 80Z" fill="#b8895a" />
        <path d="M60 30C72 46 72 66 60 82C48 66 48 46 60 30Z" fill="#d4a574" />
      </g>
      <g stroke="#e6dcd3" strokeWidth="1.6" strokeLinecap="round">
        <line x1="38" y1="92" x2="82" y2="92" />
        <line x1="48" y1="98" x2="72" y2="98" />
      </g>
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Yahan maine filhal test ke liye Google ka link laga diya hai jo 100% chalega
  const handleCommunityClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    window.open("https://www.google.com", "_blank", "noopener,noreferrer");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#b8895a]/30 bg-[#1f2530] text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 leading-tight text-[#b8895a] no-underline"
            style={serif}
          >
            <Logo className="h-12 w-12 shrink-0" />
            <span className="whitespace-nowrap text-base tracking-[0.25em] sm:text-xl">
              FOREST THERAPEUTICS
            </span>
          </a>

          {/* Desktop links */}
          <nav
            className="hidden items-center gap-6 text-[15px] uppercase tracking-[0.15em] lg:flex"
            style={serif}
          >
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap text-gray-200 no-underline transition hover:text-[#b8895a]"
              >
                {label}
              </a>
            ))}
            <a
              href="https://www.google.com"
              onClick={handleCommunityClick}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 cursor-pointer whitespace-nowrap rounded border border-[#b8895a] px-4 py-2 font-semibold text-[#b8895a] no-underline transition hover:bg-[#b8895a] hover:text-[#1f2530]"
            >
              WithMe Community
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-white hover:text-[#b8895a] focus:outline-none lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div
          className="space-y-2 border-t border-white/10 bg-[#1f2530] px-4 pb-5 pt-3 text-base uppercase tracking-widest lg:hidden"
          style={serif}
        >
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-200 no-underline hover:text-[#b8895a]"
            >
              {label}
            </a>
          ))}
          <a
            href="https://www.google.com"
            onClick={handleCommunityClick}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block cursor-pointer rounded border border-[#b8895a] px-4 py-2 font-semibold text-[#b8895a] no-underline transition hover:bg-[#b8895a] hover:text-[#1f2530]"
          >
            WithMe Community →
          </a>
        </div>
      )}
    </header>
  );
}

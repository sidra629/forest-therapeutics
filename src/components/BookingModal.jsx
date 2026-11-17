import React from "react";

const cream = "#e6dcd3";
const charcoal = "#1c1c1e";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export default function BookingModal() {
  return (
    <section
      id="booking"
      className="px-4 py-24 sm:px-6 lg:px-8"
      style={{ backgroundColor: charcoal }}
    >
      <div
        className="mx-auto max-w-4xl p-10 text-center shadow-2xl sm:p-16"
        style={{ backgroundColor: cream, color: charcoal }}
      >
        <h2
          className="mb-5 text-3xl font-medium uppercase leading-[1.1] sm:text-5xl"
          style={serif}
        >
          Schedule a Session
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-xs leading-relaxed opacity-75 sm:text-sm">
          Book in-person mentorship or online counseling sessions. Online
          appointments connect instantly via our native Zoom integration.
        </p>
        <button
          onClick={() => alert("Opening Wix Bookings calendar...")}
          className="rounded px-8 py-3.5 text-xs font-medium uppercase tracking-wider transition hover:opacity-80"
          style={{ backgroundColor: charcoal, color: cream }}
        >
          View Available Time Slots
        </button>
      </div>
    </section>
  );
}

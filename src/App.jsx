import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SeminaryDivisions from "./components/SeminaryDivisions";
import StoreSection from "./components/StoreSection";
import BookingModal from "./components/BookingModal";
import MediaCenter from "./components/MediaCenter";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-earth-sand text-forest-900 font-serif selection:bg-goldenrod selection:text-forest-900">
      <Navbar />
      <main>
        <Hero />
        <SeminaryDivisions />
        <StoreSection />
        <BookingModal />
        <MediaCenter />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

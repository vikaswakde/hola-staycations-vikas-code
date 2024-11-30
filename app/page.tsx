// app/page.tsx
"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CtaSection from "./components/CtaSection";
import CuratedByExperts from "./components/CuratedByExperts";
import LocationsCarousel from "./components/LocationsCarousel";
import WhoAreWe from "./components/WhoAreWe";
import RevolutionizingHospitality from "./components/RevolutionizingHospitality";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showMeme, setShowMeme] = useState(false);

  useEffect(() => {
    // Check if screen width is less than 1024px (typical laptop breakpoint)
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);

    // Check on initial load
    checkMobile();

    // Check when window is resized
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (showMeme) {
    return (
      <div className="h-screen bg-[#331906] flex items-center justify-center">
        <Image
          src="/masti-nahi-meme.jpg"
          alt="Nice try!"
          width={500}
          height={500}
          className="max-w-full h-auto"
        />
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="h-screen bg-[#331906] text-white flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">🤔 Hold up!</h2>
        <p className="mb-6">
          Are you sure you&apos;re using a desktop screen? This magical
          experience is designed for bigger screens only!
        </p>
        <div className="space-y-3">
          <button
            onClick={() => setShowMeme(true)}
            className="block w-full px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700"
          >
            Yes, I&apos;m secretly on a desktop 🖥️
          </button>
          <button
            onClick={() => window.close()}
            className="block w-full px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700"
          >
            Oops, caught me on mobile 📱
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#331906] hidden md:block">
        <Navbar />
        <Hero />
        <CtaSection />
        <CuratedByExperts />
        <LocationsCarousel />
        <WhoAreWe />
        <RevolutionizingHospitality />
        <WhyUs />
        <Testimonials />
        <Faqs />
        <Footer />
      </div>
      <div className="h-screen bg-[#331906] md:hidden text-white flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">🤔 Hold up!</h2>
        <p className="mb-6">
          Are you sure you&apos;re using a desktop screen? This magical
          experience is designed for bigger screens only!
        </p>
        <div className="space-y-3">
          <button
            onClick={() => setShowMeme(true)}
            className="block w-full px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700"
          >
            Yes, I&apos;m secretly on a desktop 🖥️
          </button>
          <button
            onClick={() => window.close()}
            className="block w-full px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700"
          >
            Oops, caught me on mobile 📱
          </button>
        </div>
      </div>
    </div>
  );
}

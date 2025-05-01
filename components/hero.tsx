"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background video or image carousel (placeholder) */}
      <div className="absolute inset-0 z-0">
        {/* If using video */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/inkflow.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          <p className="font-retrophile">Bimmoon.</p> Stunning Impact.
        </h1>
        <p className="text-lg md:text-xl text-white mb-6 max-w-xl drop-shadow">
          {/* We bring your ideas to life with high-quality printing solutions for businesses and creatives. */}
          We design and craft expressive print materials, packaging, and visual stories that leave a mark — on paper and beyond.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="default" size="lg">
            View Portfolio
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
}

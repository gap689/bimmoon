"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

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
          <source src="/lasercut2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        {/* <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span><span className="text-sm font-medium">Bimmoon is out! See what's new</span>
          <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a> */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg font-retrophile">
          Bimmoon
        </h1>
        <p className="text-lg md:text-xl text-white mb-6 max-w-xl drop-shadow">
          {/* We bring your ideas to life with high-quality printing solutions for businesses and creatives. */}
          Letreros, llaveros, portaplacas, calcomanías, y más. Personalizadas con estilo y los mejores materiales.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="default" size="lg">
            Productos
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:text-black">
            <a
              href="https://wa.me/525569728426"
              target="_blank"
              title="Reach us via WhatsApp"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-white transition"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span className="inline text-xs">Contáctanos</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

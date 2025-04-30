"use client";

import React from "react";
import Image from "next/image";

const brands = [
  { name: "Google", src: "/brands/google.svg" },
  { name: "Heineken", src: "/brands/heineken.svg" },
  { name: "redbull", src: "/brands/redbull.svg" },
  // { name: "Nike", src: "/brands/nike.svg" },
  // { name: "PaperCo", src: "/brands/paperco.svg" },
  // { name: "Moleskine", src: "/brands/moleskine.svg" },
];

export function BrandMarquee() {
  return (
    <section className="w-full overflow-hidden py-8 border-t border-b">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-14 px-6 overflow-x-auto no-scrollbar w-fit">
        {brands.concat(brands).map((brand, i) => (
          <div
            key={i}
            className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src={brand.src}
              alt={`${brand.name} logo`}
              width={180}
              height={120}
              className="object-contain h-20 w-auto grayscale"
            />
          </div>
        ))}
      </div>
      {/* <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-lg font-semibold mb-6 text-muted-foreground">
          Trusted by creative brands
        </h2>
        <div className="flex overflow-x-auto gap-10 scroll-smooth px-2 sm:px-6 no-scrollbar animate-marquee">
          {brands.concat(brands).map((brand, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={brand.src}
                alt={`${brand.name} logo`}
                width={140}
                height={80}
                className="object-contain h-16 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}

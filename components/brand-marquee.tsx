"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const brands = [
  { name: "Google", src: "/brands/google.svg" },
  { name: "Heineken", src: "/brands/heineken.svg" },
  { name: "redbull", src: "/brands/redbull.svg" },
  { name: "CocaCola", src: "/brands/coca-cola.svg" },
  { name: "UPS", src: "/brands/ups.svg" },
  { name: "Yamaha", src: "/brands/yamaha.svg" },
  { name: "Ebay", src: "/brands/ebay.svg" },
  { name: "Levis", src: "/brands/levis.svg" },
];

export function BrandMarquee() {
  return (
    <section className="relative w-full overflow-hidden py-6 border-t border-b bg-transparent">
      <Marquee pauseOnHover speed={50}>
        { brands.map((brand, i) => (
          <div
            key={i}
            className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src={brand.src}
              alt={`${brand.name} logo`}
              width={180}
              height={120}
              className="object-contain h-20 sm:h-24 w-auto grayscale mx-4 sm:mx-6"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

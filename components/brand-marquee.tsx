"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const brands = [
  { name: "Plastiglas", src: "/brands/plastiglaswhite.svg" },
  { name: "acriplas", src: "/brands/acriplas.svg" },
  { name: "Mimaki", src: "/brands/mimaki.svg" },
  { name: "Asus", src: "/brands/asus.svg" },
  { name: "AveryDennison", src: "/brands/averydennison.svg" },
  { name: "Oracal", src: "/brands/oracal.svg" },
  { name: "xtool", src: "/brands/xtool.svg" },
  { name: "eurocotton", src: "/brands/eurocotton.svg" },
  { name: "fitcap", src: "/brands/fitcap.svg" },
  { name: "3m", src: "/brands/3m.svg" },
];

export function BrandMarquee() {
  return (
    <section className="relative w-full overflow-hidden py-7 bg-transparent">
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

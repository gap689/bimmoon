"use client"

import { Vortex } from "@/components/ui/vortex";
import { useState } from "react";
import clsx from 'clsx';
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ImageItem = {
  label: string;
  src: string;
  link: string;
};

const images: ImageItem[] = [
  { label: 'Corte acrílico', src: '/images/acrilicos.jpg', link: '/productos/corteacrilico' },
  { label: 'Emblemas', src: '/images/emblemas.jpg', link: '/productos/emblemas' },
  { label: 'Estampados', src: '/images/estampados.jpeg', link: '/productos/estampadoseimpresiones' },
  { label: 'Espejos', src: '/images/espejos.jpg', link: '/productos/espejos' },
  { label: 'Hawaianas', src: '/images/letreros.jpeg', link: '/productos/hawaianas' },
  { label: 'Letreros', src: '/images/letreros.jpeg', link: '/productos/letreros' },
  { label: 'Stickers', src: 'stickers.jpeg', link: '/productos/stickers' },
  { label: 'Portaplacas', src: '/images/portaplacas.jpeg', link: '/productos/portaplacas' },
  // { label: 'Postes', src: '/images/portaplacas.jpeg', link: '/productos/postes' },
  { label: 'Marimbas', src: '/images/marimbas.jpg', link: '/productos/marimbas' },
  { label: 'Extras', src: '/images/extras.jpg', link: '/productos/extras' },
];

const ProductosPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [direction, setDirection] = useState(1); // 1 for forward, -1 for back

  // const handleSetIndex = (index: number) => {
  //   setDirection(index > activeIndex ? 1 : -1);
  //   setActiveIndex(index);
  // };

  return ( 
    <div className="flex items-center justify-center text-3xl h-full w-full px-10">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={400}
        baseHue={120}
        baseRadius={0.1}
        className="w-full h-full"
      >
        <section className="w-full flex h-full justify-center items-center relative">
          <div className="absolute sm:left-8 left-0 top-1/2 translate-y-36 -rotate-90 origin-left text-3xl xl:text-4xl tracking-wider uppercase px-4 z-10 font-extralight font-serif">
            Our WORK
          </div>
          {/* Left: Image preview */}
          <div className="relative flex md:w-2/5 w-3/5 min-w-[250px] min-h-[360px] h-[calc(100vh_-_11rem)] md:h-[70vh] ml-3">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[activeIndex].src}
                src={images[activeIndex].src}
                alt={images[activeIndex].label}
                initial={{
                  opacity: 0,
                  // x: direction === 1 ? 100 : -100,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  // x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  // x: direction === 1 ? -100 : 100,
                  scale: 0.95,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute w-full h-full object-cover rounded-lg"
              />
            </AnimatePresence>
            {/* Navigation button */}
            <div className="bottom-4 right-4 hidden sm:absolute">
              <Link href={images[activeIndex].link}>
                <button className="px-4 py-2 rounded-xl bg-teal-600 text-white text-sm shadow-md hover:bg-teal-700 transition">
                  Ver {images[activeIndex].label}
                </button>
              </Link>
            </div>
            {/* Optional overlay on mobile */}
            <div className="md:hidden absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 z-10" />
          </div>

          {/* Right: Word list */}
          <div className="flex flex-col w-3/5 justify-center items-center gap-6 p-6 z-[4] -translate-x-10 sm:translate-x-0">
            {/* <h2 className="text-xl font-semibold mb-2">Nuestros Productos</h2> */}
            <ul className="flex flex-col gap-4 min-h-[360px] h-[calc(100vh_-_11rem)] md:h-[70vh] overflow-y-auto no-scrollbar">
              {images.map((item, index) => (
                <li
                  key={item.label}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={clsx(
                    'flex cursor-pointer font-luckiestGuy transition-colors text-3xl font-medium uppercase md:text-4xl xl:text-5xl',
                    activeIndex === index
                      ? 'text-teal-500'
                      : 'text-gray-400 hover:text-gray-600'
                  )}
                >
                  {item.label}
                  {activeIndex === index && (
                    <Link
                      href={item.link}
                      className="ml-3 text-sm font-normal lowercase underline hover:text-teal-700 transition rounded-full"
                    >
                      <ArrowUpRight className="w-6 h-6 shrink-0"/>
                      gallery
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Vortex>
    </div>
  );
}
 
export default ProductosPage;
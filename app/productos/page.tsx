"use client"

import { Vortex } from "@/components/ui/vortex";
import { useState } from "react";
import clsx from 'clsx';
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  { label: 'Hawaianas', src: '/images/hawaianas.jpg', link: '/productos/hawaianas' },
  { label: 'Letreros', src: '/images/letreros.jpeg', link: '/productos/letreros' },
  { label: 'Stickers', src: '/images/stickers2.jpg', link: '/productos/stickers' },
  { label: 'Portaplacas', src: '/images/portaplacas.jpeg', link: '/productos/portaplacas' },
  // { label: 'Postes', src: '/images/portaplacas.jpeg', link: '/productos/postes' },
  { label: 'Marimbas', src: '/images/marimbas.jpg', link: '/productos/marimbas' },
  { label: 'Extras', src: '/images/extras.jpg', link: '/productos/extras' },
];

const colorClasses = [
  'text-white',
  'text-red-500',
  'text-gray-400',
  'text-blue-500',
  'text-pink-600',
  'text-yellow-400',
  'text-purple-500',
  'text-cyan-500',
  'text-emerald-500',
  'text-indigo-400',
];

const ProductosPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  return ( 
    <div className="flex items-center justify-center text-3xl h-full w-full px-4 md:px-6">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={400}
        baseHue={120}
        baseRadius={0.1}
        className="w-full h-full"
      >
        <section className="w-full flex h-full justify-center items-center relative">
          {/* Left: Image preview */}
          <div className="relative flex md:w-2/5 sm:w-3/5 w-full min-w-[250px] min-h-[360px] h-[calc(100vh_-_10rem)] md:h-[80vh] mt-12 xl:ml-8">
            <Link href={images[activeIndex].link} className="sm:absolute hidden sm:flex sm:bottom-6 xl:bottom-1/4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-black/50 text-sm rounded-full transition font-bold text-nowrap">
              Ver Galería {images[activeIndex].label}
            </Link>
            <AnimatePresence mode="wait">
              <motion.img
                key={images[activeIndex].src}
                src={images[activeIndex].src}
                alt={images[activeIndex].label}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="md:hidden absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 z-10" />
          </div>

          {/* Right: Word list */}
          <div className="sm:flex sm:flex-col sm:flex-shrink-0 absolute sm:static sm:w-3/5 w-full items-center justify-center sm:items-start sm:justify-start gap-6 p-2 pl-5 z-20 overflow-x-hidden h-full no-scrollbar">
            <ul className="flex flex-col gap-3 min-h-[460px] h-[calc(100vh_-_10rem)] overflow-y-visible no-scrollbar pl-2 sm:pl-10 lg:pl-20">
              {images.map((item, index) => {
                const dynamicColor = colorClasses[activeIndex % colorClasses.length];
              
              return (
                <li
                  key={item.label}
                  onClick={() => router.push(item.link)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={clsx(
                    'flex items-center cursor-pointer text-[2.75rem] sm:text-5xl xl:text-6xl transition-colors duration-300 last:pb-20 first:mt-20 uppercase font-londrinaOutline font-semibold tracking-wider',
                    activeIndex === index
                      ? `${dynamicColor} font-londrinaSolid`
                      : `${dynamicColor}`
                  )}
                >
                    {item.label}
                    {
                      activeIndex === index && (
                        <Link href={images[activeIndex].link} className="sm:hidden z-10 sm:px-4 sm:py-2 px-3 py-1 bg-black/50 text-xs rounded-full transition font-normal font-sans lowercase text-nowrap ml-2 tracking-normal">
                          Ver Galería
                        </Link>
                      )
                    }
                </li>
              )})}
            </ul>
          </div>
        </section>
      </Vortex>
    </div>
  );
}
 
export default ProductosPage;
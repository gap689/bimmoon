"use client"

import { Vortex } from "@/components/ui/vortex";
import { useState } from "react";
import Image from 'next/image';
import clsx from 'clsx';

type ImageItem = {
  label: string;
  src: string;
};

const images: ImageItem[] = [
  { label: 'Letreros', src: '/images/letreros.jpeg' },
  { label: 'Iluminación', src: '/images/letrerosNeon.jpeg' },
  // { label: 'Llaveros', src: '/images/llaveros.jpg' },
  { label: 'Portaplacas', src: '/images/portaplacas.jpeg' },
  { label: 'Estampados', src: '/images/estampados.jpeg' },
  { label: 'Colgantes', src: '/images/colgajines.jpeg' },
  { label: 'Gorras', src: '/images/gorras.jpeg' },
  { label: 'Rotulos', src: '/images/rotulos.jpeg' },
];

const ProductosPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
          <div className="relative flex md:w-2/5 w-3/5 min-w-[250px] min-h-[350px] h-[calc(100vh_-_11rem)] md:h-[70vh] ml-3">
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].label}
              fill
              className="object-cover transition duration-500 ease-in-out"
            />
            {/* Optional overlay on mobile */}
            <div className="md:hidden absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 z-10" />
          </div>

          {/* Right: Word list */}
          <div className="flex flex-col w-3/5 justify-center items-center gap-6 p-6 z-[4] -translate-x-10 sm:translate-x-0">
            {/* <h2 className="text-xl font-semibold mb-2">Nuestros Productos</h2> */}
            <ul className="flex flex-col gap-4 ">
              {images.map((item, index) => (
                <li
                  key={item.label}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={clsx(
                    'cursor-pointer font-sans transition-colors text-3xl font-medium uppercase md:text-4xl xl:text-5xl',
                    activeIndex === index
                      ? 'text-teal-500'
                      : 'text-gray-400 hover:text-gray-600'
                  )}
                >
                  {item.label}
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
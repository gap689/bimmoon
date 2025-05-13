import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";

const ContentSection = () => {
  return ( 
    <div className="h-full mt-16">
      {/* <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={400}
        baseHue={120}
        className="w-full h-full"
      > */}
        <div className="relative h-60 md:h-64 xl:h-72">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/lasercut.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/40" />
    
          <h2 className="absolute bottom-2 right-4 font-semibold">
            Cortes y grabados con laser CO2
          </h2>
        </div>
        <div className="relative h-60 md:h-64 xl:h-72">
          <Image
            src="/stickers.jpeg"
            alt={`stickers section`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <h2 className="absolute bottom-2 right-4 font-semibold">
            Stickers
          </h2>
        </div>
        <div className="relative h-60 md:h-64 xl:h-72">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/cutting.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/40" />
          <h2 className="absolute bottom-2 right-4 font-semibold">
            Letreros
          </h2>
        </div>
        <div className="relative h-60 md:h-64 xl:h-72">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/portaplacas.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/40" />
          <h2 className="absolute bottom-2 right-4">
            Portaplacas
          </h2>
        </div> 
        <div className="relative h-60 md:h-64 xl:h-72">
          <h2 className="absolute bottom-2 right-4">
            Más
          </h2>
        </div> 
      {/* </Vortex> */}
    </div>
  );
}

export default ContentSection;
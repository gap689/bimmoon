import Image from "next/image";

const ContentSection = () => {
  return ( 
    <div className="h-full mt-16 grid grid-cols-2">
        <div className="relative h-60 md:h-64 xl:h-72 col-span-2 md:col-span-1">
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

          <div className="absolute inset-0 bg-black/20" />
    
          <h2 className="absolute bottom-2 right-4 font-semibold bg-black/70 shrink-0 rounded-full px-4 py-2 text-xs md:text-sm font-michroma">
            Cortes y grabados con laser CO2
          </h2>
        </div>
        <div className="relative h-60 md:h-64 xl:h-72 col-span-2 md:col-span-1">
          <Image
            src="/stickers.jpeg"
            alt={`stickers section`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <h2 className="absolute bottom-2 right-4 font-semibold bg-black/70 shrink-0 rounded-full px-4 py-2 text-xs md:text-sm font-michroma">
            Stickers
          </h2>
        </div>
        <div className="relative h-60 md:h-64 xl:h-72 col-span-2 md:col-span-1">
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

          <div className="absolute inset-0 bg-black/20" />
          <h2 className="absolute bottom-2 right-4 font-semibold bg-black/70 shrink-0 rounded-full px-4 py-2 text-xs md:text-sm font-michroma">
            Letreros
          </h2>
        </div>
        <div className="relative h-60 md:h-64 xl:h-72 col-span-2 md:col-span-1">
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

          <div className="absolute inset-0 bg-black/20" />
          <h2 className="absolute bottom-2 right-4 font-semibold bg-black/70 shrink-0 rounded-full px-4 py-2 text-xs md:text-sm font-michroma">
            Portaplacas
          </h2>
        </div> 
        <div className="relative h-60 md:h-64 xl:h-72 col-span-2 md:col-span-1">
          <Image
            src="/images/rotulos.jpeg"
            alt={`rotulos`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <h2 className="absolute bottom-2 right-4 font-semibold bg-black/70 shrink-0 rounded-full px-4 py-2 text-xs md:text-sm font-michroma">
            Rótulos
          </h2>
        </div> 
        <div className="relative h-60 md:h-64 xl:h-72 col-span-2 md:col-span-1">
          <Image
            src="/images/estampados.jpeg"
            alt={`estampados`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <h2 className="absolute bottom-2 right-4 font-semibold bg-black/70 shrink-0 rounded-full px-4 py-2 text-xs md:text-sm font-michroma">
            Estampados
          </h2>
        </div> 
    </div>
  );
}

export default ContentSection;
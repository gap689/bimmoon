import { BrandMarquee } from "@/components/brand-marquee";
import { Vortex } from "@/components/ui/vortex";
import WhatsAppButton from "@/components/whatsapp-button";

const AboutPage = () => {
  return ( 
    <div className="h-full w-full">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={360}
        baseHue={120}
        baseRadius={0.1}
        className="w-full h-full fixed top-0 right-0 left-0 bottom-0 overflow-y-auto"
      >
        <div className="p-page">
          <p className="p-10 sm:p-20 title mt-20">
            En bimmoon diseñamos lo que te representa.
          </p>
          <div>
            <h2 className="uppercase font-medium text-xs my-4 text-[rgb(18,87,246)]">Qué hacemos?</h2>
            <p className="text-neutral-300 font-medium font-sm md:font-base">
              En Bimmoon, transformamos ideas en <span className="text-[rgb(18,87,246)]">productos únicos</span> que marcan la diferencia. Diseñamos y fabricamos <span className="text-[rgb(18,87,246)]">letreros</span>, <span className="text-[rgb(18,87,246)]">llaveros</span>, <span className="text-[rgb(18,87,246)]">portaplacas</span>, <span className="text-[rgb(18,87,246)]">calcomanías</span> y más, personalizados con <span className="text-[rgb(18,87,246)]">materiales de alta calidad</span> y precisión de <span className="text-[rgb(18,87,246)] font-semibold">corte láser</span>. Nos enfocamos en cada detalle para que cada pieza refleje tu estilo, marca o mensaje con originalidad y profesionalismo. Ya sea para un negocio, un regalo o uso personal, ofrecemos soluciones creativas, duraderas y <span className="text-[rgb(18,87,246)]">a la medida</span> de tus necesidades. <span className="text-white font-semibold">Si puedes imaginarlo, podemos crearlo.</span>
            </p>
          </div>

          <div className="mt-10">
            <h2 className="uppercase font-medium text-[rgb(18,87,246)] my-4 text-xs">Sólo las mejores marcas</h2>
            <BrandMarquee/>
          </div>
          <div className="mt-10">
            <h2 className="uppercase font-medium text-[rgb(18,87,246)] my-4 text-xs">Contáctanos</h2>
            <WhatsAppButton/>
            <div className="py-2">
              email: rotulos.bimmoon@gmail.com
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  );
}
 
export default AboutPage;
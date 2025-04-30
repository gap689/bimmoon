import { BrandMarquee } from "@/components/brand-marquee";
import { Hero } from "@/components/hero";
import { TextParallaxContentExample } from "@/components/text-parallax-content";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <BrandMarquee />
      <TextParallaxContentExample />
    </main>
  )
}

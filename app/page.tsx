"use client"
import { BrandMarquee } from "@/components/brand-marquee";
import { Intro } from "@/components/intro";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TopNavigation } from "@/components/top-navigation";
import HeroSecondary from "@/components/hero-secondary";
import Section from "@/components/section";
import { Footer } from "@/components/footer";

export default function Home() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!entered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [entered]);

  return (
    <main className="h-full">
      <AnimatePresence
        initial
        mode="wait"
      >
        {!entered && (
          <Intro setEntered={setEntered}/>
        )}
      </AnimatePresence>

      { entered && (
        <motion.div
          className="relative h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <TopNavigation />
          <HeroSecondary />
          <div className="pb-5">
            <div className="py-5 p-page font-michroma text-center">
              Marcas originales de calidad y rendimiento.
            </div>
            <BrandMarquee/>
          </div>
          <Section/>
          <Footer/>
        </motion.div>
      )}
    </main>
  )
}

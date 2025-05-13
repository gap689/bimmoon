"use client"
import { BrandMarquee } from "@/components/brand-marquee";
import { Intro } from "@/components/intro";
import { TextParallaxContentExample } from "@/components/text-parallax-content";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TopNavigation } from "@/components/top-navigation";
import ContentSection from "@/components/content-section";
import HeroSecondary from "@/components/hero-secondary";

export default function Home() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!entered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up on unmount (optional)
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [entered]);

  return (
    <main className="h-full">
      {/* <Hero setEntered={setEntered}/> */}
      {/* <BrandMarquee /> */}
      {/* <TextParallaxContentExample /> */}
      {/* <section className="relative w-full h-full"> */}
        <AnimatePresence
          initial
          mode="wait"
        >
          {!entered && (
            <Intro setEntered={setEntered}/>
          )}
        </AnimatePresence>
      {/* </section> */}
      { entered && (
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <TopNavigation />
          {/* <HeroSecondary /> */}
          <ContentSection />
        </motion.div>
      )}
    </main>
  )
}

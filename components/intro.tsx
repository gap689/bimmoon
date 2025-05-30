"use client";

import React from "react";
import { motion } from "framer-motion";

type HeroProps = {
  setEntered: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Intro({ setEntered }: HeroProps) {

  return (
    <motion.section
      className="absolute inset-0 z-30"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -1000 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>
      <motion.button
        onClick={() => setEntered(true)}
        className="absolute px-4 py-2 bg-black bottom-5 right-5 text-xs rounded-full font-semibold uppercase font-michroma"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Entrar al sitio
      </motion.button>
    </motion.section>
  );
}

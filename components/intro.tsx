"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

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
          <source src="/introbimmoon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
      <motion.h1
        className="text-3xl md:text-4xl font-bold absolute md:bottom-6 bottom-5 left-4 md:left-6 text-white drop-shadow-lg font-retrophile"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bimmoon
      </motion.h1>
      <motion.button
        onClick={() => setEntered(true)}
        className="absolute px-4 py-2 bg-black bottom-4 right-4 text-sm rounded-full font-semibold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Entrar al sitio
      </motion.button>
    </motion.section>
  );
}

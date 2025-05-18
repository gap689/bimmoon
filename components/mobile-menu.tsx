'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Squeeze as Hamburger } from 'hamburger-react'

export default function AnimatedHamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Prevent background scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className='z-[100] absolute top-2'>
        <Hamburger size={18} toggled={isOpen} toggle={toggleMenu} />
      </div>

      {/* Animated Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100vh' }}
            exit={{ height: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full overflow-hidden bg-[rgb(18,87,246)] text-white z-40"
          >
            <div className="flex flex-col py-28 px-20 uppercase h-full space-y-6 text-3xl">
              <p className='uppercase text-xs font-light'>menu</p>
              <a href="/" onClick={toggleMenu}>Inicio</a>
              <a href="#servicios" onClick={toggleMenu}>Servicios</a>
              <a href="#trabajos" onClick={toggleMenu}>Nuestros Trabajos</a>
              <a href="#contacto" onClick={toggleMenu}>Contacto</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] pt-40 pb-16 overflow-hidden mt-16">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-main.webp')" }}
      />

      {/* Contenu centré (titre + CTA) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          From Brand Strategy <br /> to Client Management
        </motion.h1>
        <motion.p
          className="mt-4 text-white text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Your Digital Growth Partner – We build brands, drive engagement,
          <br /> and create success stories.
        </motion.p>
        <motion.button
          className="mt-8 px-8 py-4 bg-primary text-white rounded-md font-medium flex items-center space-x-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            window.location.href = '#services';
          }}
        >
          <span>Explore Our Services</span>
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </div>
    </section>
  );
}

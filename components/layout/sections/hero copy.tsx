'use client';

// import { RainbowButton } from '@/components/magicui/rainbow-button';
// import { Badge } from '@/components/ui/badge';
// import { motion, useAnimation } from 'framer-motion';
// import { ArrowRight, Sparkles } from 'lucide-react';
// import NextImage from 'next/image';
// import { useEffect } from 'react';

// // Animation variants
// const fadeInUpVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, delay },
//   }),
// };

// export const HeroSection = () => {
//   const controls = useAnimation();

//   useEffect(() => {
//     const startAnimations = async () => {
//       await controls.start('visible');
//     };
//     startAnimations();
//   }, [controls]);

//   return (
//     <section className="relative w-full overflow-hidden flex items-center justify-center min-h-screen ">
//       <div className="absolute inset-0 -z-10 flex items-center justify-center">
//         <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
//       </div>

//       <div className="container max-w-screen-xl mx-auto py-16 flex flex-col items-center text-center">
//         {/* Badge */}
//         <motion.div
//           custom={0}
//           initial="hidden"
//           animate={controls}
//           variants={fadeInUpVariants}
//         >
//           <Badge
//             variant="outline"
//             className="px-4 py-2 text-sm flex items-center justify-center"
//           >
//             <Sparkles className="w-4 h-4 mr-2 text-primary" />
//             <span className="font-thin">Welcome to Devlink Solutions</span>
//           </Badge>
//         </motion.div>

//         {/* Headline & Subheadline */}
//         <motion.div
//           custom={0.1}
//           initial="hidden"
//           animate={controls}
//           variants={fadeInUpVariants}
//           className="mt-4"
//         >
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
//             <span className="text-transparent bg-gradient-to-r from-primary via-[#ff0055] to-primary bg-clip-text">
//               From Brand Strategy <br /> to Client Management
//             </span>
//           </h1>
//           <p className="text-lg md:text-2xl font-medium mt-3">
//             Your Digital Growth Partner – We build brands, drive engagement, and
//             create success stories.
//           </p>
//         </motion.div>

//         {/* CTA Buttons */}
//         <motion.div
//           custom={0.3}
//           initial="hidden"
//           animate={controls}
//           variants={fadeInUpVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
//         >
//           <RainbowButton className="font-medium group text-white dark:text-black">
//             Explore Our Services
//             <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//           </RainbowButton>
//         </motion.div>

//         {/* Image Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//           className="relative w-full max-w-6xl mt-8 mb-8 z-auto"
//         >
//           <div className="w-full overflow-hidden flex justify-center">
//             <NextImage
//               src="/arrow.png"
//               width={1400}
//               height={900}
//               alt="Business growth dashboard"
//               className="w-full max-w-md md:max-w-lg h-auto object-contain z-30"
//               priority
//             />
//             <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-[75%] h-[50%] md:h-[60%] bg-primary/30 rounded-full blur-3xl" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AnimatedLogosHero() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Directions d'où les logos peuvent apparaître
  const directions = [
    { x: -100, y: 0 }, // Gauche
    { x: 100, y: 0 }, // Droite
    { x: 0, y: -100 }, // Haut
    { x: 0, y: 100 }, // Bas
    { x: -100, y: -100 }, // Haut-gauche
    { x: 100, y: -100 }, // Haut-droite
    { x: -100, y: 100 }, // Bas-gauche
    { x: 100, y: 100 }, // Bas-droite
  ];

  // Logos data avec différentes propriétés d'animation
  const logos = [
    { id: 1, x: 0.2, y: 0.3, duration: 20, delay: 0, direction: 0, rotate: 10 },
    {
      id: 2,
      x: 0.8,
      y: 0.2,
      duration: 25,
      delay: 2,
      direction: 1,
      rotate: -15,
    },
    { id: 3, x: 0.5, y: 0.7, duration: 18, delay: 5, direction: 2, rotate: 5 },
    {
      id: 4,
      x: 0.1,
      y: 0.6,
      duration: 22,
      delay: 7,
      direction: 3,
      rotate: -10,
    },
    { id: 5, x: 0.7, y: 0.8, duration: 30, delay: 1, direction: 4, rotate: 20 },
    { id: 6, x: 0.3, y: 0.1, duration: 28, delay: 4, direction: 5, rotate: -5 },
    { id: 7, x: 0.9, y: 0.5, duration: 24, delay: 6, direction: 6, rotate: 15 },
    {
      id: 8,
      x: 0.4,
      y: 0.9,
      duration: 26,
      delay: 3,
      direction: 7,
      rotate: -20,
    },
    { id: 9, x: 0.6, y: 0.4, duration: 22, delay: 8, direction: 0, rotate: 25 },
    {
      id: 10,
      x: 0.2,
      y: 0.8,
      duration: 27,
      delay: 9,
      direction: 1,
      rotate: -25,
    },
    {
      id: 11,
      x: 0.8,
      y: 0.6,
      duration: 23,
      delay: 10,
      direction: 2,
      rotate: 30,
    },
    {
      id: 12,
      x: 0.5,
      y: 0.2,
      duration: 29,
      delay: 11,
      direction: 3,
      rotate: -30,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background to-background/80 py-20 md:py-32">
      {/* Logos animés */}
      {logos.map((logo) => {
        const dir = directions[logo.direction % directions.length];
        return (
          <motion.div
            key={logo.id}
            className="absolute z-0 opacity-0"
            initial={{
              x: logo.x * windowSize.width + dir.x,
              y: logo.y * windowSize.height + dir.y,
              rotate: 0,
              scale: 0.5,
              opacity: 0,
            }}
            animate={{
              x: [
                logo.x * windowSize.width + dir.x,
                logo.x * windowSize.width,
                (logo.x + 0.1) * windowSize.width,
                (logo.x - 0.1) * windowSize.width,
                logo.x * windowSize.width,
              ],
              y: [
                logo.y * windowSize.height + dir.y,
                logo.y * windowSize.height,
                (logo.y - 0.1) * windowSize.height,
                (logo.y + 0.1) * windowSize.height,
                logo.y * windowSize.height,
              ],
              rotate: [
                0,
                logo.rotate,
                logo.rotate * 0.5,
                logo.rotate * -0.5,
                0,
              ],
              scale: [0.5, 1, 1.1, 0.9, 1],
              opacity: [0, 0.3, 0.4, 0.3, 0.3],
            }}
            transition={{
              duration: logo.duration,
              delay: logo.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: Math.random() * 5,
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 1.2,
              opacity: 0.8,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={`/placeholder.svg?height=80&width=160`}
              width={160}
              height={80}
              alt={`Logo ${logo.id}`}
              className="h-12 w-24 md:h-16 md:w-32 lg:h-20 lg:w-40 object-contain"
            />
          </motion.div>
        );
      })}

      {/* Contenu du hero */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Collaborez avec les meilleures marques
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Notre plateforme est utilisée par des centaines d'entreprises
            innovantes à travers le monde
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button className="rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors">
              Découvrir nos partenaires
            </button>
          </motion.div>
        </motion.div>

        {/* Grille de logos statiques */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
        >
          {/* {[1, 2, 3, 4, 5, 6].map((id) => (
            <motion.div
              key={`static-${id}`}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + id * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                src={`/placeholder.svg?height=60&width=120`}
                width={120}
                height={60}
                alt={`Partenaire ${id}`}
                className="h-12 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </motion.div>
          ))} */}
        </motion.div>
      </div>
    </section>
  );
}

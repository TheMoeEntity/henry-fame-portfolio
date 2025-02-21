"use client";
import { motion } from "framer-motion";
const Hero = () => {
  // Variants for staggered text animation
  const containerVariants = {
    hidden: { opacity: 0, transform: "translateY(100px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        staggerChildren: 0.1, // Stagger effect for each letter/word
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };
  return (
    <section className="container px-5 lg:mt-32 mx-auto lg:px-4 lg:py-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col w-full mb-2 text-left md:text-center "
      >
        <motion.h1
          variants={containerVariants}
          className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl"
        >
          {/* <span>Bringing Characters to Life, </span>
          <br className="hidden lg:block"></br>
          One Frame at a Time */}
          {"Bringing Characters to Life, One Frame at a Time"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                variants={childVariants}
              >
                {word}
              </motion.span>
            ))}
        </motion.h1>
        <br></br>
        <motion.p
          className="mx-auto  font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3"
          variants={containerVariants}
        >
          {"Henry Fame is a passionate character artist specializing in Modeling, Sculpting, Texturing, and Shading for games, cinematics, 3D prints, and more. With a strong foundation in human anatomy and a mastery of tools like ZBrush, Henry transforms ideas into stunning, lifelike characters that captivate and inspire."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1"
                variants={childVariants}
              >
                {word}
              </motion.span>
            ))}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;

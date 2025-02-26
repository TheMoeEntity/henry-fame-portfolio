"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Get the vertical scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end start"], // Start and end points of animation
  });

  // Map vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);

  return (
    <div className="h-[300vh] bg-gray-100">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-10"
          style={{ x }} // Apply horizontal animation
        >
          {["Section 1", "Section 2", "Section 3", "Section 4"].map(
            (text, i) => (
              <div
                key={i}
                className="min-w-[100vw] h-screen flex items-center justify-center text-4xl font-bold bg-blue-500 text-white"
              >
                {text}
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Assuming you're using Lucide icons
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
          animate={{ opacity: 1, y: 0 }} // Fade in and move up
          exit={{ opacity: 0, y: 20 }} // Fade out and move down
          transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-[#14AFF1] text-white rounded-full shadow-lg hover:bg-[#0F8AC0] transition-colors duration-300 z-50"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

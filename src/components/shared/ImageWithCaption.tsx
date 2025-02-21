"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

const ImageWithCaption: React.FC<{
  banner: StaticImageData;
  caption: string;
}> = ({ banner, caption }) => {
  return (
    <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
      <motion.div
        className="relative w-full mb-10"
        whileHover={{ scale: 1.02 }} // Optional: Adds a slight scale effect on hover
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          className="object-cover object-center w-full border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
          alt="Main character"
          src={banner}
        />
        {/* Animated Caption */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-center py-2 rounded-b-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {caption}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageWithCaption;

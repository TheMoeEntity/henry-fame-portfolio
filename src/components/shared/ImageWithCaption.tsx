"use client";

import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ImageWithCaption: React.FC<{
  banner: StaticImageData;
  caption: string;
  slug?: string;
  dimensions?: {
    width: number;
    height: number;
  };
}> = ({ banner, caption, slug, dimensions }) => {
  const isMobile = useClientMediaQuery("(max-width: 600px)");
  return (
    <div
      className="container relative flex flex-col items-center justify-center py-0 mx-auto rounded-lg md:p-1"
      style={{
        width: dimensions && !isMobile ? `${dimensions.width}px` : "100%",
        height: dimensions && !isMobile ? `${dimensions.height}px` : "100%",
      }}
    >
      <motion.div
        className="relative w-full h-full mb-10"
        whileHover={{ scale: 1.02 }} // Optional: Adds a slight scale effect on hover
        transition={{ type: "spring", stiffness: 300 }}
      >
        {dimensions && !isMobile ? (
          <Image
            className="object-cover object-center g327 rounded-lg shadow-md"
            alt="Main character"
            src={banner}
            fill
          />
        ) : (
          <Image
            className="object-cover object-center g327 rounded-lg shadow-md"
            alt="Main character"
            src={banner}
          />
        )}

        {/* Animated Caption */}
        {caption && slug ? (
          <Link href={"/projects/" + (slug ?? "")}>
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-center py-2 rounded-b-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {caption}
            </motion.div>
          </Link>
        ) : (
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-center py-2 rounded-b-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {caption}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ImageWithCaption;

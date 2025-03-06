import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export const ImageWithCaption = ({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) => (
  <motion.div
    className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Image
      className="object-cover object-center w-full rounded-lg shadow-md"
      alt={alt}
      src={src}
    />
  </motion.div>
);

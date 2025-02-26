import ImageWithCaption from "@/components/shared/ImageWithCaption";
import { motion, useTransform, useScroll } from "framer-motion";
import { StaticImageData } from "next/image";
import { useRef } from "react";

const ScrollableImageGallery = ({
  cards,
}: {
  cards: { banner: StaticImageData; caption: string }[];
}) => {
  return (
    <>
      <HorizontalScrollCarousel cards={cards} />
    </>
  );
};

const HorizontalScrollCarousel = ({
  cards,
}: {
  cards: { banner: StaticImageData; caption: string }[];
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["15%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, index) => {
            return (
              <div key={index} className="w-full">
                <ImageWithCaption banner={card.banner} caption={card.caption} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollableImageGallery;

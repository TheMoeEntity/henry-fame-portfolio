import ImageWithCaption from "@/components/shared/ImageWithCaption";
import Image, { StaticImageData } from "next/image";
import React, { useRef, useState } from "react";

interface ImageItem {
  banner: StaticImageData;
  caption: string;
}

interface ScrollableGalleryProps {
  images: ImageItem[];
}

const ScrollableImageGrid: React.FC<ScrollableGalleryProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // adjust multiplier for scroll speed if needed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="overflow-x-auto flex space-x-4 scroll-smooth snap-x snap-mandatory cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {images.map((item, index) => (
          <div
            key={index}
            className="snap-start max-h-[430px] max-w-[33.33%] flex-shrink-0"
          >
            <Image
              className="object-cover object-center w-full border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
              alt="Main character"
              src={item.banner}
            />
            {/* <ImageWithCaption banner={item.banner} caption={item.caption} /> */}
          </div>
        ))}
      </div>
      {/* Scroll indicator */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <span className="bg-gray-300 p-2 rounded-full text-gray-700">→</span>
      </div>
    </div>
  );
};

export default ScrollableImageGrid;

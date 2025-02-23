import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer: React.FC<{
  media: string;
  thumbnail?: string;
  caption: string;
  link: Url;
}> = ({ media, thumbnail, caption, link }) => {
  const isMobile = useClientMediaQuery("(max-width: 600px)");

  return (
    <div className="relative overflow-hidden pb-[56.25%] h-[150px] group">
      {/* Overlay with Hover Effect (Hidden on Mobile) */}
      {!isMobile && (
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.63)] z-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={link}
            className="underline text-center underline-offset-[16px] my-12 mb-2 text font-bold tracking-tighter text-white md:text-7xl"
          >
            {caption}
          </Link>
        </div>
      )}

      {/* Video Player */}
      <ReactPlayer
        url={media}
        light={thumbnail}
        controls={isMobile || false} // Show controls only on mobile
        playing={true} // Enable autoplay
        width="100%"
        loop
        height="100%"
        muted
        className="absolute top-0 left-0"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default VideoPlayer;

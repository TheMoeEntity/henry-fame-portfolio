import Link from "next/link";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer: React.FC<{ media: string; thumbnail?: string }> = ({
  media,
  thumbnail,
}) => {
  return (
    <div className="relative overflow-hidden pb-[56.25%] h-[150px] group">
      {/* Overlay with Hover Effect */}
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.63)] z-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link
          href="/"
          className="underline underline-offset-[16px] my-12 mb-2 text-6xl font-bold tracking-tighter text-white md:text-7xl"
        >
          Finding Jumijo
        </Link>
      </div>

      {/* Video Player */}
      <ReactPlayer
        url={media}
        light={thumbnail}
        controls={false} // Hide controls
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

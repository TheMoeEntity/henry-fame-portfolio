"use client";

import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer: React.FC<{ media: string; thumbnail?: string }> = ({
  media,
  thumbnail,
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <ReactPlayer
        url={media}
        light={thumbnail}
        controls={true} // Show controls
        playing={true} // Enable autoplay
        width="100%"
        height="100%"
        muted={true} // Mute to ensure autoplay works
        className="rounded-lg"
        config={{
          file: {
            attributes: {
              controlsList: "nodownload", // Disable download option
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;

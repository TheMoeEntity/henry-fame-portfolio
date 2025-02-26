"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
// import { films } from "@/lib/constants";
const Player = dynamic(() => import("@/components/shared/VideoPlayer"), {
  ssr: false,
});

const FilmsList = () => {
  return (
    <div className="space-y-16">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 mb-2 text-5xl font-bold tracking-tighter text-white"
      >
        Finding Jomijo
      </motion.h2>
      <Player
        caption="Finding Jumijo"
        link="/animated-films/finding-jomijo"
        media={
          "https://firebasestorage.googleapis.com/v0/b/greencalbackend.appspot.com/o/Finding%20Jimijo.mp4?alt=media&token=7d685ed6-9705-44eb-8a93-d214bc227e23"
        }
      />
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 mb-2 text-5xl font-bold tracking-tighter text-white "
      >
        Agadi teaser
      </motion.h2>
      <Player
        caption="Agadi teaser"
        link="/animated-films/agadi-teaser"
        media={
          "https://firebasestorage.googleapis.com/v0/b/greencalbackend.appspot.com/o/Agadi%20teaser_1.mp4?alt=media&token=c2a475c1-ecf2-473f-8bf9-237f34b5b141"
        }
      />
    </div>
  );
};

export default FilmsList;

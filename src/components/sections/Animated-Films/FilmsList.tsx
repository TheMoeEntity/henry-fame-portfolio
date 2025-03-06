"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { films } from "@/lib/constants";
// import { films } from "@/lib/constants";
const Player = dynamic(() => import("@/components/shared/VideoPlayer"), {
  ssr: false,
});

const FilmsList = () => {
  return (
    <div className="space-y-5">
      {films.map((film) => (
        <div key={film.slug} className="flex flex-col gap-5">
          <motion.h2
            key={film.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-3xl md:text-5xl font-bold tracking-tighter text-white"
          >
            <Link href={"/projects/" + film.slug}>{film.title}</Link>
          </motion.h2>
          <Player
            caption={film.title}
            play={true}
            link={"/projects/" + film.slug}
            media={film.url}
          />
        </div>
      ))}
    </div>
  );
};

export default FilmsList;

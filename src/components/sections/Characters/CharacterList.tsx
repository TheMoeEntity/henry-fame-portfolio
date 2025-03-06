"use client";
import { motion } from "framer-motion";
import Link from "next/link";
// import { films } from "@/lib/constants";

const CharacterList = () => {
  return (
    <div className="space-y-5">
      {/* {films.map((film) => ( */}
      <div
        //  key={film.slug}
        className="flex flex-col gap-5"
      >
        <motion.h2
          // key={film.slug}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-3xl md:text-5xl font-bold tracking-tighter text-white"
        >
          <Link href={"/characters/" + "goat-king"}>The Goat King</Link>
        </motion.h2>
      </div>
      {/* ))} */}
    </div>
  );
};

export default CharacterList;

"use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
import ImageWithCaption from "@/components/shared/ImageWithCaption";
import banner from "../../../../public/images/olamide-famojuro-asset (1).jpg";
import wick from "../../../../public/images/whick.jpg";
import batman from "../../../../public/images/batman.jpg";
import stylized from "../../../../public/images/stylized.jpg";
import tailsOfLoad from "../../../../public/images/tails-of-love.jpg";
// import { films } from "@/lib/constants";
const characters = [
  {
    slug: "goat-king",
    name: "The Goat King",
    banner: banner,
  },
  {
    slug: "tails-of-load",
    name: "Tails of Love",
    banner: tailsOfLoad,
  },
  {
    slug: "stylized-characters",
    name: "Stylized Characters",
    banner: stylized,
  },
  {
    slug: "john-wick",
    name: "John Wick",
    banner: wick,
  },
  {
    slug: "batman",
    name: "Batman",
    banner: batman,
  },
];

const CharacterList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-[2px] gap-y-[2px]">
      {characters.map((character) => (
        <div key={character.slug}>
          <ImageWithCaption
            dimensions={{ width: 237, height: 350 }}
            slug={character.slug}
            banner={character.banner}
            caption={character.name}
          />
        </div>
      ))}
    </div>
  );
};

export default CharacterList;

import React from "react";
import fame from "../../../public/images/olamide-famojuro-hen.jpg";
import PortfolioSection from "@/components/sections/About/PortfolioSection";

const About = () => {
  const skills: string[] = [
    "Storyboarding",
    "Character Design",
    "Character Modeling",
    "3D Animation",
    "Concept Design",
    "Industrial Design",
  ];
  const software: string[] = [
    "Blender",
    "Maya",
    "Substance 3D Painter",
    "PhotoShop",
    "ZBrush",
  ];
  return (
    <main>
      <PortfolioSection software={software} skills={skills} fame={fame} />
    </main>
  );
};

export default About;

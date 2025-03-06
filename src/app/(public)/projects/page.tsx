import FilmsList from "@/components/sections/Animated-Films/FilmsList";
import Section from "@/components/shared/Section";
import React from "react";

const AnimatedFilms = () => {
  return (
    <main className="py-16 px-5">
      <Section>
        <section className="px-4">
          <div className="container mx-auto">
            {/* Section Title */}
            <h2 className="text-4xl md:text-7xl font-bold text-white text-center mb-12">
              Projects
            </h2>
            <FilmsList />
          </div>
        </section>
      </Section>
    </main>
  );
};

export default AnimatedFilms;

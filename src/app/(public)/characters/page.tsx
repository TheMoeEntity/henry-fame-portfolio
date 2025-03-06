import CharacterList from "@/components/sections/Characters/CharacterList";
import Section from "@/components/shared/Section";
import React from "react";

const AllCharacters = () => {
  return (
    <main className="py-16 px-5">
      <Section>
        <section className="px-4">
          <div className="container mx-auto">
            {/* Section Title */}
            <h2 className="text-4xl md:text-7xl font-bold text-white text-center mb-12">
              Characters
            </h2>
            <CharacterList />
          </div>
        </section>
      </Section>
    </main>
  );
};

export default AllCharacters;

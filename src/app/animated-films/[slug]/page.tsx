import dynamic from "next/dynamic";
const VideoPlayer = dynamic(
  () => import("@/components/sections/Animated-Films/VideoPlayer"),
  {
    ssr: false,
  }
);
import Section from "@/components/shared/Section";
import { films } from "@/lib/constants";
import { notFound } from "next/navigation";
import React from "react";

const AnimatedFilmDescription = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;
  const film = films.find((item) => item.slug === slug);
  console.log(slug);
  if (!film) {
    notFound();
  }
  return (
    <main className="py-16 px-5">
      <Section>
        <div className="container mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-7xl font-bold text-white text-center mb-12">
            {film.title}
          </h2>

          <div className="space-y-16">
            <div className="space-y-8">
              <VideoPlayer media={film.url} thumbnail={""} />
              <div
                id={`film`}
                className="space-y-6 container mx-auto max-w-5xl"
              >
                <h3 className="text-3xl font-bold text-white">
                  About {film.title}
                </h3>
                <p className="text-lg text-gray-300">{film.content.intro}</p>
                <p className="text-lg text-gray-300">
                  {film.content.description}
                </p>
                <ul className="space-y-4">
                  {film.content.list.map((item, idx) => (
                    <li key={idx} className="text-lg text-gray-300">
                      <strong className="text-[#14AFF1]">{item.title}:</strong>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default AnimatedFilmDescription;

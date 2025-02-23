import Link from "next/link";
import { PlayCircle } from "lucide-react"; // Assuming you're using Lucide icons

const tutorials = [
  {
    title: "Introduction to ZBrush",
    url: "https://www.youtube.com/watch?v=example1",
    thumbnail: "/zbrush-thumbnail.jpg",
  },
  {
    title: "Sculpting Human Anatomy",
    url: "https://www.youtube.com/watch?v=example2",
    thumbnail: "/anatomy-thumbnail.jpg",
  },
  {
    title: "Texturing in Substance Painter",
    url: "https://www.youtube.com/watch?v=example3",
    thumbnail: "/substance-thumbnail.jpg",
  },
  {
    title: "Character Rigging Basics",
    url: "https://www.youtube.com/watch?v=example4",
    thumbnail: "/rigging-thumbnail.jpg",
  },
  {
    title: "Creating Cinematic Animations",
    url: "https://www.youtube.com/watch?v=example5",
    thumbnail: "/cinematic-thumbnail.jpg",
  },
  {
    title: "3D Printing Workflow",
    url: "https://www.youtube.com/watch?v=example6",
    thumbnail: "/3dprint-thumbnail.jpg",
  },
];

const TutorialsSection = () => {
  return (
    <section className="bg-[#121212] py-16 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Tutorials
        </h2>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <Link
              key={index}
              href={tutorial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Tutorial Title */}
              <div className="p-6 bg-[#1A1A1A]">
                <h3 className="text-xl font-semibold text-white">
                  {tutorial.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;

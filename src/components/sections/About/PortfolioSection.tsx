"use client";
import { ExperienceTimeline } from "@/components/shared/ExperienceTimeLine";
import { ImageWithCaption } from "@/components/shared/ImageCaption";
import Section from "@/components/shared/Section";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { StaticImageData } from "next/image";

const PortfolioSection: React.FC<{
  fame: StaticImageData;
  skills: string[];
  software: string[];
}> = ({ fame, skills, software }) => {
  return (
    <Section>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* Image Section */}
        <ImageWithCaption src={fame} alt="Henry Fame" />

        {/* Content Section */}
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          {/* Name and Contact */}
          <motion.div
            className="flex flex-col mb-10 lg:items-start items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-grow">
              <h2 className="text-white text-4xl title-font font-medium mb-3">
                Olamide Famojuro (Henry Fame)
              </h2>
              <p className="leading-relaxed text-lg text-gray-300">
                Character Artist based in Lagos, Nigeria.
              </p>
              <a
                href="mailto:henryfamojuro@gmail.com"
                className="text-[#14AFF1] flex items-center gap-2 mt-2"
              >
                <Mail size={20} />
                olamidefamojuro@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            className="flex flex-col mb-10 lg:items-start items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex-grow">
              <h2 className="text-white text-2xl title-font font-medium mb-3">
                Summary
              </h2>
              <p className="leading-relaxed text-lg text-gray-300">
                {`I'm`} a character artist. I do Modeling/Sculpting/Texturing
                and shading of Characters for games, cinematics, 3D print and...
                I have strong knowledge about Human Anatomy.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="flex flex-col mb-10 lg:items-start items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex-grow">
              <h2 className="text-white text-2xl title-font font-medium mb-3">
                Skills
              </h2>
              <div className="flex flex-wrap gap-x-2 gap-y-2 items-center">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="text-sm font-bold p-3 border-[2px] border-[#14AFF1] rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Software Proficiency */}
          <motion.div
            className="flex flex-col mb-10 lg:items-start items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex-grow">
              <h2 className="text-white text-2xl title-font font-medium mb-3">
                Software Proficiency
              </h2>
              <div className="flex flex-wrap gap-x-2 gap-y-2 items-center">
                {software.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="text-sm font-bold p-3 bg-[#14AFF1] rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="p-5">
        <motion.h1
          className="text-4xl md:text-5xl font-medium mx-auto my-8 w-full max-w-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Experience
        </motion.h1>
        <div className="mx-auto w-full max-w-xl">
          <ExperienceTimeline
            year="2022-2023"
            title="3D Generalist"
            company="Magic Carpet Studio"
          />
          <ExperienceTimeline
            year="2024-present"
            title="3D Generalist"
            company="Omen Studios"
          />
          <ExperienceTimeline
            year="2024-present"
            title="3D Tutor"
            company="Magic Lab"
          />
        </div>
      </div>
    </Section>
  );
};

export default PortfolioSection;

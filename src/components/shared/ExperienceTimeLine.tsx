import { motion } from "framer-motion";
export const ExperienceTimeline = ({
  year,
  title,
  company,
}: {
  year: string;
  title: string;
  company: string;
}) => (
  <motion.div
    className="flex flex-row gap-x-12 group"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <div className="w-3 h-3 rounded-full bg-[#656565] transition-colors duration-700 group-hover:bg-[#14AFF1] mt-1"></div>
        <div className="bg-[#656565] transition-all duration-700 group-hover:bg-[#14AFF1] h-[160px] w-[0.5px]"></div>
      </div>
    </div>
    <div className="reveal">
      <div className="text-xl group-hover:text-[#14AFF1] transition-colors duration-300">
        {year}
      </div>
      <div className="flex flex-col gap-y-4 mt-5">
        <h2 className="font-semibold text-2xl md:text-3xl text-white">
          {title}
        </h2>
        <h3 className="text-gray-300">{company}</h3>
      </div>
    </div>
  </motion.div>
);

import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CrewBio from "./CrewBio";
import CrewItem from "./CrewItem";
import crew from "./crewData";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "linear",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "linear", duration: 0.8 },
  },
};

const CrewDetail = () => {
  const [crewDetail, setCrewDetail] = useState(null);

  const { crewName } = useParams();

  useEffect(() => {
    crew.forEach((crew) => {
      const name = crew.name.toLowerCase().split(" ").join("-");
      if (name === crewName) {
        setCrewDetail(crew);
      }
    });
  }, [crew, crewName]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {crewDetail && (
        <div className="md:px-[59.5px] md:flex md:flex-col-reverse lg:px-0 lg:flex-row-reverse lg:justify-between lg:items-end lg:gap-0">
          <div className="mt-8 md:mt-0 flex justify-center lg:sticky lg:right-0 lg:top-[198px]">
            <img
              src={`../src/${crewDetail.images.webp}`}
              alt={`Image ${crewDetail.name}`}
              loading="lazy"
              className="max-w-[327px] max-h-[223px] md:max-w-[456.37px] md:max-h-[572px] md:translate-y-10 lg:max-w-[568.07px] lg:max-h-[712px] lg:translate-y-0"
            />
          </div>
          <hr className="text-[#383B4B] mb-8 md:hidden" />
          <div className="text-center md:flex md:flex-col-reverse md:mt-[60px] lg:max-w-[614px] lg:text-left lg:mt-0 self-center">
            <div className="md:mt-10 ">
              <ul className="flex justify-center items-center gap-4 mb-8 md:mb-0 lg:justify-start">
                {crew.length > 0 &&
                  crew.map((crew) => <CrewItem key={crew.name} crew={crew} />)}
              </ul>
            </div>
            <div>
              <p className="text-white font-bellefair uppercase mb-2 text-[16px] leading-[18px] text-opacity-50 md:text-[24px] md:leading-[28px] lg:text-[32px] lg:leading-[37px]">
                {crewDetail.role}
              </p>
              <h1 className="font-bellefair uppercase mb-[16px] text-[24px] leading-[28px] md:mb-2 md:text-[40px] md:leading-[46px] lg:mb-[14px] lg:text-[56px] lg:leading-[64px]">
                {crewDetail.name}
              </h1>
              <CrewBio bio={crewDetail.bio} />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CrewDetail;

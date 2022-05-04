import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TechnologyDescription from "./TechnologyDescription";
import TechnologyItem from "./TechnologyItem";
import technologies from "./technologyData";

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

const TechnologyDetail = () => {
  const { technologyName } = useParams();

  const [technologyDetail, setTechnologyDetail] = useState(null);

  useEffect(() => {
    technologies.forEach((technology) => {
      const name = technology.name.toLowerCase().split(" ").join("-");
      if (name === technologyName) {
        setTechnologyDetail(technology);
      }
    });
  }, [technologies, technologyName]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {technologyDetail && (
        <div className="md:px-[59.5px] lg:px-0 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-8">
          <div className="mt-8 mb-[34px] md:mt-[60px] md:mb-0 flex justify-center lg:min-w-[45%] lg:max-w[46%] lg:mt-[26px]">
            <picture class="illustration">
              <source
                media="(min-width: 1024px)"
                srcset={`../src/${technologyDetail.images.portrait}`}
              />
              <img
                src={`../src/${technologyDetail.images.landscape}`}
                alt={`Image ${technologyDetail.name}`}
                loading="lazy"
                className="min-w-[100vw] h-auto md:max-h-[572px] lg:min-w-0 lg:max-w-[515px] lg:max-h-[527px]"
              />
            </picture>
          </div>
          <div className="text-center md:mt-[56px] lg:max-w-[614px] lg:text-left lg:mt-0 self-center lg:flex lg:gap-4 lg:items-center xl:gap-20">
            <div>
              <ul className="flex justify-center items-center gap-4 mb-[26px] md:mb-[44px] lg:justify-start lg:flex-col lg:mb-0 lg:gap-8">
                {technologies.length > 0 &&
                  technologies.map((technology, i) => (
                    <TechnologyItem technology={technology} index={i} />
                  ))}
              </ul>
            </div>
            <div>
              <p className="text-gray font-barlow-condensed mb-[9px] text-[14px] leading-[17px] tracking-[2.3625px] md:text-[16px] md:leading-[19.2px] md:tracking-[2.7px]">
                THE TERMINOLOGY…
              </p>
              <h1 className="font-bellefair uppercase mb-[16px] text-[24px] leading-[27.5px] md:mb-2 md:text-[40px] md:leading-[46px] lg:mb-[14px] lg:text-[  ] lg:leading-[64px]">
                {technologyDetail.name}
              </h1>
              <TechnologyDescription
                description={technologyDetail.description}
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TechnologyDetail;

import { useEffect, useState } from "react";
// React router dom
import { useParams } from "react-router-dom";
// Framer motion
import { motion } from "framer-motion";
// Data
import technologies from "./technologyData";
// Components
import TechnologyDescription from "./TechnologyDescription";
import TechnologyItem from "./TechnologyItem";
import TechnologyImage from "./TechnologyImage";
import TechnologyItems from "./TechnologyItems";
import TechnologyName from "./TechnologyName";
import TechnologySpan from "./TechnologySpan";

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
          <TechnologyImage
            name={TechnologyDetail.name}
            images={technologyDetail.images}
          />
          <div className="text-center md:mt-[56px] lg:max-w-[614px] lg:text-left lg:mt-0 self-center lg:flex lg:gap-4 lg:items-center xl:gap-20">
            <TechnologyItems technologies={technologies} />
            <div>
              <TechnologySpan />
              <TechnologyName name={technologyDetail.name} />
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

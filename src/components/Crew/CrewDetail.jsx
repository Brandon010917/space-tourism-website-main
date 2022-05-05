import { useEffect, useState } from "react";
// React router dom
import { useParams } from "react-router-dom";
// Framer motion
import { motion } from "framer-motion";
// Data
import crew from "./crewData";
// Components
import CrewBio from "./CrewBio";
import CrewItems from "./CrewItems";
import CrewImage from "./CrewImage";
import CrewRole from "./CrewRole";
import CrewName from "./CrewName";

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
          <CrewImage name={crewDetail.name} image={crewDetail.image} />
          <hr className="text-[#383B4B] mb-8 md:hidden" />
          <div className="text-center md:flex md:flex-col-reverse md:mt-[60px] lg:max-w-[614px] lg:text-left lg:mt-0 self-center">
            {/* List Items */}
            <CrewItems crew={crew} />
            <div>
              <CrewRole role={crewDetail.role} />
              <CrewName name={crewDetail.name} />
              <CrewBio bio={crewDetail.bio} />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CrewDetail;

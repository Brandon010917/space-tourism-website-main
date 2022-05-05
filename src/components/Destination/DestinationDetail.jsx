import { useEffect, useState } from "react";
// React router dom
import { useParams } from "react-router-dom";
// Framer motion
import { motion } from "framer-motion";
// Data
import destinations from "./destinationsData.js";
// Components
import DestinationDescription from "./DestinationDescription";
import DestinationStatistics from "./DestinationStatistics";
import DestinationImage from "./DestinationImage";
import DestinationItems from "./DestinationItems";
import DestinationName from "./DestinationName";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.8 },
  },
};

const DestinationDetail = () => {
  const [destinationDetail, setDestinationDetail] = useState(null);

  const { destinationName } = useParams();

  useEffect(() => {
    destinations.forEach((destination) => {
      if (destination.name.toLowerCase() === destinationName) {
        return setDestinationDetail(destination);
      }
    });
  }, [destinationName]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {destinationDetail && (
        <div className="md:px-[59.5px] lg:mt-16 lg:flex lg:px-0 lg:justify-end lg:gap-8 lg:items-center xl:items-end xl:gap-[157px] ">
          <DestinationImage
            name={destinationDetail.name}
            image={destinationDetail.image}
          />
          <div className="text-center lg:max-w-[450px] lg:text-left">
            {/* List Destinations */}
            <DestinationItems destinations={destinations} />
            <DestinationName name={destinationDetail.name} />
            <DestinationDescription
              description={destinationDetail.description}
            />
            <hr className="text-[#383B4B] mt-8 md:mt-[49px] lg:mt-[54px]" />
            <div className="md:mt-[28px] md:flex md:justify-evenly lg:justify-start lg:gap-[79px]">
              <DestinationStatistics
                text="AVG. DISTANCE"
                distance={destinationDetail.distance}
              />
              <DestinationStatistics
                text="EST. TRAVEL TIMES"
                travel={destinationDetail.travel}
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default DestinationDetail;

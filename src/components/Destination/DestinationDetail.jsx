import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DestinationDescription from "./DestinationDescription";
import DestinationItem from "./DestinationItem";
import DestinationStatistics from "./DestinationStatistics";
import destinations from "./destinationsData.js";

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

  console.log(destinationDetail);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {destinationDetail && (
        <div className="md:px-[59.5px] lg:mt-16 lg:flex lg:px-0 lg:justify-end lg:gap-8 lg:items-center xl:items-end xl:gap-[157px] ">
          <div className="max-w-[170px] max-h-[170px] mx-auto mt-8 mb-[26px] md:max-w-[300px] md:max-h-[300px] md:mb-[53px] lg:max-w-[445px] lg:max-h-[445px] lg:mr-0 ">
            <img
              src={`../src/${destinationDetail.images.webp}`}
              alt={`Image ${destinationDetail.name}`}
              loading="lazy"
            />
          </div>
          <div className="text-center lg:max-w-[450px] lg:text-left">
            <ul className="flex justify-center items-center gap-[26px] mb-5 lg:justify-start">
              {destinations.length > 0 &&
                destinations.map((destination) => (
                  <DestinationItem
                    key={destination.name}
                    destination={destination}
                  />
                ))}
            </ul>
            <h1 className="font-bellefair uppercase mb-[1px] text-[56px] leading-[64.18px] md:mb-2 md:text-[80px] md:leading-[91.68px] lg:mb-[14px] lg:text-[100px] lg:leading-[114.68px]">
              {destinationDetail.name}
            </h1>
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

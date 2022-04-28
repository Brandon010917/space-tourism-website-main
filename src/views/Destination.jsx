import "../components/Destination/Destination.styles.css";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const textVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "linear",
    },
  },
};

const Destination = () => {
  return (
    <section className="bg-destination min-h-screen pt-[88px] pb-[58px] px-6 text-white font-barlow-condensed md:pt-[136px] md:px-[38.5px] md:pb-[62px] lg:px-[163px]">
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="show"
        className="flex justify-center items-center gap-[19px] leading-[19px] tracking-[2.7px] md:justify-start md:text-[20px] md:leading-[24px] md:tracking-[3.375px] lg:text-[28px] lg:leading-[34px] lg:tracking-[4.725pxpx]"
      >
        <span className="font-bold opacity-25 mix-blend-normal">01</span>
        <p className="">PICK YOUR DESTINATION</p>
      </motion.div>
      <Outlet />
    </section>
  );
};

export default Destination;

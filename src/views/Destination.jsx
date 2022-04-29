import "../components/Destination/Destination.styles.css";
import { Outlet } from "react-router-dom";

const Destination = () => {
  return (
    <section className="bg-destination min-h-[105vh] pt-[88px] pb-[58px] px-6 text-white font-barlow-condensed md:min-h-[120vh] md:pt-[136px] md:px-[38.5px] md:pb-[62px] lg:pt-[212px] lg:px-[163px]">
      <div className="flex justify-center items-center gap-[19px] leading-[19px] tracking-[2.7px] md:justify-start md:text-[20px] md:leading-[24px] md:tracking-[3.375px] lg:text-[28px] lg:leading-[34px] lg:tracking-[4.725pxpx]">
        <span className="font-bold opacity-25 mix-blend-normal">01</span>
        <p>PICK YOUR DESTINATION</p>
      </div>
      <Outlet />
    </section>
  );
};

export default Destination;

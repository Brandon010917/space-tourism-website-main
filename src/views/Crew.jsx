import "../components/Crew/Crew.styles.css";
// React router dom
import { Outlet } from "react-router-dom";

const Crew = () => {
  return (
    <section className="bg-crew text-white min-h-screen pt-[88px] pb-[58px] px-6 font-barlow-condensed md:pt-[136px] md:px-[38.5px] md:pb-0 lg:pt-[212px] lg:pl-[163px] lg:pr-[120px]">
      <div className="flex justify-center items-center gap-[19px] leading-[19px] tracking-[2.7px] md:justify-start md:text-[20px] md:leading-[24px] md:tracking-[3.375px] lg:text-[28px] lg:leading-[34px] lg:tracking-[4.725pxpx]">
        <span className="font-bold opacity-25 mix-blend-normal">02</span>
        <p>MEET YOUR CREW</p>
      </div>
      <Outlet />
    </section>
  );
};

export default Crew;

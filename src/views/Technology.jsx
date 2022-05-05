import { Outlet } from "react-router-dom";
import "../components/Technology/Technology.styles.css";

const Technology = () => {
  return (
    <section className="bg-technology min-h-screen pt-[88px] pb-[58px] px-6 text-white font-barlow-condensed md:pt-[136px] md:px-[38.5px] md:pb-[62px] lg:pt-[212px] lg:px-[163px] lg:pr-0 xl:pr-[100px]">
      <div className="text-center leading-[19px] tracking-[2.7px] md:text-left md:text-[20px] md:leading-[24px] md:tracking-[3.375px] lg:text-[28px] lg:leading-[34px] lg:tracking-[4.725pxpx]">
        <span className="font-bold opacity-25 mix-blend-normal pr-[19px]">
          03
        </span>
        <span>SPACE LAUNCH 101</span>
      </div>
      <Outlet />
    </section>
  );
};

export default Technology;

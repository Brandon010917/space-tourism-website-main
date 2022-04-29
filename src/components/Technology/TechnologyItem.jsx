import React from "react";
import { NavLink } from "react-router-dom";

const styles =
  "w-10 h-10 bg-[#ffffff00] rounded-full inline-block border border-[#ffffff25] flex justify-center items-center font-bellefair text-[16px] leading-[18px] tracking-[1px] md:w-[60px] md:h-[60px] md:text-[24px] leading-[28px] tracking-[1.5px] lg:transition-colors lg:hover:border-[#fff]";

const TechnologyItem = ({ technology, index }) => {
  return (
    <li key={technology.name}>
      <NavLink
        to={`../${technology.name.toLowerCase().split(" ").join("-")}`}
        className={({ isActive }) =>
          `${styles} ${isActive ? "bg-[#fff] text-black border-[#fff]" : ""}`
        }
      >
        {index + 1}
      </NavLink>
    </li>
  );
};

export default TechnologyItem;

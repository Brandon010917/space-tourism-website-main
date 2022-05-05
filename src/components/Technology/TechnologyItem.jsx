// React router dom
import { NavLink } from "react-router-dom";

const TechnologyItem = ({ name, index }) => {
  return (
    <li key={name}>
      <NavLink
        to={`../${name.toLowerCase().split(" ").join("-")}`}
        className={({ isActive }) =>
          `w-10 h-10 bg-[#ffffff00] rounded-full border border-[#ffffff25] flex justify-center items-center font-bellefair text-[16px] leading-[18px] tracking-[1px] md:w-[60px] md:h-[60px] md:text-[24px] md:leading-[28px] md:tracking-[1.5px] lg:transition-all duration-300 ${
            isActive
              ? "bg-[#fff] text-black border-[#fff]"
              : "lg:hover:border-[#fff]"
          }`
        }
      >
        {index + 1}
      </NavLink>
    </li>
  );
};

export default TechnologyItem;

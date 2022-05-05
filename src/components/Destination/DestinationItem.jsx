// React router dom
import { NavLink } from "react-router-dom";

const DestinationItem = ({ name }) => {
  return (
    <li>
      <NavLink
        to={`../${name.toLowerCase()}`}
        className={({ isActive }) =>
          `inline-block uppercase pb-2 text-[14px] leading-[16.8px] tracking-[2.36px] border-b-[3px] border-[#fff0] md:text-[16px] md:leading-[19.2px] md:tracking-[2.7px] lg:leading-[19.2px] ${
            isActive ? "border-[#fff]" : "lg:hover:border-[#fff5]"
          }`
        }
      >
        {name}
      </NavLink>
    </li>
  );
};

export default DestinationItem;

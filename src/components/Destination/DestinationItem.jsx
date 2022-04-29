import { NavLink } from "react-router-dom";

const styles =
  "inline-block uppercase pb-2 text-[14px] leading-[16.8px] tracking-[2.36px] border-b-[3px] border-[#fff0] md:text-[16px] md:leading-[19.2px] md:tracking-[2.7px] lg:leading-[19.2px] lg:hover:border-[#fff5]";

const DestinationItem = ({ destination }) => {
  return (
    <li key={destination.name}>
      <NavLink
        to={`../${destination.name.toLowerCase()}`}
        className={({ isActive }) =>
          `${styles} ${isActive ? "border-[#fff]" : ""}`
        }
      >
        {destination.name}
      </NavLink>
    </li>
  );
};

export default DestinationItem;

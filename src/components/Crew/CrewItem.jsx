// React router dom
import { NavLink } from "react-router-dom";

const CrewItem = ({ name }) => {
  return (
    <li>
      <NavLink
        to={`../${name.toLowerCase().split(" ").join("-")}`}
        className={({ isActive }) =>
          `inline-block w-2.5 h-2.5 bg-white bg-opacity-[0.17] rounded-full lg:transition lg:duration-300 ${
            isActive ? "bg-opacity-100" : "lg:hover:bg-opacity-50"
          }`
        }
      ></NavLink>
    </li>
  );
};

export default CrewItem;

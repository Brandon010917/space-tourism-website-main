import React from "react";
import { NavLink } from "react-router-dom";

const styles = "inline-block w-2.5";

const CrewItem = ({ crew }) => {
  return (
    <li key={crew.name}>
      <NavLink
        to={`../${crew.name.toLowerCase().split(" ").join("-")}`}
        className={({ isActive }) =>
          `w-2.5 h-2.5 bg-white bg-opacity-[0.17] rounded-full lg:hover:bg-opacity-50 lg:transition lg:duration-300 ${styles} ${
            isActive ? "bg-opacity-100" : ""
          }`
        }
      ></NavLink>
    </li>
  );
};

export default CrewItem;

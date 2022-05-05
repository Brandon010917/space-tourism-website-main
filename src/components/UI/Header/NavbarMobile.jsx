// Icon
import iconClose from "../../../assets/shared/icon-close.svg";
// React router dom
import { NavLink } from "react-router-dom";
// Framer motion
import { motion } from "framer-motion";

const links = [
  "destinations/moon",
  "crew/douglas-hurley",
  "technology/launch-vehicle",
];

const navVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "linear",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "linear", duration: 0.8 },
  },
};

const NavbarMobile = ({ navbarMobileHandler }) => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="bg-white bg-opacity-[0.04] backdrop-blur-3xl min-h-screen fixed top-0 right-0 min-w-[254px] p-8 pr-6 text-white md:hidden"
    >
      <div className="pt-2 flex justify-end">
        <img
          src={iconClose}
          alt="Icon Close"
          onClick={navbarMobileHandler}
          className="cursor-pointer"
        />
      </div>
      <ul className="flex flex-col gap-y-8 mt-16">
        <li>
          <NavLink
            to="/"
            className={`uppercase font-barlow-condensed tracking-[2.7px] ${
              location.pathname === "/"
                ? "border-b-[3px] border-white pb-2"
                : ""
            }`}
            onClick={navbarMobileHandler}
          >
            <span className="inline-block mr-3 font-bold">00</span>
            Home
          </NavLink>
        </li>
        {links.map((link, i) => {
          const [name, route] = link.split("/");

          return (
            <li key={route}>
              <NavLink
                to={`/${link}`}
                className={`uppercase font-barlow-condensed tracking-[2.7px] ${
                  location.pathname.includes(name)
                    ? "border-b-[3px] border-white pb-2"
                    : ""
                }`}
                onClick={navbarMobileHandler}
              >
                <span className="inline-block mr-3 font-bold">
                  0{`${i + 1}`}
                </span>
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default NavbarMobile;

// React router dom
import { NavLink } from "react-router-dom";

const links = [
  "destinations/moon",
  "crew/douglas-hurley",
  "technology/launch-vehicle",
];

const NavbarDesktop = () => {
  return (
    <nav className="bg-white bg-opacity-[0.04] backdrop-blur-3xl hidden md:block text-white min-w-[450px] px-12 pt-10 lg:w-full">
      <ul className="flex justify-between items-center gap-9 xl:gap-12 lg:justify-evenly">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `uppercase font-barlow-condensed tracking-[2.35px] pb-10 inline-block text-sm lg:text-base ${
                isActive ? "border-b-[3px] border-white" : ""
              }`
            }
          >
            <span className="hidden lg:inline-block mr-3 font-bold">00</span>
            Home
          </NavLink>
        </li>
        {links.map((link, i) => {
          const [name, route] = link.split("/");

          return (
            <li key={route}>
              <NavLink
                to={`/${link}`}
                className={`uppercase font-barlow-condensed tracking-[2.35px] pb-10 inline-block text-sm lg:text-base ${
                  location.pathname.includes(name)
                    ? "border-b-[3px] border-white"
                    : ""
                }`}
              >
                <span className="hidden lg:inline-block mr-3 font-bold">
                  0{`${i + 1}`}
                </span>
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavbarDesktop;

import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavbarDesktop = () => {
  const [data, setData] = useState(null);

  const location = useLocation();

  console.log(location);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("../src/data.json");

      setData(data);
    };

    getData();
  }, []);

  return (
    <nav className="bg-white bg-opacity-[0.04] backdrop-blur-3xl hidden md:block text-white min-w-[450px] px-12 pt-10 lg:w-full">
      <ul className="flex justify-between items-center gap-9 xl:gap-12">
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
        {data &&
          Object.keys(data).map((key, i) => {
            const name = data[key][0].name.toLowerCase().split(" ").join("-");

            return (
              <li key={key}>
                <NavLink
                  to={`/${key}/${name}`}
                  className={`uppercase font-barlow-condensed tracking-[2.35px] pb-10 inline-block text-sm lg:text-base ${
                    location.pathname.includes(key)
                      ? "border-b-[3px] border-white"
                      : ""
                  }`}
                >
                  <span className="hidden lg:inline-block mr-3 font-bold">
                    0{`${i}`}
                  </span>
                  {key}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default NavbarDesktop;

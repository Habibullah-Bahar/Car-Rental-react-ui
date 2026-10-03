import React from "react";
import Darkmode from "./Darkmode";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

 const NavbarItems = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "CARS",
    link: "/#cars",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 4,
    name: "BOOKING",
    link: "/#booking",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toogleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white relative z-10">
      <div className="py-5 shadow-md flex justify-between px-5  md:px-10 h-[80px] w-full">
        <div className="flex justify-start items-center px-5 md:px-10">
          <h1 className="text-3xl  font-bold">Car Rental</h1>
        </div>

        <div className="flex items-center justify-end ">
          <ul className="md:flex items-center justify-end gap-10 md:pr-20 hidden">
            {NavbarItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className=" text-lg cursor-pointer font-medium hover:text-primary hover:border-b-2 hover:border-primary duration-300 py-2 "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center  gap-4 px-4 ">
            <Darkmode />
          </div>
          {/* Hamburger icon  */}

          <div className="md:hidden cursor-pointer ">
            {showMenu ? (
              <HiOutlineMenuAlt3
                onClick={toogleMenu}
                className=" cursor-pointer"
                size={30}
              />
            ) : (
              <HiOutlineMenuAlt1
                onClick={toogleMenu}
                className="
                cursor-pointer "
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <ResponsiveNavbar showMenu={showMenu} />
      </div>
    </div>
  );
};

export default Navbar;

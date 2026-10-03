import React from "react";
import { FaUserCircle } from "react-icons/fa";

const NavLinks = [
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
const ResponsiveNavbar = ({ showMenu }) => {
  return (
    <div
      className={`
    ${showMenu ? "left-0" : "-left-[100%]"}
    fixed top-0 bottom-0 z-50 bg-white dark:bg-gray-900 w-[75%] h-screen md:hidden rounded-r-xl shadow-md transition-all duration-300`}
    >
      <div className="px-8 py-20">
        <div className="flex gap-3">
          <div>
            <FaUserCircle size={50} className="cursor-pointer" />
          </div>
          <div>
            <h1>Hello Habibullah</h1>
            <h1 className="text-sm text-gray-600 dark:text-gray-400">
              premium user
            </h1>
          </div>
        </div>
        <div>
          <ul className="pt-16 flex space-y-3 flex-col ">
            {NavLinks.map((items) => (
              <li>
                <a className="hover:text-primary" href={items.link}>
                  {items.name}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative">
        <h1 className="absolute -bottom-64 px-12 text-gray-600 dark:text-gray-400 text-sm tracking-wider">
          Made with ❤ by The Learner Bahar
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;

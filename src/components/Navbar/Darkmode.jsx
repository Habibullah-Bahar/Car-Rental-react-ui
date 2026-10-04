import React from "react";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

const Darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light",
  );
  const element = document.documentElement;
  React.useEffect(() => {
    if (theme === "dark") element.classList.add("dark");
    else element.classList.remove("dark");
    localStorage.setItem("theme", theme);
  });
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="relative transition-all duration-75">
        <div className="absolute top-0 right-0 z-10 cursor-pointer">
          <MdSunny
            onClick={changeTheme}
            className={`text-xl hover:text-primary text-primary transition-all duration-700 ${
              theme === "light" ? "opacity-100" : "opacity-0"
            } `}
          />
        </div>
        <div>
          <IoMoon
            onClick={changeTheme}
            className={`text-xl transition-all duration-700 ${
              theme === "dark" ? "opacity-100" : "opacity-0"
            } `}
          />
        </div> 
      </div>
    </>
  );
};

export default Darkmode;

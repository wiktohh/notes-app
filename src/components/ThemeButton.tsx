import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = (props: any) => {
  const theme = useContext(ThemeContext);
  let buttonStyle = theme === "dark" ? "bg-[#121212] border-[#8e8e8e]" : "";
  return (
    <button
      onClick={props.handleTheme}
      className={`w-10 ${buttonStyle} h-10 text-center text-2xl rounded-full flex justify-center items-center`}
    >
      {props.theme === "light" ? (
        <FaMoon color="#121212" />
      ) : (
        <HiSun color="8e8e8e" />
      )}
    </button>
  );
};

export default ThemeButton;

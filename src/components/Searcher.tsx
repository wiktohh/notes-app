import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { SearcherInterface } from "../types/types";

const Searcher = ({ searchNote }: SearcherInterface) => {
  const theme = useContext(ThemeContext);
  const color = theme === "light" ? "black" : "#8e8e8e";
  const inputStyle =
    theme === "dark"
      ? "bg-[#121212] border-[#8e8e8e] text-[#8e8e8e]"
      : "bg-white border-black";

  return (
    <div className="w-[100%] flex justify-center items-center p-[10px] mb-[40px] pt-[40px]">
      <label htmlFor="searcher" className="text-[25px]">
        <FaSearch color={color} />
      </label>
      <input
        className={`w-[60%] p-[10px] text-[20px] border-b-[1px] border-black outline-none ${inputStyle}`}
        type="text"
        placeholder="Wyszukaj notatki po tytule..."
        id="searcher"
        onChange={(e) => searchNote(e.target.value)}
      />
    </div>
  );
};

export default Searcher;

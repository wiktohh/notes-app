import { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";
import { NoteInterface } from "../types/types";

const Note = ({ title, text, date, handleRemoveNote, id }: NoteInterface) => {
  const handleClick = () => {
    handleRemoveNote(id);
  };

  const theme = useContext(ThemeContext);

  const noteStyle = theme === "dark" ? "bg-amber-400" : "bg-amber-200	";

  return (
    <div
      className={`rounded-xl h-[220px] w-[230px] flex flex-col justify-between ${noteStyle}`}
    >
      <div className="flex flex-col h-[80%]">
        <span className=" p-[10px] font-bold truncate	whitespace-pre-wrap">{title}</span>
        <span className="p-[10px] break-words whitespace-pre-wrap overflow-auto">{text}</span>
      </div>
      <div className="p-[10px] flex justify-between h-[20%]">
        <span>{date}</span>
        <span onClick={handleClick} className="text-[20px] cursor-pointer">
          <BsFillTrashFill />
        </span>
      </div>
    </div>
  );
};

export default Note;

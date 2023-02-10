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
      className={`rounded-xl min-h-[220px] min-w-[230px] flex flex-col justify-between ${noteStyle}`}
    >
      <div className="flex flex-col">
        <span className=" p-[10px] font-bold truncate">{title}</span>
        <span className="p-[10px] break-words">{text}</span>
      </div>
      <div className="p-[10px] flex justify-between">
        <span>{date}</span>
        <span onClick={handleClick} className="text-[20px] cursor-pointer">
          <BsFillTrashFill />
        </span>
      </div>
    </div>
  );
};

export default Note;

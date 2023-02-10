import { ChangeEvent, useContext, useState } from "react";
import { IoSend } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";
import { AddNoteInterface } from "../types/types";

const AddNote = ({ handleAddNote }: AddNoteInterface) => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSetText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (120 - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  };

  const handleClick = () => {
    if (text.trim().length && title.trim().length) {
      handleAddNote(title, text);
      setText("");
      setTitle("");
    }
  };

  const theme = useContext(ThemeContext);

  const noteStyle = theme === "dark" ? "bg-amber-400" : "bg-amber-200	";
  const inputStyle = theme === "dark" ? "placeholder:text-slate-600" : "";

  return (
    <div
      className={`rounded-xl min-h-[200px] min-w-[240px] ${noteStyle} flex flex-col justify-between `}
    >
      <div className="flex flex-col">
        <input
          className={`bg-transparent p-[10px] font-bold outline-none ${inputStyle}`}
          placeholder="Wpisz tytul..."
          type="text"
          id="title"
          onChange={handleSetTitle}
          value={title}
        />
        <textarea
          rows={5}
          className={`${inputStyle} p-[10px] bg-transparent resize-none outline-none`}
          placeholder="Wypisz tresc..."
          onChange={handleSetText}
          value={text}
        />
      </div>
      <div className="p-[10px] flex justify-between">
        <span>Pozostało {120 - text.length} znakow</span>
        <span className="text-[20px] cursor-pointer" onClick={handleClick}>
          <IoSend />
        </span>
      </div>
    </div>
  );
};

export default AddNote;

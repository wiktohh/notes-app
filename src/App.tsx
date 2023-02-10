import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "./App.css";
import NotesList from "./components/NotesList";
import Searcher from "./components/Searcher";
import ThemeButton from "./components/ThemeButton";
import { ThemeContext } from "./context/ThemeContext";
import { Notes } from "./types/types";

function App() {
  const [notes, setNotes] = useState<Notes[]>(loadNotes());
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [searchText, setSearchText] = useState<string>("");

  function loadNotes(): Notes[] {
    const notesJSON = localStorage.getItem("notes");
    if (notesJSON == null) return [];
    return JSON.parse(notesJSON);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleTheme = () => {
    const themeChange = theme === "light" ? "dark" : "light";
    setTheme(themeChange);
  };

  const handleAddNote = (title: string, text: string) => {
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: new Date().toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const handleRemoveNote = (id: string) => {
    const newNotes = notes.filter((note) => id !== note.id);
    setNotes(newNotes);
  };

  const bgc = theme === "dark" ? "bg-[#121212]" : "bg-white";

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`min-h-screen ${bgc}`}>
        <div className={`max-w-[960px] ml-auto mr-auto`}>
          <div className="flex justify-center items-center">
            <Searcher searchNote={setSearchText} />
            <ThemeButton theme={theme} handleTheme={handleTheme} />
          </div>
          <NotesList
            notes={notes.filter((note) =>
              note.title.toLowerCase().includes(searchText)
            )}
            handleRemoveNote={handleRemoveNote}
            handleAddNote={handleAddNote}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

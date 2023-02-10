import { NotesListInterface } from "../types/types";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({
  notes,
  handleAddNote,
  handleRemoveNote,
}: NotesListInterface) => {
  return (
    <div className="flex flex-wrap gap-[1rem] justify-center">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note, index) => (
        <Note
          id={note.id}
          key={index}
          title={note.title}
          text={note.text}
          date={note.date}
          handleRemoveNote={handleRemoveNote}
        />
      ))}
    </div>
  );
};

export default NotesList;

export interface Notes {
  id: string;
  title: string;
  text: string;
  date: string;
}

export interface NotesListInterface {
  notes: Notes[];
  handleAddNote: Function;
  handleRemoveNote: Function;
}

export interface SearcherInterface {
  searchNote: Function;
}

export interface AddNoteInterface {
  handleAddNote: Function;
}

export interface NoteInterface {
  id?: string;
  key: number;
  title: string;
  text: string;
  date: string;
  handleRemoveNote: Function;
}

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface Note {
  id: string;
  text: string;
}

interface NotesState {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
  addNote: (note: Note) => void;
  updateNote: (id: string, text: string) => void;
  deleteNote: (id: string) => void;
}

export const useNotesStore = create<NotesState>()(
  devtools(
    immer((set) => ({
      notes: [],
      setNotes: (notes) =>
        set((state) => {
          state.notes = notes;
        }),
      addNote: (note) =>
        set((state) => {
          state.notes.push(note);
        }),
      updateNote: (id, text) =>
        set((state) => {
          const n = state.notes.find((n: { id: string; }) => n.id === id);
          if (n) n.text = text;
        }),
      deleteNote: (id) =>
        set((state) => {
          state.notes = state.notes.filter((n: { id: string; }) => n.id !== id);
        }),
    }))
  )
);

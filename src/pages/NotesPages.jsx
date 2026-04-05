
import { useEffect } from "react";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";

export function NotesPage() {
  const { notes, getNotes } = useNotes();

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    console.log("Notas actualizadas:", notes);
  }, [notes]);

  if (notes.length == 0)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-200 to-purple-400 px-4">
        <h1 className="text-3xl font-bold text-white text-center">
          No hay tareas aún ✨
        </h1>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-200 to-purple-400 p-7">
      
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        My Notes
      </h1>

      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <NoteCard note={note} key={note._id} />
        ))}
      </div>

    </div>
  );
}

import { useNotes } from "../context/NotesContext";
import { Link } from "react-router-dom";

function NoteCard({ note }) {
  const { deleteNote } = useNotes();

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 m-3 w-full max-w-md border-l-4 border-pink-500 hover:shadow-2xl transition">

      <header className="flex justify-between items-start">

        <h1 className="text-xl font-bold text-purple-700">
          {note.title}
        </h1>

        <div className="flex gap-3">

          <button
            onClick={() => deleteNote(note._id)}
            className="text-purple-500 hover:text-purple-700 font-semibold"
          >
            Delete
          </button>

          <Link
            to={`/notes/${note._id}`}
            className="text-pink-500 hover:text-purple-600 font-semibold"
          >
            Edit
          </Link>

        </div>

      </header>

      <p className="text-pink-600 mt-4">
        {note.description}
      </p>

      <span className="text-sm text-pink-400 mt-4 block">
        Fecha: {note.date}
      </span>

    </div>
  );
}

export default NoteCard;

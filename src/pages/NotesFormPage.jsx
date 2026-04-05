import { useForm } from "react-hook-form";
import { useNotes } from "../context/NotesContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function NotesFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createNotes, getNote, updateNote } = useNotes();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadNote() {
      if (params.id) {
        const note = await getNote(params.id);
        setValue("title", note.title);
        setValue("description", note.description);
      }
    }
    loadNote();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateNote(params.id, data);
    } else {
      createNotes(data);
    }
    navigate("/notes");
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-200 to-purple-400">

      <div className="bg-pink-100 max-w-md w-full p-10 rounded-2xl shadow-2xl border-2 border-purple-300">

        <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Create / Edit Note
        </h1>

        <form onSubmit={onSubmit}>

          <input
            type="text"
            className="w-full bg-white border-2 border-pink-300 text-pink-400 px-3 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Title"
            {...register("title")}
            autoFocus
          />

          <textarea
            rows="3"
            className="w-full bg-white border-2 border-pink-300 text-pink-400 px-3 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Description"
            {...register("description")}
          ></textarea>

          <button
            className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            Save
          </button>

        </form>

      </div>
    </div>
  );
}

export default NotesFormPage; 

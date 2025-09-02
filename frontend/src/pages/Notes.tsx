import { useEffect, useState } from "react";
import { fetchNotes, addNote, deleteNote } from "../Services/API";


export interface Note{
    id:number;
    content:string;
};

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [content, setContent] = useState("");

  const loadNotes = async () => {
    const res = await fetchNotes();
    setNotes(res.data);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleAdd = async () => {
    await addNote(content);
    setContent("");
    loadNotes();
  };

  return (
    <>
    <div className="p-6 pt-10 items-center justify-center text-center md:w-xl lg:min-w-fit">
      <h2 className="text-xl font-bold mb-4">Notes</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="border-none shadow p-2 rounded flex-grow"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="New Note"
        />
        <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer shadow">
          Add
        </button>
      </div>
      <ul>
        {notes.map((n) => (
          <li key={n.id} className="flex text-x font-semibold justify-between items-center border-b py-2">
            <span>{n.content}</span>
            <button
              onClick={() => deleteNote(n.id).then(loadNotes)}
              className="text-red-500 font-bold cursor-pointer"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
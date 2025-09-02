import { useEffect, useState } from "react";
import { fetchTask, addTask, updateTask, deleteTask } from "../Services/API";

export type Tasks={
    id:number;
    title:string;
    done:boolean;
}

export default function Task() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    const res = await fetchTask();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAdd = async () => {
    await addTask(title);
    setTitle("");
    loadTasks();
  };

  return (
  

    <div className="p-6 pt-10 items-center justify-center text-center md:w-xl lg:min-w-fit">
      <h2 className="text-xl mb-4 font-bold">Tasks</h2>
      <div className="flex gap-2 mb-4">
        <input
          className=" shadow p-2 rounded flex-grow border-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Task"
        />
        <button onClick={handleAdd} className=" shadow-xl bg-blue-500 text-white px-4 py-2 rounded cursor-pointer ">
          Add
        </button>
      </div>
      <ul>
        {tasks.map((t) => (
          <div>
            <li key={t.id} className="text-x font-semibold flex justify-between items-center border-b py-2 px-1 ">
            <span
              className={`cursor-pointer ${t.done ? "line-through text-gray-500" : "" }`}
              onClick={() => updateTask(t.id, !t.done).then(loadTasks)}
            >
              {t.title}
            </span>
            <button
              onClick={() => deleteTask(t.id).then(loadTasks)}
              className="text-red-500 font-bold cursor-pointer"
            >
              Delete
            </button>
          </li>
          </div>
        ))}
      </ul>
    </div>

  );
}
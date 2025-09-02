import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

// Auth
export const register = (username: string, password: string) =>
  API.post("/register", { username, password });

export const login = (username: string, password: string) =>
  API.post("/login", { username, password });

// Tasks
export const fetchTask = () => API.get("/tasks");
export const addTask = (title: string) => API.post("/tasks", { title });
export const updateTask = (id: number, done: boolean) =>
  API.put(`/tasks/${id}`, { done });
export const deleteTask = (id: number) => API.delete(`/tasks/${id}`);

// Notes
export const fetchNotes = () => API.get("/notes");
export const addNote = (content: string) => API.post("/notes", { content });
export const deleteNote = (id: number) => API.delete(`/notes/${id}`);
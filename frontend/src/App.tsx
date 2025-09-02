import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Task";
import Notes from "./pages/Notes";
import About from "./pages/About";


export default function App() {
  return (
  
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Dashboard />} />
      <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Task" element={<Tasks />} />
        <Route path="/Notes" element={<Notes />} />
         <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
 
  );
}
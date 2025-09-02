import { LogInIcon, UserIcon  } from "lucide-react";
import Task from "./Task";
import Notes from "./Notes";



export default function Dashboard() {


  return (
<div className="items-center justify-center text-center scroll-auto mb-40">

{/* header */}
<Header/>

 {/* Navbar */}
 <NavBar/>

{/* task */}

<div className=" md:flex items-center justify-center text-center mt-20">
  <Task/>
  
{/* Note */}

<Notes/>
</div>
{/* footer */}


</div>
  );
}

export const Header =()=>{

  return(
  <div className=" h-25 flex items-center justify-between bg-gray-800">
     <div className="md:p-1 lg:p-2 ml-2 lg:ml-3">
      <h2 className=" cursor-pointer lg:text-xl font-semibold mb-4  bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent"> Task Manager</h2>
    </div>
    <div className="flex items-center gap-3 md:gap-6 lg:gap-10 mr-3">
     <div className="text-white text-center items-center cursor-pointer
      ">
     <a href="./Login">
       <UserIcon size={20} className="hover:text-gray-400"/>
      <span className="text-xs text-gray-300 text-center ">Login</span>
     </a>
      </div>
      <div className=" text-white text-center items-center cursor-pointer  ">
        <a href="./Register">
          <LogInIcon size={20} className="hover:text-gray-400" />
        <span className="text-xs text-gray-300 ">Register</span>
        </a>
      </div>
    </div>
 </div>


  )

  
}

export  function NavBar(){
return(
  <nav className="flex h-10 items-center gap-8  md:gap-15 lg:gap-25 text-gray-200 justify-center text-center bg-gray-800 pb-1">
 <span><a href="/Dashboard" className="cursor-pointer hover:text-gray-400 ">Home</a></span>
 <span><a href="./Task" className="cursor-pointer  hover:text-gray-400">Tasks</a></span>
 <span><a href="./Notes" className="cursor-pointer  hover:text-gray-400">Notes</a></span>
  <span><a href="./About" className="cursor-pointer  hover:text-gray-400">About</a></span>
 </nav>
)
}
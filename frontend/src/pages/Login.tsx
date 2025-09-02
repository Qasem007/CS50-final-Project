import React, { useState } from 'react';
import {login} from '../Services/API';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [username ,setUsername] = useState("");
    const [password ,setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async ()=>{
        try{
            await login(username ,password);
            navigate("/Dashboard");
        }catch {
            alert("Login failed");
        }
    };

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
        <div className='bg-white p-6 rounded-xl shadow-md w-80'>
            <h2 className='text-xl font-bold mb-4 '>Login</h2>
           <input 
           type="text" placeholder='username' value={username}
           className='w-full p-2 border rounded mb-2'
           onChange={(e)=> setUsername(e.target.value)} />
          <input 
          type="password" placeholder='password' value={password}
          onChange={(e)=> setPassword(e.target.value)}
          className='w-full p-2 border rounded mb-2'/>
          <button onClick={handleLogin}
          className='w-full bg-blue-500 text-white py-2 rounded cursor-pointer'>
           Login
          </button>
          <p className='mt-2 text-sm'>
           Don't have an account ? {" "}
           <span className='text-blue-500 cursor-pointer'
           onClick={()=> navigate("/frontend/src/pages/Register")}>
            Register
           </span>
          </p>
        </div>
      
    </div>
  );
}

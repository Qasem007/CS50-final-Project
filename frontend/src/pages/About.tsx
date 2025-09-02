

export default function About() {
  return (
    <div className="flex-col justify-center items-center w-full text-center mt-20 ">
      <h1 className="font-bold mb-5">About</h1>
     <div className="  items-center text-center justify-between font-serif p-5 m-1  ">
       <p className="">This project is a Tasl Manager web application buil with React (TypeScript + Tailwindcss) on the frontend <br />and flask (Python ) with SQLite on the backend it allows users to: <br></br>
     
      </p>
    
   </div>
     <div className="pt-5 items-center  justify-between text-center  font-semibold text-sm">
     <h2 className="p-1 items-start">Register and Login.</h2>
      <h2 className="p-1">Create ,Read ,Update and Delete task.</h2>
      <h2 className="p-1">Store all task in a database for persistence.</h2>
      <h2 className="p-1">Use a responsive UI with modern design with tailwindcss.</h2>
      </div>
     <div className="pt-30">
        <p className="font-bold text-xs p-1">Made by SHAYAN</p>
        <p className="text-xs p-1">+93774700760</p>
        <p className="text-xs p-1">shayanmazary@gmail.com</p>
     </div>
    </div>
  )
}

import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("")
  const [fade, setFade] = useState(false)

  
  function addTodo() {
    if(input.trim() === "") {
    setTimeout(()=>{
    setError("Hey try add some tasks first")
    },10)

   setFade(false)

   setTimeout(()=>{
      setFade(true)
   },2500)

   setTimeout(()=>{
      setError("")
   },3000)

   return
  }
    setTasks([...tasks, input]);
    setInput("");
  }


  function removeTodo(index){
      const removeTask = tasks.filter((task, currentIndex) =>{
          return currentIndex !== index;
      })

      setTasks(removeTask);
  }
  return (
    <div className="bg-black min-h-screen p-4 text-white">
      <div className="flex relative">
        <h1 className="text-4xl font-bold text-center mb-10 w-screen ">
          My Todos
        </h1>

        

        <div className="credentials flex justify-end gap-5 absolute right-0">
          <button className="text-md font-bold bg-amber-50 text-black p-2 pl-6 pr-6 cursor-pointer rounded-3xl">
            Log in
          </button>
          <button className="text-md font-bold border  p-2 pl-6 pr-6 cursor-pointer rounded-3xl hover:bg-gray-500/40 border-gray-400">
            Sign up for free
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === "Enter") 
              addTodo()
          }}
          type="text"
          placeholder="What needs to be done?"
          className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-5 py-4"
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 px-8 text-lg rounded-xl cursor-pointer"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      

      <p className={`
text-red-500 text-center
transition-opacity duration-500
${fade ? "opacity-0" : "opacity-100"}
`}>
   {error}
</p>
      
      {/* Entered Tasks */}
      <div className="mt-6 ">
        {tasks.map((task, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-xl mb-3 w-1/3 flex justify-between items-center">
            {task}
            <div className="buttons flex gap-5 items-center">
            <input type="checkbox" name="" id="" className="accent-green-500 cursor-pointer size-5 "/>
            {/* <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button> */}
            <button class="p-2 text-gray-500  rounded-lg hover:text-red-600 cursor-pointer" onClick={() => {removeTodo(index)}}>
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>


        </div>
          </div>
          
        ))}
{/* 
        <div className="mt-5">
          {tasks.map((task, index) => (
            <div key={index} 
            className="bg-green-500 p-5 rounded-2xl mb-3 w-1/2 flex justify-between items-center"
            >
            {task}
            </div>
          ))}
        </div> */}

          
      </div>
    </div>
  );
}

export default App;

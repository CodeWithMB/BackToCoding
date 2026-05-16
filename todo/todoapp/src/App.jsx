import { useState } from 'react'


function App() {
  const [input, setInput] = useState();

  function addTodo(){
    console.log("Add your tasks: ");
  }
  return (
    <div className='bg-black min-h-screen p-4 text-white'>

      <div className='flex relative'>
        <h1 className='text-4xl font-bold text-center mb-10 w-screen '>My Todos</h1>

        <div className='credentials flex justify-end gap-5 absolute right-0'>
            <button className='text-md font-bold bg-amber-50 text-black p-2 pl-6 pr-6 cursor-pointer rounded-3xl'>Log in</button>
            <button className='text-md font-bold border  p-2 pl-6 pr-6 cursor-pointer rounded-3xl hover:bg-gray-500/40 border-gray-400'>Sign up for free</button>
        </div>
      </div>

      <div className="flex gap-3">
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='What needs to be done?' className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-5 py-4" />
          <button className="bg-blue-600 hover:bg-blue-700 px-8 text-lg rounded-xl" onClick={addTodo}>Add</button>
      </div>
      
    </div>
  )
}

export default App

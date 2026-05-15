import { useState } from 'react'


function App() {
  const [input, setInput] = useState();

  function addTodo(){
    console.log("Add your tasks: ");
  }
  return (
    <div className='bg-black min-h-screen p-4 text-white'>
      <h1 className='text-4xl font-bold text-center mb-10'>My Todos</h1>
      <div className="flex gap-3">
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='What needs to be done?' className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-5 py-4" />
          <button className="bg-blue-600 hover:bg-blue-700 px-8 rounded-xl" onClick={addTodo}>Add</button>
      </div>
      
    </div>
  )
}

export default App

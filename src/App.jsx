import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Task from './components/Task';

function App() {
  const [task, setTask] = useState('');
  const [collection, setCollection] = useState([]);
  useEffect(()=>{
    const arr = localStorage.getItem('tasks')
    // console.log();
    setCollection(JSON.parse((arr)))


  },[])
  const addTask = (e) => {
    e.preventDefault();

    if (!task) {
      alert('ADD TASK');
      return;
    } else {
      setCollection((prev) => {
        localStorage.setItem("tasks",JSON.stringify([...collection, { task, defaultChecked: false }]));
        return [...collection, { task, defaultChecked: false }];
      });
    }
    setTask('');
  };
  const removeTask = (val) => {
    const arr = collection.filter((item) => item.task !== val);
    setCollection(arr)
    localStorage.setItem("tasks",JSON.stringify(arr));
  };
  return (
    <div className="flex mt-20 flex-col">
      <form className="flex gap-2 flex-col sm:flex-row ">
        <input
          type="text"
          className="p-4 rounded-xl text-2xl outline-none bg-gray-300 text-black lg:w-[600px]  "
          placeholder="Add Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="p-4 rounded-xl text-xl bg-blue-500 text-white font-bold"
          onClick={addTask}
        >
          ADD
        </button>
      </form>
      <div className="flex flex-col ">
        {collection?.length > 0 ? (
          collection.map((item) => <Task {...item} removeTask={removeTask} />)
        ) : (
          <h1v className=" text-xl text-center mt-10 font-semibold">No Task Added</h1v>
        )}
      </div>
    </div>
  );
}

export default App;

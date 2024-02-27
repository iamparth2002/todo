import React, { useState } from 'react';

const Task = ({task,defaultChecked,removeTask}) => {
    
    const [check,setCheck]=useState(defaultChecked)
    
  return (
    <div className="flex gap-2 mt-5 p-4 bg-gray-200 rounded-xl justify-between items-center flex-wrap text-wrap">
      <div className="flex gap-2 item-center">
        <input
          className="w-[20px] sm:w-[30px] rounded-full cursor-pointer bg-white"
          type="checkbox"
          value={check}
          onChange={()=>setCheck(!check)}
          
        />
        <p className={!check?"text-lg font-semibold uppercase w-48 break-words lg:text-2xl ":"lg:text-2xl text-lg font-semibold uppercase w-48 break-words  line-through"}>
          {task}
        </p>
      </div>

      <div>
        <button className="p-3 rounded-lg text-md bg-red-500 text-white font-bold lg:text-2xl" onClick={()=>removeTask(task)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;

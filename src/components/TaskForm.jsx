import React, { useState } from "react";
import { useTasks }  from "../context/TaskContext";

const TaskForm =()=>{
    const [title, setTitle] = useState("");
    const { addTask } = useTasks(); 

const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
};
return (
    <form onSubmit={handleSubmit}>
        <input
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         placeholder="Enter task..."
         />
         <button type="submit">Add</button>
    </form>
);
};
export default TaskForm;
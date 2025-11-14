import React from "react";
import { useTasks } from "../context/TaskContext";

const TaskItem = ({ task }) => {
    const { deleteTask, toggleTask } = useTasks(); 
    return (
        <li>
            <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? "line-through" : ""}}>
                {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    )
};
export default TaskItem;
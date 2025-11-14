import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    const addTask = (title) => {
        const newTask = { id: uuid(), title, completed: false };
        setTasks([...tasks, newTask]);
    };
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed} : task )
        );

    };
    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask}} >
            {children}
        </TaskContext.Provider>
    );
}
export const useTasks = () => useContext(TaskContext);

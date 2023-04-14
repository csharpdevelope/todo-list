import React, { useState } from "react";
import {tasks} from '../data/TasksData'
export const TaskContext = React.createContext();

const TaskProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [isShowModal, setShowModal] = useState(false);
    var data = JSON.parse(localStorage.getItem("data"));

    if (localStorage.getItem("data") == null) {
        localStorage.setItem("data", JSON.stringify(tasks));
    }

    const addNewTask = (task) => {
        console.log("Context: " + task.name);
        const newId = data[(data.length - 1)].id;
        const newData = {
            id: newId + 1,
            name: task.name,
            description: task.description,
            favourite: task.favorurite,
            completed: task.completed,
            date: new Date()
        };
        data.push(newData);
        console.log(data);
        setShowModal(false);
        localStorage.setItem("data", JSON.stringify(data));
    }

    const deleteItemOfIds = (id) => {
        const tasks = data.filter(task => task.id !== id);
        localStorage.setItem("data", JSON.stringify(tasks));
        data = JSON.parse(localStorage.getItem("data"));
    }

    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "white")
    }

    const setThemeChange = (name) => {
        setTheme(name);
    }

    return <TaskContext.Provider value={{
        data, 
        theme,
        setThemeChange,
        isShowModal,
        setShowModal,
        addNewTask,
        deleteItemOfIds
    }}>{children}</TaskContext.Provider>
}
export default TaskProvider;
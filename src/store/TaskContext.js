import React, { useState } from "react";
import {tasks} from '../data/TasksData'
export const TaskContext = React.createContext();

const TaskProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [isShowModal, setShowModal] = useState(false);
    const [isDeletedModal, setDeletedModal] = useState(false);
    const [isUpdateModal, setUpdateModal] = useState(false);
    var data = JSON.parse(localStorage.getItem("data"));

    if (localStorage.getItem("data") == null) {
        localStorage.setItem("data", JSON.stringify(tasks));
    }

    const addNewTask = (task) => {
        var newId;
        if (data.length !== 0)
            newId = data[(data.length - 1)].id;
        else 
            newId = 0;

        const newData = {
            id: newId + 1,
            name: task.name,
            description: task.description,
            favourite: task.favorurite,
            completed: task.completed,
            date: new Date()
        };
        data.push(newData);
        setShowModal(false);
        localStorage.setItem("data", JSON.stringify(data));
    }

    const getTask = (id) => {
        if (id === null) return null;
        const tasks = data.filter(task => task.id === id);
        return tasks;
    }

    const deleteItemOfIds = (id) => {
        setDeletedModal(false);
        const tasks = data.filter(task => task.id !== id);
        localStorage.setItem("data", JSON.stringify(tasks));
    }

    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "white")
    }

    const setThemeChange = (name) => {
        setTheme(name);
    }

    return <TaskContext.Provider value={{
        isDeletedModal,
        setDeletedModal,
        isUpdateModal,
        setUpdateModal,
        data, 
        theme,
        setThemeChange,
        isShowModal,
        setShowModal,
        addNewTask,
        deleteItemOfIds,
        getTask
    }}>{children}</TaskContext.Provider>
}
export default TaskProvider;
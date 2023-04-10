import React, { useState } from "react";
export const TaskContext = React.createContext();


const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [isShowModal, setShowModal] = useState(false);

    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "white")
    }

    const setThemeChange = (name) => {
        localStorage.setItem("theme", name);
        setTheme(name);
    }

    return <TaskContext.Provider value={{
        tasks,
        theme,
        setTasks,
        setThemeChange,
        isShowModal,
        setShowModal
    }}>{children}</TaskContext.Provider>
}
export default TaskProvider;
import React, { useState } from "react";
export const TaskContext = React.createContext();


const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "dark")
    }
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const setThemeChange = ({ name }) => {
        setTheme(name);
    }

    return <TaskContext.Provider value={{
        tasks,
        setTasks,
        theme,
        setThemeChange
    }}>{children}</TaskContext.Provider>
}
export default TaskProvider;
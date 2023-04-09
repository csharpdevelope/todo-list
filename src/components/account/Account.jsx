import React, { useContext } from 'react';
import { TaskContext } from '../../store/TaskContext';
import './account.scss'

const Account = () => {

  const { theme, setThemeChange } = useContext(TaskContext);

  return (
    <div className='todo-list-account'>
      <p>Darkmode</p>
      <label class="switch">
        <input type="checkbox" checked={theme === "dark" ? true : false} onChange={() => {
          if (theme === "dark") setThemeChange("white");
          else setThemeChange("dark");
        }}/>
        <span class="slider round"></span>
      </label>
    </div>
  )
}

export default Account;
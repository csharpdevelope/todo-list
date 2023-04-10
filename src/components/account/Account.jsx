import React, { useContext } from 'react';
import { TaskContext } from '../../store/TaskContext';
import './account.scss'

const Account = () => {

  const { theme, setThemeChange } = useContext(TaskContext);

  return (
    <div className=''>

      <div className='todo-list-account-darkmode'>
        <p>Darkmode</p>
        <label className="switch">
          <input type="checkbox" checked={theme === "dark" ? true : false} onChange={() => {
            if (theme === "dark") setThemeChange("white");
            else setThemeChange("dark");
          }}/>
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  )
}

export default Account;
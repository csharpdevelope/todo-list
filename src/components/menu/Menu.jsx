import React, { useContext } from 'react';
import { routes } from '../../routes';
import { Link, useLocation } from 'react-router-dom';
import CustomButton from '../button/CustomButton';
import { TaskContext } from '../../store/TaskContext';
import "./menu.scss";

const Menu = () => {

  const location = useLocation();
  const { pathname } = location;
  const { theme, setShowModal } = useContext(TaskContext);

  return (
    <div className='todo-list-menu'>
      <div className='todo-list-menu-logo'>
        <h2 className={theme === 'dark' ? "todo-list-menu-logo-dark" : ""}>TO-DO LIST</h2>
        <CustomButton  name={"Add new task"} onClick={() => setShowModal(true)} />
      </div>
        
      {/* routes */}
      <div className='todo-list-routes'>
        {routes.map(route => {
          return (
              <Link 
                key={route.id} 
                to={route.url} 
                className={`todo-list-routes-root ${(theme === "dark" ? "todo-list-routes-root-dark" : "todo-list-routes-root-white")} 
                ${(pathname === route.url ? (theme === "dark" ? "root-active-dark" : "root-active-white") : "")}`}>
                {route.name}
              </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Menu;
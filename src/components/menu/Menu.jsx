import React, { useContext } from 'react';
import { routes } from '../../routes';
import { Link, useLocation } from 'react-router-dom';
import CustomButton from '../button/CustomButton';
import { TaskContext } from '../../store/TaskContext';
import "./menu.scss";

const Menu = () => {

  const location = useLocation();
  const { pathname } = location;
  const { theme } = useContext(TaskContext);
  console.log(pathname);

  return (
    <div className='todo-list-menu'>
      <div className='todo-list-menu-logo'>
        <h2 className={theme === 'dark' ? "todo-list-menu-logo-dark" : ""}>TO-DO LIST</h2>
        <CustomButton  name={"Add new task"} onClick={() => console.log("Hello world")} />
      </div>
        
      {/* routes */}
      <div className='todo-list-routes'>
        {routes.map(route => {
          return (
              <Link 
                key={route.id} 
                to={route.url} 
                className={`todo-list-routes-root ${
                  (pathname === route.url ? "root-active-dark" : "roout-active-white") &&
                  (theme === "dark" ? "todo-list-routes-root-dark" : "todo-list-routes-root-white")} `}>
                {route.name}
              </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Menu;
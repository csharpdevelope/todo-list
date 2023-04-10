import React, { useContext } from 'react';
import "./app.scss";
import { Route, Routes } from 'react-router-dom';
import { Account, AddModal, Menus, Search } from './components';
import { TaskContext } from './store/TaskContext';
import { routes } from './routes';

const App = () => {
  const { theme } = useContext(TaskContext);
  return (
    <div className='task-list-app'>
      <AddModal />
      {/* left */}
      <div className={`task-list-app-left-menu ${theme === "dark" ? "task-list-app-menu-dark" : "task-list-app-menu-white"}`}>
        <Menus />
      </div>
      {/* middle */}
      <div className={`task-list-app-middle-search ${theme === "dark" ? "task-list-app-middle-dark" : "task-list-app-middle-white"}`}>
        <Search />
        <Routes>
          {routes.map(route => {
            return(
              <Route key={route.id} path={route.url} element={route.component} />
            )
          })}
        </Routes>
      </div>
      {/* right */}
      <div className={`task-list-app-right-account ${theme === "dark" ? "task-list-app-menu-dark" : "task-list-app-menu-white"}`}>
        <Account />
      </div>
    </div>
  )
}

export default App;
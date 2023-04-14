import React, { useContext } from 'react';
import TaskComponent from '../task/TaskComponent';
import ButtonInput from '../button-input/ButtonInput';
import { routes } from '../../routes';
import { TaskContext } from '../../store/TaskContext';
import "./tasks.scss";
import { useLocation } from 'react-router-dom';

const Tasks = ({ tasks }) => {
    const path = useLocation();
    const { theme } = useContext(TaskContext);
    const {pathname} = path;

  return (
    <div className='todo-list-dashboard'>
      <div className={`todo-list-dashboard-header ${theme === 'dark' ? 'todo-list-dashboard-header-dark' : 'todo-list-dashboard-header-white'}`}>
        <span>{routes.map(route => route.url === pathname ? route.name : "")}</span>
        <span>({tasks.length} tasks)</span>
      </div>
      <div className='todo-list-tasks'>
        {tasks?.map(task => {
          return <TaskComponent key={task.id} task={task} />
        })}
        <ButtonInput />
      </div>
    </div>
  )
}

export default Tasks;
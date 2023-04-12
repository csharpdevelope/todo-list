import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import {routes} from '../../routes';
import { TaskContext } from '../../store/TaskContext';
import { ButtonInput, TaskComponent } from '../../components';
import "./dashboard.scss";

const Dashboard = () => {
  
  const path = useLocation();
  const {pathname} = path;
  const { theme } = useContext(TaskContext);

  const tasks = [
    {
      id: 1,
      name: 'Task 1',
      description: "This is the description for this week",
      date: Date.now(),
      favourite: false,
      completed: false,
    },
    {
      id: 2,
      name: 'Task 2',
      description: "This is the description for this week",
      date: Date.now(),
      favourite: true,
      completed: false,
    },
    {
      id: 3,
      name: 'Task 3',
      description: "This is the description for this week",
      date: Date.now(),
      favourite: false,
      completed: true,
    },
    {
      id: 4,
      name: 'Task 4',
      description: "This is the description for this week",
      date: Date.now(),
      favourite: true,
      completed: true,
    },
    {
      id: 5,
      name: 'Task 5',
      description: "This is the description for this week",
      date: Date.now(),
      favourite: false,
      completed: false,
    },
  ]
  return (
    <div className='todo-list-dashboard'>
      <div className={`todo-list-dashboard-header ${theme === 'dark' ? 'todo-list-dashboard-header-dark' : 'todo-list-dashboard-header-white'}`}>
        <span>{routes.map(route => route.url === pathname ? route.name : "")}</span>
        <span>({tasks.length} tasks)</span>
      </div>
      <div className='todo-list-tasks'>
        {tasks.map(task => {
          return <TaskComponent key={task.id} task={task} />
        })}
        <ButtonInput />
      </div>
    </div>
  )
}

export default Dashboard;
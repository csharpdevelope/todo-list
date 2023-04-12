import React from 'react';
import "./dashboard.scss";
import TaskComponent from '../../components/task/TaskComponent';

const Dashboard = () => {

  

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
    <div>

      <div className='todo-list-tasks'>
        {tasks.map(task => {
          return <TaskComponent key={task.id} task={task} />
        })}
      </div>
    </div>
  )
}

export default Dashboard;
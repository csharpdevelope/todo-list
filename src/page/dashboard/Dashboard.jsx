import React from 'react';
import moment from 'moment';
import "./dashboard.scss";

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
  ]
  return (
    <div>
      <div className='todo-list-task'>
        <h4>Task 1</h4>
        <p>This is the a week</p>
        <p>{moment(Date.now()).format("DD/MM/YYYY")}</p>
        <hr />
        <div>
          <p>completed</p>
          <div>edit</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
import React from 'react';
import { Tasks } from '../../components';
import "./dashboard.scss";
import { tasks } from '../../data/TasksData';

const Dashboard = () => {
  
  return (
    <div>
      <Tasks tasks={tasks} />
    </div>
  )
}

export default Dashboard;
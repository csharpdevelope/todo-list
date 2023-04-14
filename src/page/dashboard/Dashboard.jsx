import React, { useContext } from 'react';
import { Tasks } from '../../components';
import "./dashboard.scss";
import { TaskContext } from '../../store/TaskContext';

const Dashboard = () => {
  
  const {data} = useContext(TaskContext);

  return (
    <div>
      <Tasks tasks={data} />
    </div>
  )
}

export default Dashboard;
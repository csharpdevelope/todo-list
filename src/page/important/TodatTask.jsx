import React from 'react'
import { Tasks } from '../../components';
import { tasks } from '../../data/TasksData';

const TodatTask = () => {
  return (
    <div>
        <Tasks tasks={tasks.filter(task => task.date.getDate() === new Date().getDate())} />
    </div>
  )
}

export default TodatTask;
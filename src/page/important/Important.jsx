import React from 'react'
import { Tasks } from '../../components';
import { tasks } from '../../data/TasksData';

const Important = () => {
  return (
    <div>
      <Tasks tasks={tasks.filter(task => task.favourite)} />
    </div>
  )
}

export default Important;
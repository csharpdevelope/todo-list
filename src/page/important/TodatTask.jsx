import React, { useContext } from 'react'
import { Tasks } from '../../components';
import { TaskContext } from '../../store/TaskContext';

const TodatTask = () => {
  const { data } = useContext(TaskContext);
  return (
    <div>
        <Tasks tasks={data.filter(task => new Date(task.date).getDate() === new Date().getDate())} />
    </div>
  )
}

export default TodatTask;
import React, { useContext } from 'react'
import { Tasks } from '../../components'
import { TaskContext } from '../../store/TaskContext';

const Completed = () => {
  const {data} = useContext(TaskContext);
  return (
    <div><Tasks tasks={data.filter(task => task.completed)} /></div>
  )
}

export default Completed
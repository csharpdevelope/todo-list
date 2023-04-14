import React, { useContext } from 'react'
import { Tasks } from '../../components';
import { TaskContext } from '../../store/TaskContext';

const Important = () => {
  const {data} = useContext(TaskContext);
  return (
    <div>
      <Tasks tasks={data.filter(task => task.favourite)} />
    </div>
  )
}

export default Important;
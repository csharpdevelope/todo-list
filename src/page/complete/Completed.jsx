import React from 'react'
import { Tasks } from '../../components'
import { tasks } from '../../data/TasksData'

const Completed = () => {
  return (
    <div><Tasks tasks={tasks.filter(task => task.completed)} /></div>
  )
}

export default Completed
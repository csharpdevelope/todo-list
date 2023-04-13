import React, { useContext } from 'react';
import { DeleteFilled, StarFilled, StarOutlined } from '@ant-design/icons';
import moment from 'moment';
import { TaskContext } from '../../store/TaskContext';
import './task.scss';

const TaskComponent = ({ task }) => {

  const { theme } = useContext(TaskContext);

  return (
    <>
      <div className={`todo-list-task ${theme === "dark" ? 'todo-list-task-dark' : 'todo-list-task-white'}`}>
          <h3>{task.name}</h3>
          <p className={`todo-list-task-description`}>{task.description}</p>
          <p className='todo-list-task-date'>{moment(task.date).format("DD/MM/YYYY")}</p>
          <hr className='todo-task-list-border'/>
          <div className='todo-list-task-footer'>
              <p className={`${task.completed ? 'todo-list-completed' : 'todo-list-uncompleted'}`}>{task.completed ? "completed" : "uncompleted"}</p>
              <div className='todo-list-task-footer-action'>
                  <p>
                      {!task.favourite ? <StarOutlined onClick={() => console.log("no-favoruite")} /> : 
                                          <StarFilled onClick={() => console.log("favourite")} className='todo-list-favorite-task' /> }</p>
                  <p><DeleteFilled /></p>
              </div>
          </div>
      </div>
    </>
  )
}

export default TaskComponent
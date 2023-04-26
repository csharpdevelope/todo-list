import React, { useContext, useState } from 'react';
import { DeleteFilled, StarFilled, StarOutlined } from '@ant-design/icons';
import moment from 'moment';
import { TaskContext } from '../../store/TaskContext';
import './task.scss';
import DeleteModal from '../modal/DeleteModal';
import UpdateModal from '../modal/UpdateModal';

const TaskComponent = ({ task }) => {
  const [id, setId] = useState(null);
  const { theme, setDeletedModal, setUpdateModal } = useContext(TaskContext);

  return (
    <>
      <DeleteModal id={id} />
      <UpdateModal id={id} />
      <div className={`todo-list-task ${theme === "dark" ? 'todo-list-task-dark' : 'todo-list-task-white'}`} 
        onClick={() => {
          setId(task.id);
          setUpdateModal(true)
      ;}}>
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
                  <p onClick={() => {
                      setUpdateModal(false);
                      setId(task.id);
                      setDeletedModal(true);
                    }}>
                    <DeleteFilled />
                  </p>
              </div>
          </div>
      </div>
    </>
  )
}

export default TaskComponent
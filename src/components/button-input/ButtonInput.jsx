import React, { useContext } from 'react';
import { TaskContext } from '../../store/TaskContext';
import './button-input.scss';

const ButtonInput = () => {

  const {theme, setShowModal} = useContext(TaskContext);

  return (
    <div onClick={() => setShowModal(true)} className={`todo-list-add-button-input ${theme === 'dark' ? 'todo-list-add-button-input-dark' : ''}`}>
        <p>Add New Task</p>
    </div>
  )
}

export default ButtonInput;
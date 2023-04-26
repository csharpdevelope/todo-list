import React, { useContext, useState } from 'react';
import { TaskContext } from '../../store/TaskContext';
import CustomButton from '../button/CustomButton';
import "./modal.scss";

const UpdateModal = ({ id }) => {
    const {theme, isUpdateModal, setUpdateModal, addNewTask, getTask } = useContext(TaskContext);
    const [task, setTask] = useState(getTask(id));
    const onSubmit = (e) => {
        e.preventDefault();
        addNewTask(task);
    }

    return (
        isUpdateModal && id !== null  ? 
            <div className={'todo-list-delete-modal'}>
                <div className='todo-list-modal-container'>
                    <div className='todo-list-modal-exit'>
                        <p>Update New Task</p>
                        <CustomButton name={"X"} onClick={() => setUpdateModal(false)} />
                    </div>
                    <form className='todo-list-modal-form' onSubmit={(e) => onSubmit(e)}>
                        <input 
                            className={`todo-list-modal-input ${theme === "dark" ? "todo-list-modal-input-dark" : "todo-list-modal-input-white"}`} 
                            type='text'
                            placeholder='New task name'
                            value={task.name}
                            onChange={(e) => {
                                setTask({...task, name: e.target.value});
                            }} />
                        <textarea 
                            className={`todo-list-modal-input todo-list-modal-textarea  ${theme === "dark" ? "todo-list-modal-input-dark" : "todo-list-modal-input-white"}`} 
                            type='text' 
                            placeholder='Task description'
                            value={task.description}
                            onChange={(e) => {
                                setTask({...task, description: e.target.value});
                            }} />
                        <div className='todo-list-modal-is-favorite-2'>
                            <div>
                                <p>Favorite:</p>
                                <input 
                                    className={`todo-list-modal-check`} 
                                    type='checkbox'
                                    checked={task.favorurite}
                                    onChange={(e) => {
                                        setTask({...task, favorurite: e.target.checked})
                                    }} />
                            </div>
                            <div>
                                <p>Completed:</p>
                                <input 
                                    className={`todo-list-modal-check`} 
                                    type='checkbox'
                                    value={task.completed}
                                    onChange={(e) => {
                                        setTask({...task, favorurite: e.target.checked})
                                    }} />
                            </div>
                        </div>
                        <div className='todo-list-modal-button-2'>
                            <button type='submit' onClick={(e) => onSubmit(e)}>Update</button>
                            <button onClick={() => setUpdateModal(false)} className='cancel-button'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div> 
        : ""
    )
}

export default UpdateModal;
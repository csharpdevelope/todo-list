import React, { useContext, useState } from 'react';
import { TaskContext } from '../../store/TaskContext';
import CustomButton from '../button/CustomButton';
import "./modal.scss";

const AddModal = () => {
    const [task, setTask] = useState(
        {
            name: "",
            description: "", 
            favorurite: false, 
            completed: false
        }
    )
    const {theme, isShowModal, setShowModal, addNewTask} = useContext(TaskContext);
    const onSubmit = (e) => {
        e.preventDefault();
        addNewTask(task);
    }

    return (
        isShowModal ? 
            <div className={'todo-list-modal'}>
                <div className='todo-list-modal-container'>
                    <div className='todo-list-modal-exit'>
                        <p>Add New Task</p>
                        <CustomButton name={"X"} onClick={() => setShowModal(false)} />
                    </div>
                    <form className='todo-list-modal-form' onSubmit={(e) => onSubmit(e)}>
                        <input 
                            className={`todo-list-modal-input ${theme === "dark" ? "todo-list-modal-input-dark" : "todo-list-modal-input-white"}`} 
                            type='text'
                            placeholder='New task name'
                            onChange={(e) => {
                                setTask({...task, name: e.target.value});
                            }} />
                        <textarea 
                            className={`todo-list-modal-input todo-list-modal-textarea  ${theme === "dark" ? "todo-list-modal-input-dark" : "todo-list-modal-input-white"}`} 
                            type='text' 
                            placeholder='Task description'
                            onChange={(e) => {
                                setTask({...task, description: e.target.value});
                            }} />
                        <div className='todo-list-modal-is-favorite'>
                            <p>Favorite:</p>
                            <input 
                                className={`todo-list-modal-check`} 
                                type='checkbox'
                                onChange={(e) => {
                                    setTask({...task, favorurite: e.target.checked})
                                }} />
                        </div>
                        <div className='todo-list-modal-button'>
                            <button type='submit'>Add Task</button>
                        </div>
                    </form>
                </div>
            </div> 
        : ""
    )
}

export default AddModal;
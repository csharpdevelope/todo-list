import React, { useContext } from 'react';
import { TaskContext } from '../../store/TaskContext';
import "./modal.scss";
import CustomButton from '../button/CustomButton';

const AddModal = () => {
    const {isShowModal, setShowModal} = useContext(TaskContext);

    return (
        isShowModal ? 
            <div className='todo-list-modal'>
                <form className='todo-list-modal-form'>
                    <CustomButton name={"X"} onClick={() => setShowModal(false)} />
                </form>
            </div> 
        : ""
    )
}

export default AddModal;
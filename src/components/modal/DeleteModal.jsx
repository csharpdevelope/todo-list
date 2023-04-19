import React, { useContext } from 'react';
import './modal.scss';
import { TaskContext } from '../../store/TaskContext';

const DeleteModal = ({id}) => {

  const { isDeletedModal, setDeletedModal, deleteItemOfIds, data } = useContext(TaskContext);
  console.log(id);
  const task = data.find(t => t.id === id);

  if (isDeletedModal && id !== null)
    return (
      <div className='todo-list-delete-modal'>
        <div className="todo-list-delete-modal-content">
          <div className="todo-list-delete-modal-header">
            <h2>Delete Confirmation</h2>
          </div>
          <div className="todo-list-delete-modal-body">
            <p>Are you sure this <b>{task.name}</b>.</p>
          </div>
          <div className="todo-list-delete-modal-footer">
            <button onClick={() => deleteItemOfIds(id)}>Delete</button>
            <button onClick={() => setDeletedModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
    )
}

export default DeleteModal;
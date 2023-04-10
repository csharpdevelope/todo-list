import React, { useContext } from 'react';
import "./search.scss";
import { BellFilled, SearchOutlined } from '@ant-design/icons';
import { TaskContext } from '../../store/TaskContext';
import CustomButton from '../button/CustomButton';

const Search = () => {

  const { theme, setShowModal } = useContext(TaskContext);
  const currentDate = new Date();

  return (
    <div className='todo-list-header'>
      <div className={`todo-list-header-search-input ${theme === "dark" ? "todo-list-search-input-dark" : "todo-list-search-input-white"}`}>
        <input type='text' placeholder='Search task' className={`todo-list-search-input ${theme === "dark" ? "todo-list-search-input-dark" : "todo-list-search-input-white"}`} />
        <SearchOutlined className='todo-list-header-search-icons'  />
      </div>
      <div className='current-date'>
        <p className={theme === "dark" ? 'current-date-dark' : 'current-date-white'}>{currentDate.toString().substring(4, 15)}</p>
      </div>
      <div className='todo-list-notification'>
        <BellFilled className={`  ${theme === "dark" ? 'current-date-dark' : 'current-date-white'}`}/>
        <CustomButton name={"Add new Task"} onClick={() => setShowModal(true)} />
      </div>
    </div>
  )
}

export default Search;
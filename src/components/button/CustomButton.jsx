import React from 'react';
import './custome-button.scss';

const CustomButton = ({name, onClick}) => {
  return (
    <button onClick={onClick}>{name}</button>
  )
}

export default CustomButton;
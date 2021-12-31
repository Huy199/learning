import React from 'react';

const TableItem = ({ name, date, icon, size }) => {
  return (
    <div className='table__header-container'>
      <ul className='table__header'>
        <li className='table__title-name'>
          <img src={icon} className='pdfIcon' alt='pdf icon' />
          <span>{name} </span>
        </li>
        <li className='table__title-date'>{date}</li>
        <li className='table__title-size'>{size}</li>
      </ul>
    </div>
  );
};

export default TableItem;

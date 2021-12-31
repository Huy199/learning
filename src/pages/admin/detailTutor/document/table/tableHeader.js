import React from 'react';

const TableHeader = () => {
  return (
    <div className='table__header-container'>
      <ul className='table__header'>
        <li className='table__title-name'>Tên</li>
        <li className='table__title-date'>Ngày tạo</li>
        <li className='table__title-size'>Kích thước</li>
      </ul>
    </div>
  );
};

export default TableHeader;

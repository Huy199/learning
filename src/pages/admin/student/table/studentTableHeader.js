import React from 'react';

import './studentTable.css';

const StudentTableHeader = () => {
  return (
    <div id='adminStudentTable' className=' studentTable__header-title'>
      <ul className='wrapper'>
        <li className='name'>Tên học sinh</li>
        <li className='subject'>Môn học</li>
        <li className='time'>Tổng giờ</li>
        <li className='money'>Tổng số tiền</li>
        <li className='coin'>Tổng quy đổi</li>
        <li className='point'>Điểm đã dùng</li>
        <li className='date'>Ngày hết hạn</li>
      </ul>
    </div>
  );
};

export default StudentTableHeader;

import React from 'react';

import './tutorTable.css';

const TutorHeader = () => {
  return (
    <div id='adminTutorTable' className=' tutorTable__header-title '>
      <ul className='wrapper'>
        <li className='name'>Tên giáo viên</li>
        <li className='teaches'>Môn học</li>
        <li className='student'>Số học sinh</li>
        <li className='hours'>Số giờ đã dạy</li>
        <li className='money'>Thu nhập theo giờ</li>
        <li className='date'>Ngày tham gia</li>
      </ul>
    </div>
  );
};

export default TutorHeader;

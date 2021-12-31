import React from 'react';

import './listStudentTable.css';

const StudentTableHeader = () => {
  return (
    <div id='tutorListStudentTable'>
      <ul className='wrapper_header'>
        <li className='name'>Tên học sinh</li>
        <li className='teaches'>Môn học</li>
        <li className='lessons'>Tổng bài học</li>
        {/* <li className='money'>Giá theo giờ</li> */}
        <li className='date'>Ngày tham gia</li>
      </ul>
    </div>
  );
};

export default StudentTableHeader;

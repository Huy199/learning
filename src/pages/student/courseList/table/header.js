import React from 'react';

import './courseTable.css';

const CourseStudentHeader = () => {
  return (
    <div className='studentCourseTable courseStudentTable__header-title'>
      <ul className='wrapper'>
        <li className='name'>Tên khóa học</li>
        <li className='teaches'>Giáo viên</li>
        <li className='lessons'>Số buổi học</li>
        <li className='status'>Trạng thái</li>
        <li className='date'>Ngày đăng ký</li>
      </ul>
    </div>
  );
};

export default CourseStudentHeader;

import React from 'react';

import './courseTable.css';

const CourseHeader = () => {
  return (
    <div className='adminCourseTable courseTable__header-title'>
      <ul className='wrapper'>
        <li className='name'>Tên khóa học</li>
        <li className='teaches'>Giáo viên</li>
        <li className='total-student'>Tổng học sinh</li>
        <li className='lessons'>Tổng bài giảng</li>
        <li className='money'>Giá theo (giờ/khoá)</li>
        <li className='total'>Tổng thời lượng</li>
      </ul>
    </div>
  );
};

export default CourseHeader;

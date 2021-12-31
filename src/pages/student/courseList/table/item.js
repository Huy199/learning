import React from 'react';

import './courseTable.css';

const CourseStudentItem = (props) => {
  const { name, tutorName, lessonsNumber, status, date } = props;

  return (
    <div className='studentCourseTable z-0 relative' style={{ height: '64px' }}>
      <ul className='wrapper'>
        <li className='name'>{name}</li>
        <li className='teaches'>{tutorName}</li>
        <li className='lessons'>{lessonsNumber} </li>
        <li className='status'>{status}</li>
        <li className='date'>{date}</li>
      </ul>
    </div>
  );
};

export default CourseStudentItem;

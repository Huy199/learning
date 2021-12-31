import React from 'react';

import blockIcon from '../../../../assets/icons/blockIcon.svg';
import './courseTable.css';

const CourseItem = (props) => {
  const { name, avatar, totalStudent, tutorName, courseTotal, moneyPerHour, totalTime } = props;

  const dataNull = <img src={blockIcon} alt='no data available' className='h-9 w-9 dataNull' />;

  return (
    <div className='adminCourseTable z-0 relative' style={{ height: '64px' }}>
      {/* <Link to={`${routes.ADMIN_TUTOR}/1`}> */}
      <ul className='wrapper'>
        <li className='name'>
          <img src={avatar} alt='course img' className='img' />
          <span>{name}</span>
        </li>
        <li className='teaches'>{tutorName}</li>
        <li className='total-student'>{totalStudent}</li>
        <li className='lessons'>{courseTotal || dataNull} </li>
        <li className='money'>{moneyPerHour} </li>
        <li className='total'>{totalTime}</li>
      </ul>
      {/* </Link> */}
    </div>
  );
};

export default CourseItem;

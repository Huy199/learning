import React from 'react';
import { Link } from 'react-router-dom';

// import demoImg from '../../../../assets/images/demoImg.jpeg';
import { routes } from '../../../../utils/constants';
import './tutorTable.css';

const TutorItem = ({ id, name, avatar, courses, moneyPerHour, createdAt, totalTime, totalStudent }) => {
  return (
    <div id='adminTutorTable' className='z-0 relative' style={{ height: '64px' }}>
      <Link to={`${routes.ADMIN_TUTOR}/${id}`}>
        <ul className='wrapper'>
          <li className='name'>
            <img src={avatar} alt='tutor img' className='img' />
            <span>{name}</span>
          </li>
          <li className='teaches'>{courses}</li>
          <li className='student'>{totalStudent}</li>
          <li className='hours'>{totalTime}</li>
          <li className='money'>{moneyPerHour}</li>
          <li className='date'>{createdAt}</li>
        </ul>
      </Link>
    </div>
  );
};

export default TutorItem;

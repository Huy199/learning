import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

// import demoImg from '../../../../assets/images/demoImg.jpeg';
import { routes } from '../../../../utils/constants';
import './listStudentTable.css';

const StudentTableItem = ({ name, image, nameSubject, date, total, id }) => {
  return (
    <div id='tutorListStudentTable' className=' z-0 relative' style={{ height: '64px' }}>
      <ul className='wrapper'>
        <li className='name'>
          <img src={image} alt='student img' className='img' />
          <span>{name}</span>
        </li>
        <li className='teaches'>{nameSubject}</li>
        <li className='lessons'>{total} bài học</li>
        {/* <li className='money'>{fee} VND</li> */}
        <li className='date'>{moment(date).format('DD MMMM, YYYY')}</li>
      </ul>
    </div>
  );
};

export default StudentTableItem;

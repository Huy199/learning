import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

// import demoImg from '../../../../assets/images/demoImg.jpeg';
import { routes } from '../../../../utils/constants';
import './studentTable.css';

const StudentTableItem = (props) => {
  const { createdAt, name, avatar, subject, totalTime, totalMoney, id, totalScore, usedScore } = props;
  return (
    <div id='adminStudentTable' className=' z-0 relative' style={{ height: '64px' }}>
      <Link to={`${routes.ADMIN_STUDENT}/${id}`}>
        <ul className='wrapper'>
          <li className='name'>
            <img src={avatar} alt='student img' className='img' />
            <span>{name}</span>
          </li>
          <li className='subject'>{subject}</li>
          <li className='time'>{totalTime}</li>
          {/* <li className='money'>{fee} VND</li> */}
          <li className='money'>{totalMoney}</li>
          <li className='coin'>{totalScore}</li>
          <li className='point'>{usedScore}</li>
          <li className='date'>{moment(createdAt).format('DD/MM/YYYY')}</li>
        </ul>
      </Link>
    </div>
  );
};

export default StudentTableItem;

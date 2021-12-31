import React from 'react';
import { useDispatch } from 'react-redux';

import cancelIcon from '../../../assets/icons/cancelIcon.svg';
import demoImg from '../../../assets/images/demoImg.jpeg';
import { modalActions } from '../../../features/modal/modal';
import BookTimeAvailable from '../bookTimeAvailable';
import './bookingModal.css';

const BookingModal = () => {
  const dispatch = useDispatch();

  return (
    <div id='bookingModal'>
      <div className='contentWrapper'>
        <div className='headerWrapper'>
          <div className='tutorInfo_wrapper'>
            <img src={demoImg} alt='demo img' className='h-14 w-14' />
            <span>Tên giáo viên </span>
          </div>
          <button onClick={() => dispatch(modalActions.hideModal())}>
            <img className='h-10 w-10' src={cancelIcon} alt='icon' />
          </button>
        </div>

        <div className='timeTableWrapper'>
          <BookTimeAvailable />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

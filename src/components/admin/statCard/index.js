import React from 'react';

import timeIcon from '../../../assets/icons/timeIcon.svg';
import tutorsIcon from '../../../assets/icons/tutorsIconEnabled.svg';
import coursesIcon from '../../../assets/icons/bookIconEnabled.svg';
import studentsIcon from '../../../assets/icons/personIconEnabled.svg';

import './statCard.css';

const StatCard = () => {
  return (
    <div className='card_container__root'>
      <div className='card_container'>
        <div className='card__left'>
          <div className='card__title'>
            <span className='col-span-2'>Thời gian</span>
            <div className='card__icon'>
              <img className='' src={timeIcon} alt='Time Icon' />
            </div>
          </div>
          <div className='card__number'>
            <h4>1h30</h4>
          </div>
        </div>
      </div>

      <div className='card_container'>
        <div className='card__left'>
          <div className='card__title'>
            <span className='col-span-2'>Giáo viên</span>
            <div className='card__icon'>
              <img className='' src={tutorsIcon} alt='Time Icon' />
            </div>
          </div>
          <div className='card__number'>
            <h4>100</h4>
          </div>
        </div>
      </div>

      <div className='card_container'>
        <div className='card__left'>
          <div className='card__title'>
            <span className='col-span-2'>Học sinh</span>
            <div className='card__icon'>
              <img className='' src={studentsIcon} alt='Time Icon' />
            </div>
          </div>
          <div className='card__number'>
            <h4>500</h4>
          </div>
        </div>
      </div>

      <div className='card_container'>
        <div className='card__left'>
          <div className='card__title'>
            <span className='col-span-2'>Khoá học</span>
            <div className='card__icon'>
              <img className='' src={coursesIcon} alt='Time Icon' />
            </div>
          </div>
          <div className='card__number'>
            <h4>5</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;

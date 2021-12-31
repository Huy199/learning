import React from 'react';

import './coursesCard.css';

const CoursesCard = ({ name, onCourseCardClick, image, course }) => {
  return (
    <div className='coursesCard__container' onClick={onCourseCardClick}>
      <div className='coursesCard__info'>
        <div className='coursesCard__avatar'>
          <div className='coursesCard__avatar-container'>
            <img src={image} alt='Avatar of teacher' />
          </div>
        </div>
        <p className='coursesCard__name-teacher'>{name}</p>
        <p className='coursesCard_name-course'>{course}</p>
      </div>
    </div>
  );
};

export default CoursesCard;

import React from 'react';

import CourseItem from '../../../components/student/courseItem';
import FilterTutor from '../../../components/student/filterTutor';
import LessonItem from '../../../components/student/lessonItem';
import './flexibleLesson.css';

const FlexibleLesson = () => {
  return (
    <div id='flexibleLesson'>
      <div className='banner'>
        <div className='bannerHeader'>
          <div className='titleWrapper'>
            <h1 className='mainTitle'>Lớp linh hoạt</h1>
          </div>
        </div>
      </div>
      <div className='filterLesson'>
        <FilterTutor
          languageFilterTitle='TÔI MUỐN HỌC'
          priceFilterTitle='GIÁ THEO GIỜ'
          timeFilterTitle='KHUNG THỜI GIAN'
        />
      </div>
      <div className='bodyContainer'>
        <div className='listColumn_left'>
          <LessonItem />
          <LessonItem />
        </div>
        <div className='listColumn_right'>
          <LessonItem />
          <LessonItem />
        </div>
      </div>
    </div>
  );
};

export default FlexibleLesson;

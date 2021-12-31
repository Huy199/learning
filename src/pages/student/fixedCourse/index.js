import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CourseItem from '../../../components/student/courseItem';
import FilterTutor from '../../../components/student/filterTutor';
import { fixedCourseActions } from '../../../features/fixedCourse/fixedCourseSlice';
import './fixedCourse.css';

const FixedCourse = () => {
  const dispatch = useDispatch();
  // const fixedCourse = useSelector(selectFixedCourseList);

  useEffect(() => {
    dispatch(fixedCourseActions.fetchFixedCourse());
  }, [dispatch]);

  return (
    <div id='fixedCourse'>
      <div className='banner'>
        <div className='bannerHeader'>
          <div className='titleWrapper'>
            <h1 className='mainTitle'>Khoá học cố định</h1>
          </div>
        </div>
      </div>
      <div className='filterCourses'>
        <FilterTutor languageFilterTitle='TÔI MUỐN HỌC' priceFilterTitle='GIÁ' timeFilterTitle='KHUNG THỜI GIAN' />
      </div>
      <div className='bodyContainer'>
        <div className='listColumn_left'>
          <div className='itemWrapper'>
            <CourseItem />
            <CourseItem />
            {/* {fixedCourse.map((fixedCourse, idx) => (
              <CourseItem key={idx} {...fixedCourse} />
            ))} */}
          </div>
        </div>
        <div className='listColumn_right'>
          <div className='itemWrapper'>
            <CourseItem />
            <CourseItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedCourse;

import React from 'react';

import Search from '../../../components/admin/search';
import CourseStudentFilter from './filter';
import CourseStudentHeader from './table/header';
import CourseStudentItem from './table/item';
import { courseList } from './fakeCourse';

import './courseList.css';

const CourseStudentList = () => {
  return (
    <div id='studentCourse'>
      <div className='body'>
        <div className='wrapContent'>
          <div className='filter-search'>
            <Search isStudent />
            <CourseStudentFilter />
          </div>

          <div className='content_table'>
            <div className='header_course'>
              <CourseStudentHeader />
            </div>
            <div className='item_course'>
              {courseList.map((item, index) => (
                <CourseStudentItem {...item} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className='pagination'>{/* <Pagination /> */}</div>
      </div>
    </div>
  );
};

export default CourseStudentList;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../../../components/admin/filter';
import Search from '../../../components/admin/search';
import Pagination from '../../../components/common/pagination';
import { courseActions, selectFilterCourse, selectListCourse } from '../../../features/courses/coursesSlice';
import { courseFilter } from '../../../utils/enum';
import './adminCourse.css';
import CourseHeader from './table/courseHeader';
import CourseItem from './table/courseItem';
import createIcon from '../../../assets/icons/createIcon.svg';
import { modalActions } from '../../../features/modal/modal';
import { FormComponentName, ModalComponentName } from '../../../utils/enum';
import { formCreateAction } from '../../../features/form/from';

const AdminCourse = () => {
  const dispatch = useDispatch();
  const courseList = useSelector(selectListCourse);
  const filterCourse = useSelector(selectFilterCourse);
  const [selected, setSelected] = useState('DEFAULT');

  useEffect(() => {
    dispatch(courseActions.fetchListCourse(filterCourse));
    if (courseFilter[selected] === courseFilter.DEFAULT) {
      dispatch(courseActions.fetchFilterBy({ ...filterCourse, _sortBy: 'default' }));
    }
    if (courseFilter[selected] === courseFilter.A_Z_NAME) {
      dispatch(courseActions.fetchFilterBy({ ...filterCourse, _sortBy: 'nameA_Z' }));
    }
    if (courseFilter[selected] === courseFilter.DATE_CREATED) {
      dispatch(courseActions.fetchFilterBy({ ...filterCourse, _sortBy: 'createdAt' }));
    }
  }, [dispatch, filterCourse, selected]);

  // handle pagination
  const handlePageChange = (newFilter) => {
    dispatch(courseActions.setFilterCourse(newFilter));
  };

  const startIndex = (filterCourse._page - 1) * filterCourse._limit;
  const endIndex = filterCourse._page * filterCourse._limit;
  const newCourseList = courseList.slice(startIndex, endIndex);

  const openCreateFormModal = () => {
    dispatch(modalActions.changeModalContent(ModalComponentName.ADD_FORM_COURSE));
    dispatch(modalActions.showModal());
    dispatch(formCreateAction.changeComponent(FormComponentName.FORM_FIRST_STEP));
  };
  return (
    <div id='adminCourse' className='adminCourse__container'>
      <div className='body'>
        <div className='wrapContent'>
          <div className='content_header'>
            <h4 className='number_course'>Tổng số khóa học: {courseList.length}</h4>
          </div>

          <div className='filter-search'>
            <Search filter={filterCourse} />
            <Filter create selected={selected} setSelected={setSelected} filter={courseFilter} />
            <div className='createBtn_course'>
              <button className='btn_course' onClick={openCreateFormModal}>
                <img src={createIcon} alt='btn Icon' />
              </button>
            </div>
          </div>

          <div className='content_table'>
            <div className='header_course'>
              <CourseHeader />
            </div>
            <div className='item_course'>
              {newCourseList.map((courseList, index) => (
                <CourseItem {...courseList} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className='pagination'>
          <Pagination total={courseList.length} filter={filterCourse} handlePageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default AdminCourse;

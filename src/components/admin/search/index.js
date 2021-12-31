import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { courseActions } from '../../../features/courses/coursesSlice';
import { promotionsActions } from '../../../features/promotions/promotionsSlice';
import { studentsActions } from '../../../features/students/studentsSlice';
import { tutorActions } from '../../../features/tutors/tutorsSlice';
import { routes } from '../../../utils/constants';
import './search.css';

const Search = (props) => {
  const [searchKey, setSearchKey] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const { filterTutor, filterPromotion } = props;
  const onValueChange = (e) => {
    setSearchKey(e.target.value);
    if (e.target.value === '') {
      dispatch(
        courseActions.fetchSearchCourse({
          ...props.filterCourse,
          _page: 1,
          _key: e.target.value,
        })
      );

      dispatch(
        studentsActions.fetchSearchStudent({
          ...props.filterStudent,
          _page: 1,
          _key: e.target.value,
        })
      );
      filterTutor && dispatch(tutorActions.setSearchTutor(e.target.value));
      filterPromotion && dispatch(promotionsActions.setSearchPromotion(e.target.value));
    }
  };

  const onSearch = (e) => {
    //course
    if (location.pathname === routes.ADMIN_COURSE) {
      const newFilter = {
        ...props.filterCourse,
        _page: 1,
        _key: searchKey.trim(),
      };
      dispatch(courseActions.fetchSearchCourse(newFilter));
    }

    // tutor
    if (filterTutor) dispatch(tutorActions.setSearchTutor(searchKey.trim()));

    //student
    if (location.pathname === routes.ADMIN_STUDENT) {
      const newFilter = {
        ...props.filterStudent,
        _page: 1,
        _key: searchKey.trim(),
      };
      dispatch(studentsActions.fetchSearchStudent(newFilter));
    }

    //promotion
    if (filterPromotion) dispatch(promotionsActions.setSearchPromotion(searchKey.trim()));
  };

  return (
    <div className='search__wrapper'>
      <input
        className='search__input'
        type='text'
        name='search'
        placeholder='Tìm kiếm theo tên'
        autoComplete='off'
        onChange={onValueChange}
        value={searchKey}
        onKeyUp={(e) => {
          if (e.code === 'Enter') {
            onSearch();
          }
        }}
      />
      <button className='search__icon' onClick={onSearch}>
        {props.isStudent ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 48 48'
            width={25}
            height={25}
          >
            <g fill='#3bb3bd'>
              <path
                d='M20.5 6C12.492 6 6 12.492 6 20.5S12.492 35 20.5 35a14.44 14.44 0 0 0 9.138-3.241l9.801 9.801a1.5 1.5 0 1 0 2.121-2.121l-9.8-9.801A14.44 14.44 0 0 0 35 20.5C35 12.492 28.508 6 20.5 6zM9 20.5C9 14.149 14.149 9 20.5 9S32 14.149 32 20.5S26.851 32 20.5 32S9 26.851 9 20.5z'
                fill='#3bb3bd'
              ></path>
            </g>
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 48 48'
            width={25}
            height={25}
          >
            <g fill='none'>
              <path
                d='M20.5 6C12.492 6 6 12.492 6 20.5S12.492 35 20.5 35a14.44 14.44 0 0 0 9.138-3.241l9.801 9.801a1.5 1.5 0 1 0 2.121-2.121l-9.8-9.801A14.44 14.44 0 0 0 35 20.5C35 12.492 28.508 6 20.5 6zM9 20.5C9 14.149 14.149 9 20.5 9S32 14.149 32 20.5S26.851 32 20.5 32S9 26.851 9 20.5z'
                fill='currentColor'
              ></path>
            </g>
          </svg>
        )}
      </button>
    </div>
  );
};
export default Search;

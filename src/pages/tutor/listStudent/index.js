import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../../components/admin/filter';
import Search from '../../../components/admin/search';
// import Pagination from '../../../components/common/pagination';
import { selectorStudentList, studentsActions } from '../../../features/students/studentsSlice';
// import createIcon from '../../../assets/icons/createIcon.svg';
import './tutorListStudent.css';
// import data from './fakeStudent.json';
import ListStudentTableHeader from './table/listStudentTableHeader';
import ListStudentTableItem from './table/listStudentTableItem';

const TutorListStudent = () => {
  const dispatch = useDispatch();
  const studentList = useSelector(selectorStudentList);

  useEffect(() => {
    dispatch(studentsActions.fetchStudentList());
  }, [dispatch]);
  return (
    <div id='tutorListStudent'>
      <div className='body'>
        <div className='wrapContent'>
          <div className='content_header'>
            <h4 className='number_student'>Tổng số học sinh: 5</h4>
            {/* <div className='contentHeader__createBtn-student'>
              <button className='contentHeader__btn-student'>
              <img src={createIcon} alt='btn Icon' />
              </button>
            </div> */}
          </div>
          <div className='filter-search'>
            <Search />
            {/* <Filter create /> */}
          </div>

          <div className='content_table'>
            <div className='header_student'>
              <ListStudentTableHeader />
            </div>
            <div className='item_student'>
              {studentList.map((item, index) => (
                <ListStudentTableItem
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.avatar}
                  nameSubject={item.subject}
                  fee={item.fee}
                  date={item.createdAt}
                  total={item.totalLessons}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='pagination'>{/* <Pagination /> */}</div>
      </div>
    </div>
  );
};

export default TutorListStudent;

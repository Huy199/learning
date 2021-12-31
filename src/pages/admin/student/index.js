import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Search from '../../../components/admin/search';
import Filter from '../../../components/admin/filter';
import Pagination from '../../../components/common/pagination';
import { selectFilterStudent, selectorStudentList, studentsActions } from '../../../features/students/studentsSlice';
import { studentFilter } from '../../../utils/enum';
import './adminStudent.css';
import StudentTableHeader from './table/studentTableHeader';
import StudentTableItem from './table/studentTableItem';

const AdminStudent = () => {
  const dispatch = useDispatch();
  const studentList = useSelector(selectorStudentList);
  const filterStudent = useSelector(selectFilterStudent);
  const [selected, setSelected] = useState('DEFAULT');

  useEffect(() => {
    dispatch(studentsActions.fetchStudentList(filterStudent));
    if (studentFilter[selected] === studentFilter.DEFAULT) {
      dispatch(studentsActions.fetchFilterBy({ ...filterStudent, _sortBy: 'default' }));
    }
    if (studentFilter[selected] === studentFilter.A_Z_NAME) {
      dispatch(studentsActions.fetchFilterBy({ ...filterStudent, _sortBy: 'nameA_Z' }));
    }
    if (studentFilter[selected] === studentFilter.DATE_CREATED) {
      dispatch(studentsActions.fetchFilterBy({ ...filterStudent, _sortBy: 'createdAt' }));
    }
  }, [dispatch, filterStudent, selected]);

  // handle pagination
  const handlePageChange = (newFilter) => {
    dispatch(studentsActions.setFilterStudent(newFilter));
  };

  const startIndex = (filterStudent._page - 1) * filterStudent._limit;
  const endIndex = filterStudent._page * filterStudent._limit;
  const newCourseList = studentList.slice(startIndex, endIndex);

  return (
    <div id='adminStudent' className='adminStudent__container'>
      <div className='body'>
        <div className='wrapContent'>
          <div className='content_header'>
            <h4 className='number_student'>Tổng số học sinh: {studentList.length}</h4>
          </div>
          <div className='filter-search'>
            <Search filter={filterStudent} />
            <Filter create selected={selected} setSelected={setSelected} filter={studentFilter} />
          </div>
          <div className='content_table'>
            <div className='header_student'>
              <StudentTableHeader />
            </div>
            <div className='item_student'>
              {newCourseList.map((student, index) => (
                <StudentTableItem key={index} {...student} />
              ))}
            </div>
          </div>
        </div>
        <div className='pagination'>
          <Pagination total={studentList.length} filter={filterStudent} handlePageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default AdminStudent;

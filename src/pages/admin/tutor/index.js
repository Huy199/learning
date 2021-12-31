import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import './adminTutor.css';
import TutorHeader from './table/tutorHeader';
import TutorItem from './table/tutorItem';
import createIcon from '../../../assets/icons/createIcon.svg';
import { modalActions } from '../../../features/modal/modal';
import { FormComponentName, ModalComponentName, tutorFilter } from '../../../utils/enum';
import { formCreateAction } from '../../../features/form/from';
import Filter from '../../../components/admin/filter';
import Search from '../../../components/admin/search';
import {
  selectListRemaining,
  // selectListTutors,
  selectTutorFilter,
  tutorActions,
} from '../../../features/tutors/tutorsSlice';
import Pagination from '../../../components/common/pagination';
import { useHistory } from 'react-router-dom';

const AdminTutor = () => {
  const dispatch = useDispatch();
  // const tutorsList = useSelector(selectListTutors);
  const tutorsListRemaining = useSelector(selectListRemaining);
  const filterTutor = useSelector(selectTutorFilter);
  const [selected, setSelected] = useState('DEFAULT');
  const history = useHistory();
  const openCreateFormModal = () => {
    // dispatch(modalActions.changeModalContent(ModalComponentName.ADD_FORM));
    // dispatch(modalActions.showModal());
    history.push('/admin/tutors/add-tutor');
    dispatch(formCreateAction.changeComponent(FormComponentName.FORM_FIRST_STEP));
  };

  //get tutor list
  useEffect(() => {
    dispatch(tutorActions.fetchTutorList());
  }, [dispatch]);

  //filter tutors
  useEffect(() => {
    dispatch(tutorActions.fetchTutorList(filterTutor));
    if (tutorFilter[selected] === tutorFilter.DEFAULT) {
      dispatch(tutorActions.fetchFilterBy({ ...filterTutor, _sortBy: 'default' }));
    }
    if (tutorFilter[selected] === tutorFilter.A_Z_NAME) {
      dispatch(tutorActions.fetchFilterBy({ ...filterTutor, _sortBy: 'nameA_Z' }));
    }
    if (tutorFilter[selected] === tutorFilter.DATE_CREATED) {
      dispatch(tutorActions.fetchFilterBy({ ...filterTutor, _sortBy: 'createdAt' }));
    }
  }, [dispatch, filterTutor, selected]);

  //pagination
  const handlePageTutorChange = (newFilter) => {
    dispatch(tutorActions.setFilterTutor(newFilter));
  };

  const startIndex = (filterTutor._page - 1) * filterTutor._limit;
  const endIndex = filterTutor._page * filterTutor._limit;
  const newTutorList = tutorsListRemaining.slice(startIndex, endIndex);

  return (
    <div id='adminTutor' className='adminTutor__container'>
      <div className='body'>
        <div className='wrapContent'>
          <div className='content_header'>
            <h4 className='number_tutor'>Tổng số giáo viên: {tutorsListRemaining.length}</h4>
          </div>
          <div className='filter-search'>
            <Search filterTutor />
            <Filter selected={selected} setSelected={setSelected} filter={tutorFilter} />
            <div className='createBtn_tutor'>
              <button className='btn_tutor' onClick={openCreateFormModal}>
                <img src={createIcon} alt='btn Icon' />
              </button>
            </div>
          </div>

          <div className='content_table'>
            <div className='header_tutor'>
              <TutorHeader />
            </div>
            <div className='item_tutor'>
              {newTutorList.map((item, index) => (
                <TutorItem
                  key={index}
                  id={item.id}
                  name={item.name}
                  avatar={item.avatar}
                  courses={item.courses}
                  moneyPerHour={item.moneyPerHour}
                  createdAt={moment(item.createdAt).format('DD/MM/YYYY')}
                  totalTime={item.totalTime}
                  totalStudent={item.totalStudent}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='adminTutor__pagination'>
          <Pagination
            total={tutorsListRemaining.length}
            filter={filterTutor}
            handlePageChange={handlePageTutorChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminTutor;

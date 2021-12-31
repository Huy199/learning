import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { formCreateAction } from '../../../../features/form/from';
import { modalActions } from '../../../../features/modal/modal';
import FormCreateCourse from '../formCreateCourse';
import { useOutside } from '../../../../utils/help';
import '../adminCreateCourse.css';

const CreateForm = () => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const [animationClose, setAnimationClose] = useState('');
  const handleClickCancel = (e) => {
    dispatch(formCreateAction.resetFormData());
    setAnimationClose('adminCreateCourse__container-animation');
    setTimeout(() => {
      dispatch(modalActions.hideModal());
    }, 200);
  };
  useOutside(modalRef, handleClickCancel);

  const handleSubmit = () => {
    dispatch(modalActions.hideModal());
  };

  return (
    <div
      ref={modalRef}
      className={`adminCreateCourse__container ${animationClose}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className='adminCreateCourse__header'>
        <h3 className='adminCreateCourse__title'>Tạo khóa học </h3>
      </div>
      <div className='adminCreateCourse__body'>
        <FormCreateCourse handleOnSubmit={handleSubmit} handleClickCancel={handleClickCancel} />
      </div>
    </div>
  );
};

export default CreateForm;

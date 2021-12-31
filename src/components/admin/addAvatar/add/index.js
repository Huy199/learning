import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formCreateAction } from '../../../../features/form/from';
import { modalActions } from '../../../../features/modal/modal';
import FormAdd from '../formAdd';
import { useOutside } from '../../../../utils/help';
import '../addAvatar.css';

const AddAvatar = ({ student }) => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const handleClickCancel = () => {
    dispatch(formCreateAction.resetFormData());
    dispatch(modalActions.hideModal());
  };
  useOutside(modalRef, handleClickCancel);

  return (
    <div ref={modalRef} className='addAvatar__container'>
      <div className='addAvatar__header'>
        <h3 className='addAvatar__title'>Thêm ảnh đại diện</h3>
      </div>
      <div className='addAvatar__main'>
        <FormAdd student={student} handleClickCancel={handleClickCancel} />
      </div>
    </div>
  );
};

export default AddAvatar;

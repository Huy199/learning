import React from 'react';

// import NotificationSetting from './adminNotifySetting';
import './adminSetting.css';
import createIcon from '../../../../assets/icons/createIconBlue.svg';
import { modalActions } from '../../../../features/modal/modal';
import { ModalComponentName } from '../../../../utils/enum';
import { useDispatch } from 'react-redux';

const AdminSettingInfo = () => {
  const dispatch = useDispatch();

  const handleAddForm = () => {
    dispatch(modalActions.changeModalContent(ModalComponentName.ADD_AVATAR));
    dispatch(modalActions.showModal());
  };
  return (
    <div className='adminSetting__info'>
      <div className='adminSetting__row-select-picture'>
        <div className='adminSetting__select-picture'>
          <div className='adminSetting__name-picture'>Ảnh đại diện</div>
          <div className='adminSetting__edit-picture'>
            <img
              alt=''
              className='adminSetting__picture'
              src='https://thelifetank.com/wp-content/uploads/2018/08/avatar-default-icon.png'
            />
            <button className='adminSetting__btn-add' onClick={handleAddForm}>
              <img src={createIcon} alt='btn Icon' />
            </button>
          </div>
        </div>
      </div>
      <hr className='adminSetting__hr' />
      <div className='adminSetting__edit-info'>
        <div className='adminSetting__info'>
          <div className='adminSetting__name'>
            <div className='adminSetting__input-name'>
              <div className='adminSetting__label'>Tên</div>
              <input className='adminSetting__input' type='text' />
            </div>
            <div className='adminSetting__input-name ml-32'>
              <div className='adminSetting__label'>Họ</div>
              <input className='adminSetting__input' type='text' />
            </div>
          </div>

          <div className='adminSetting__name mt-16'>
            <div className='adminSetting__input-name'>
              <div className='adminSetting__label'>Email</div>
              <input className='adminSetting__input' type='text' />
            </div>
          </div>

          <div className='adminSetting__name mt-16'>
            <div className='adminSetting__input-name'>
              <div className='adminSetting__label'>Phone</div>
              <input className='adminSetting__input' type='number' />
            </div>
          </div>
        </div>
      </div>
      <hr className='adminSetting__hr' />
      <div className='adminSetting__update'>
        <button className='adminSetting__undate-btn'>Lưu</button>
      </div>
    </div>
  );
};

export default AdminSettingInfo;

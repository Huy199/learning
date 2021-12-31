import React from 'react';

import checkIcon from '../../../../assets/icons/checkIcon.svg';
import './adminNotifySetting.css';

const NotificationSetting = () => {
  return (
    <div className='adminNotify__setting'>
      <div className='adminNotify__setting-fieldSet'>
        {/* item */}
        <div className='adminNotify__setting-item'>
          <label className='adminNotify__seting-checkbox'>
            <input type='checkbox' className='admin__checkbox-input' />
            <img src={checkIcon} alt='check icon' className='admin__check-img' />
          </label>
          <label className='adminNotify__seting-title'>Thông báo qua ứng dụng di động</label>
        </div>
      </div>
      <div className='adminNotify__setting-line'></div>
      <div className='adminNotify__setting-update'>
        <button className='adminNotify__setting-btn'>
          <span>Lưu</span>
        </button>
      </div>
    </div>
  );
};

export default NotificationSetting;

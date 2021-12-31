import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ringIcon from '../../../assets/icons/ringIcon.svg';
import settingIcon from '../../../assets/icons/settingGrayIcon.svg';
import cancelIcon from '../../../assets/icons/cancelIcon.svg';
import NotificationItem from './notificationItem/index';
import './notifications.css';
import { modalActions } from '../../../features/modal/modal';
import { useOutside } from '../../../utils/help';
import { fakeNotifications } from '../../../utils/constants';

const NotificationStudent = () => {
  const dispatch = useDispatch();
  const [animationClose, setAnimationClose] = useState('');
  const notifyRef = useRef(null);
  const closeNotifyMenu = () => {
    setAnimationClose('notifyMenu__container-animation');
    setTimeout(() => {
      dispatch(modalActions.hideModal());
    }, 200);
  };
  const history = useHistory();
  useOutside(notifyRef, closeNotifyMenu);
  const openSetting = () => {
    closeNotifyMenu();
    setTimeout(() => {
      history.push('/student_profile/settings/notification');
    });
  };

  const date = new Date();
  return (
    <div id='notificationStudent'>
      <div ref={notifyRef} className={`container ${animationClose}`} onClick={(e) => e.stopPropagation()}>
        <div className='header'>
          <div className='title'>
            <img className='ring__icon' src={ringIcon} alt='icon' />
            <p>Thông báo</p>
          </div>
          <div className='btn-cancel' onClick={closeNotifyMenu}>
            <button>
              <img className='h-10 w-10' src={cancelIcon} alt='icon' />
            </button>
          </div>
        </div>
        <div className='wrapper'>
          <p>
            Ngày {date.getDate()} tháng {date.getMonth() + 1}
          </p>

          {fakeNotifications.length === 0 ? (
            <div className='wrapper-empty'>
              <p>Bạn không có thông báo</p>
            </div>
          ) : (
            fakeNotifications.map((item) => <NotificationItem key={item.id} item={item} />)
          )}
        </div>
        <button className='setting' onClick={openSetting}>
          <img className='setting__icon' src={settingIcon} alt='setting-icon' />
          <span>Cài đặt thông báo</span>
        </button>
      </div>
    </div>
  );
};

export default NotificationStudent;

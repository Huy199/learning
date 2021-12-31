import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ringIcon from '../../../assets/icons/ringIcon.svg';
import settingIcon from '../../../assets/icons/settingGrayIcon.svg';
import cancelIcon from '../../../assets/icons/cancelIcon.svg';
import NotificationItem from './notificationItem/index';
import './notificationMenu.css';
import { modalActions } from '../../../features/modal/modal';
import { useOutside } from '../../../utils/help';
import { fakeNotifications } from '../../../utils/constants';

const NotificationMenu = () => {
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
      history.push('/admin/setting/notify');
    });
  };

  const date = new Date();
  return (
    <div id='notificationsAdmin'>
      <div ref={notifyRef} className={`notify__container ${animationClose}`} onClick={(e) => e.stopPropagation()}>
        <div className='notify__header'>
          <div className='notify__title'>
            <img className='notify__ring__icon' src={ringIcon} alt='icon' />
            <p>Thông báo</p>
          </div>
          <div className='notify__btn-cancel' onClick={closeNotifyMenu}>
            <button>
              <img className='h-10 w-10' src={cancelIcon} alt='icon' />
            </button>
          </div>
        </div>
        <div className='notify__wrapper'>
          <p>
            Ngày {date.getDate()} tháng {date.getMonth() + 1}
          </p>

          {fakeNotifications.length === 0 ? (
            <div className='notify__wrapper-empty'>
              <p>Bạn không có thông báo</p>
            </div>
          ) : (
            fakeNotifications.map((item) => <NotificationItem key={item.id} item={item} />)
          )}
        </div>
        <button className='notify__setting' onClick={openSetting}>
          <img className='notify__setting__icon' src={settingIcon} alt='setting-icon' />
          <span>Cài đặt thông báo</span>
        </button>
      </div>
    </div>
  );
};

export default NotificationMenu;

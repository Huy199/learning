import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { authActions } from '../../../features/auth/authSlice';
import { useOutside } from '../../../utils/help';
import logoutIcon from '../../../assets/icons/logOut.svg';
import settingIcon from '../../../assets/icons/settingGrayIcon.svg';
import './dropdownInfo.css';

const DropdownInfo = () => {
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(false);

  const history = useHistory();
  const wrapperRef = useRef(null);
  useOutside(wrapperRef, setOpenDropdown);

  return (
    <div className='dropdownInfo__header' ref={wrapperRef}>
      <div className='dropdownInfo__wrap-btn' onClick={() => setOpenDropdown(!openDropdown)}>
        <button type='button' className='dropdownInfo__info__status'>
          <p>{'Huy'.charAt(0) || ''}</p>
        </button>
      </div>
      {openDropdown && (
        <div className='dropdownInfo__info__content'>
          <div className='dropdownInfo__info__header'>
            Xin Chào,
            <span className='dropdownInfo__info__adminName'>Hoang Quang Huy</span>
          </div>
          <div className='dropdownInfo__info__body'>
            <button onClick={() => history.push('/admin/setting/info')} className='dropdownInfo__info__detail'>
              <img className='dropdownInfo__info__home__icon ' src={settingIcon} alt='setting' /> Cài đặt
            </button>
            <button className='dropdownInfo__info__detail' onClick={() => dispatch(authActions.logout())}>
              <img className='dropdownInfo__info__home__icon ' src={logoutIcon} alt='logout' /> Đăng xuất
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownInfo;

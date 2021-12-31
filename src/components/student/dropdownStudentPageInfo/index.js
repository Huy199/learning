import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authActions } from '../../../features/auth/authSlice';
import { useOutside } from '../../../utils/help';
import './dropdownStudentPageInfo.css';

const DropdownStudentPageInfo = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  useOutside(wrapperRef, setOpenDropdown);

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className='dropdownStudentPage__header' ref={wrapperRef}>
      <div className='dropdownStudentPage__wrap-btn' onClick={() => setOpenDropdown(!openDropdown)}>
        <button type='button' className='dropdownStudentPage__info__status'>
          <p>{'Huy'.charAt(0) || 'V'}</p>
        </button>
      </div>
      {openDropdown && (
        <div className='dropdownStudentPage__info__content'>
          <div className='dropdownStudentPage__info__body'>
            <div className='dropdownStudentPage__info__detail'>Bài học của tôi</div>
            <div className='dropdownStudentPage__info__detail'>Giáo viên của tôi</div>
            <div className='dropdownStudentPage__info__detail'>Mời bạn tham gia</div>
            <div
              onClick={() => history.push('/student_profile/settings/account')}
              className='dropdownStudentPage__info__detail'
            >
              Cài đặt
            </div>
            <div className='dropdownStudentPage__info__detail'>Trợ giúp</div>
          </div>
          <div className='dropdownStudentPage__info__logout' onClick={handleLogout}>
            <button>Đăng xuất</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownStudentPageInfo;

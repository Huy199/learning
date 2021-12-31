import React from 'react';

import trashIcon from '../../../../assets/icons/trashIconWhite.svg';
import checkIcon from '../../../../assets/icons/checkIcon.svg';
import './security.css';

const Security = () => {
  return (
    <div id='adminSecurity'>
      <div className='password-wrapper'>
        <div className='password-container'>
          <label>Mật khẩu hiện tại</label>
          <div className='password-input'>
            <input type='password' placeholder='1q2e3e4e5r' />
          </div>
        </div>

        <div className='new-password-container'>
          <div className='password-container'>
            <label>Mật khẩu mới</label>
            <div className='password-input'>
              <input type='password' placeholder='1q2e3e4e5r' />
            </div>
          </div>

          <div className='password-container' style={{ padding: '0px 0px 0px 25px' }}>
            <label>Nhập lại mật khẩu mới</label>
            <div className='password-input'>
              <input type='password' placeholder='1q2e3e4e5r' />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='line'></div>
      <div className='danger-zone'>
        <h4>Vùng nguy hiểm</h4>
        <p>
          Nếu bạn xóa tài khoản của mình, tất cả dữ liệu hồ sơ sẽ bị xóa vĩnh viễn. Hãy thận trọng và cân nhắc liên hệ
          với chúng tôi để tìm hiểu thêm.
        </p>
        <button className='delete-account'>
          <img src={trashIcon} alt='trash icon' />
          <span> Delete account</span>
        </button>
      </div> */}
      <div className='line'></div>
      <div className='setting-update'>
        <button className='setting-btn'>
          {/* <img src={checkIcon} alt='check icon' className='check-icon' /> */}
          <span>Lưu</span>
        </button>
      </div>
    </div>
  );
};

export default Security;

import React from 'react';

import dowloadIcon from '../../../assets/icons/dowloadIcon.svg';
import replaceIcon from '../../../assets/icons/replaceIcon.svg';
import suggestIcon from '../../../assets/icons/suggestIcon.svg';
import emailIcon from '../../../assets/icons/emailIcon.svg';

import './tutorInfo.css';

const TutorInfo = () => {
  return (
    <div id='tutorInfo'>
      <div className='header'>Thông tin giáo viên</div>
      <div className='row-select-picture'>
        <div className='select-picture'>
          <div className='name-picture'>Ảnh đại diện</div>
          <div className='edit-picture'>
            <img
              alt=''
              className='picture'
              src='https://t.vietgiaitri.com/2021/7/8/vua-noi-tieng-co-giao-minh-thu-hot-nhat-dem-qua-da-mac-phai-1-sai-lam-nho-nho-nhung-dan-tinh-van-ban-tim-vi-chinh-chu-qua-xinh-eec-5907236.jpeg'
            />
            <div className='desc-picture'>
              <div className='name-desc'>
                Ảnh trực diện rõ ràng giúp cá nhân hóa giao tiếp và cho thấy bạn là người đáng tin cậy, chân thực và cam
                kết với cộng đồng
              </div>
              <div className='btn-desc'>
                <div className='btn-select'>
                  <img style={{ width: '30px', marginBottom: '5px' }} src={replaceIcon} alt='replaceIcon' />
                  <span className='name-btn-select'>Chọn ảnh</span>
                </div>

                <div className='btn-download'>
                  <img className='icon-download-btn' src={dowloadIcon} alt='dowloadIcon' />
                  <span className='name-btn-select'>Tải ảnh lên</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='suggest'>
          <img className='icon-suggest' src={suggestIcon} alt='suggestIcon' />
          <span className='text-suggest'>Chọn để thay đổi thông tin.</span>
        </div>
      </div>
      <hr className='hr' />
      <div className='edit-info'>
        <div className='info'>
          <div className='name'>
            <div className='input-name'>
              <div className='label'>Tên</div>
              <input className='input' type='text' />
            </div>
            <div className='input-name ml-32'>
              <div className='label'>Họ</div>
              <input className='input' type='text' />
            </div>
          </div>

          <div className='name mt-16'>
            <div className='input-name'>
              <div className='label'>Email</div>
              <input className='input' type='text' />
            </div>
            <div className='verify ml-20'>
              <img className='icon-verify' src={emailIcon} alt='emailIcon' />
              <span className='text-verify'>Verify Email</span>
            </div>
          </div>
        </div>
        <div className='suggest'>
          <img className='icon-suggest' src={suggestIcon} alt='suggestIcon' />
          <span className='text-suggest'>Chọn để thay đổi thông tin.</span>
        </div>
      </div>
      <hr className='hr' />
      <div className='edit-phone'>
        <div className='phone'>
          <div className='name'>
            <div className='input-name'>
              <div className='label'>Số điện thoại</div>
              <input className='input' type='number' />
            </div>
          </div>
        </div>
        <div className='suggest'>
          <img className='icon-suggest' src={suggestIcon} alt='suggestIcon' />
          <span className='text-suggest'>Chọn để thay đổi thông tin.</span>
        </div>
      </div>

      <hr className='hr' />
      <div className='update'>
        <button className='undate-btn'>Lưu</button>
      </div>
    </div>
  );
};

export default TutorInfo;

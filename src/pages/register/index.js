import React, { useState } from 'react';
import './register.css';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { CustomCalendar } from '../../components/common/calendar/customCalendar';

const ForgotPassword = () => {
  const [date, setDate] = useState(new Date());
  const changeDate = ({ date }) => {
    setDate(date);
  };
  return (
    <div id='register' className='body'>
      <div className='container'>
        <div className='header'>
          <h1 className='header-left'>Đăng ký</h1>
        </div>
        <form>
          <div className='form'>
            <div  style = {{display: 'flex'}}>

            <div className='form-row'>
              <div className='form-title-name' >Họ</div>
              <div className='form-input-wrapper-name'>
                <input type='text' className='form-input-name'  />
              </div>
            </div>

            <div className='form-row'>
              <div className='form-title-name'>Tên</div>
              <div className='form-input-wrapper-name'>
                <input type='text' className='form-input-name'  />
              </div>
            </div>

            </div>

            <div className='form-row'>
              <label className='form-title-gender'>Giới tính</label>
              <div className='form-input-wrapper-gender'>
              <div className='mt-5 mb-8 '>
              <label className='inline-flex items-center'>
                <input type='radio' className='form-radio' name='gender' value='male' />
                <span className='gender ml-2'>Nam</span>
              </label>
              <label className='inline-flex items-center ml-6'>
                <input type='radio' className='form-radio' name='gender' value='female' />
                <span className='gender ml-2'>Nữ</span>
              </label>
            </div>
              </div>
            </div>
            <div className='form-row'>
              <label className='form-title'>Ngày sinh</label>
              <div className='form-input-wrapper'>
              <DatePicker
                  className='date'
                  id='datePicker'
                  value={date}
                  onChange={changeDate}
                  format='dd/MM/yyyy'
                  calendar={CustomCalendar}
                />
              </div>
            </div>
            <div className='form-row'>
              <label className='form-title'>Email</label>
              <div className='form-input-wrapper'>
                <input type='email' className='form-input'  />
              </div>
            </div>
            <div className='form-row'>
              <label className='form-title'>Số điện thoại</label>
              <div className='form-input-wrapper'>
                <input type='number' className='form-input'  />
              </div>
            </div>
            <div className='form-row'>
              <label className='form-title'>Tài khoản</label>
              <div className='form-input-wrapper'>
                <input type='text' className='form-input'  />
              </div>
            </div>
            <div className='form-row'>
              <label className='form-title'>Mật khẩu</label>
              <div className='form-input-wrapper'>
                <input type='password' className='form-input'  />
              </div>
            </div> 
            <div className='form-row'>
              <button className='form-btn'>Gửi</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

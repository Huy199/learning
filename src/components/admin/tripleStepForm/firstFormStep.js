import React, { useState } from 'react';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { CustomCalendar } from '../../common/calendar/customCalendar';

const FirstFormStep = ({ handleOnSubmit, handleClickCancel, step }) => {
  const [date, setDate] = useState(new Date());
  const changeDate = ({ date }) => {
    setDate(date);
  };
  return (
    <div className='formInfo__body'>
      <div className='formInfo__scroll'>
        {/* Name Field */}
        <div className='formInfo__nameField-wrap'>
          <div className='formInfo__nameField'>
            <label htmlFor='firstName' className='formInfo__label'>
              Họ
            </label>
            <input name='firstName' type='text' className='formInfo__input formInfo__inputStyle' />
          </div>
          <div className='formInfo__nameField w-1/3'>
            <label htmlFor='lastName' className='formInfo__label'>
              Tên
            </label>
            <input name='lastName' type='text' className='formInfo__input formInfo__inputStyle' />
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div className='formInfo__emailField mr-2'>
            <label htmlFor='email' className='formInfo__label'>
              Email
            </label>
            <input id='email' name='email' type='text' className='formInfo__input formInfo__inputStyle' />
          </div>
          <div className='formInfo__phoneField mr-2'>
            <label htmlFor='phoneNumber' className='formInfo__label'>
              Số điện thoại
            </label>
            <input name='phoneNumber' id='phoneNumber' type='text' className='formInfo__input formInfo__inputStyle' />
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div className='formInfo__dOBField mr-2'>
            <label htmlFor='birthday' className='formInfo__label'>
              Ngày sinh
            </label>
            <div className='flex mb-8'>
              <div className=' mr-4 '>
                <DatePicker
                  id='datePicker'
                  value={date}
                  onChange={changeDate}
                  format='dd/MM/yyyy'
                  calendar={CustomCalendar}
                />
              </div>
            </div>
          </div>

          <div className='formInfo__nameField mr-2 '>
            <label className='formInfo__label'>Giới tính</label>
            <div className='mt-5 mb-8 '>
              <label className='inline-flex items-center'>
                <input type='radio' className='form-radio' name='gender' value='male' />
                <span className='ml-2'>Nam</span>
              </label>
              <label className='inline-flex items-center ml-6'>
                <input type='radio' className='form-radio' name='gender' value='female' />
                <span className='ml-2'>Nữ</span>
              </label>
              {/* <label className='inline-flex items-center ml-6'>
                <input type='radio' className='form-radio' name='gender' value='other' />
                <span className='ml-2'>Khác</span>
              </label> */}
            </div>
          </div>
        </div>
        <div className='formInfo__nameField-wrap'>
          <div className='formInfo__nameField'>
            <label htmlFor='password' className='formInfo__label'>
              Mật khẩu
            </label>
            <input name='password' type='password' className='formInfo__input formInfo__inputStyle' />
          </div>
          <div className='formInfo__nameField'>
            <label htmlFor='confirmPassword' className='formInfo__label'>
              Nhập lại mật khẩu
            </label>
            <input name='confirmPassword' type='password' className='formInfo__input formInfo__inputStyle' />
          </div>
        </div>
      </div>
      {/* button */}
      <div className='formInfo__btn'>
        <button className='formInfo__btn-left' onClick={handleClickCancel}>
          Thoát
        </button>
        <div className='formInfo__btn-right'>
          {step > 1 && <button className='formInfo__btn-cancel'>Quay lại</button>}

          <button className='formInfo__btn-next' onClick={handleOnSubmit}>
            {step === 3 ? 'Lưu' : 'Tiếp'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstFormStep;

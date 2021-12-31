import React from 'react';

const FormCreateCourse = ({ handleOnSubmit, handleClickCancel, step }) => {
  return (
    <div className='formCreateCourse__body'>
      <div className='formCreateCourse__scroll'>
        {/* Name Field */}

        <div className='formCreateCourse__nameField-wrap'>
          <div className='formCreateCourse__nameField mr-2'>
            <label htmlFor='firstName' className='formCreateCourse__label'>
              Tên khóa học
            </label>
            <input name='firstName' type='text' className='formCreateCourse__input formCreateCourse__inputStyle' />
          </div>
          <div className='formCreateCourse__nameField ml-2'>
            <label htmlFor='lastName' className='formCreateCourse__label'>
              Tên giáo viên
            </label>
            <input name='lastName' type='text' className='formCreateCourse__input formCreateCourse__inputStyle' />
          </div>
        </div>

        <div className='formCreateCourse__name mr-2'>
          <label htmlFor='nameTotal' className='formCreateCourse__label'>
            Tổng bài giảng
          </label>
          <input name='nameTotal' type='text' className='formCreateCourse__input formCreateCourse__inputStyle' />
        </div>

        <div className='formCreateCourse__name mr-2'>
          <label htmlFor='nameFee' className='formCreateCourse__label'>
            Giá theo giờ
          </label>
          <input name='nameFee' type='text' className='formCreateCourse__input formCreateCourse__inputStyle' />
        </div>

        <div className='formCreateCourse__name mr-2'>
          <label htmlFor='nameDate' className='formCreateCourse__label'>
            Ngày tạo
          </label>
          <input name='nameDate' type='text' className='formCreateCourse__input formCreateCourse__inputStyle' />
        </div>
      </div>
      {/* button */}
      <div className='formCreateCourse__btn'>
        <div className='formCreateCourse__btn-left'></div>
        <div className='formCreateCourse__btn-right'>
          <button className='formCreateCourse__btn-cancel' onClick={handleClickCancel}>
            Thoát
          </button>
          <button className='formCreateCourse__btn-next' onClick={handleOnSubmit}>
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormCreateCourse;

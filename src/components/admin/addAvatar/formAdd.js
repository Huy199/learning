import React, { useState } from 'react';
import ReactAvatarEditor from 'react-avatar-editor';

import cameraIcon from '../../../assets/icons/cameraIcon.svg';

const FormAdd = ({ step, handleClickCancel, handleClickBack, handleOnSubmit, student }) => {
  const [files] = useState([]);
  const thumbs = files.map((file) => (
    <div key={file.name} className='createPicture__img-container'>
      <ReactAvatarEditor
        image={file.preview}
        className='createPicture__picture'
        width={170}
        height={170}
        border={[74, 34]}
        borderRadius={200}
        color={[0, 0, 0, 0.6]}
      />
      <h5 className='createPicture__img-text'>Kéo để định vị lại ảnh</h5>
    </div>
  ));

  return (
    <form className='addAvatar__body'>
      <div className='addAvatar__scroll'>
        {/* content */}
        {files.length === 0 ? (
          <div className='createAvatar__wrapper'>
            <input />
            <img src={cameraIcon} alt='camera icon' className='createAvatar__img' />
            <h5 className='createAvatar__h5'>
              Thả hình ảnh của bạn ở đây, hoặc{' '}
              {student ? (
                <button type='button' className='createAvatar__h5-btn' style={{ color: '#3bb3bd' }}>
                  duyệt qua
                </button>
              ) : (
                <button type='button' className='createAvatar__h5-btn'>
                  duyệt qua
                </button>
              )}
            </h5>
            <h6 className='createAvatar__h6'>Hỗ trợ: JPG, PNG, TIFF</h6>
          </div>
        ) : (
          <div className='createAvatar__wrapper'>{thumbs}</div>
        )}
      </div>
      {/* button */}
      <div className='addAvatar__btn'>
        <button className='addAvatar__btn-left' onClick={handleClickBack}>
          {step > 1 ? 'Quay lại' : ''}
        </button>
        <div className='addAvatar__btn-right'>
          <button className='addAvatar__btn-cancel' onClick={handleClickCancel}>
            Thoát
          </button>
          {student ? (
            <button className='addAvatar__btn-next-student' onClick={handleOnSubmit}>
              Lưu
            </button>
          ) : (
            <button className='addAvatar__btn-next' onClick={handleOnSubmit}>
              Lưu
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default FormAdd;

import React, { useState } from 'react';
import ReactAvatarEditor from 'react-avatar-editor';

import cameraIcon from '../../../assets/icons/cameraIcon.svg';

const SecondFormStep = ({ step, handleClickCancel, handleClickBack, handleOnSubmit }) => {
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
        // backgroundColor='rgba(26, 32, 64, 0.5)'
      />
      {/* <img src={file.preview} alt='' /> */}
      <h5 className='createPicture__img-text'>Kéo để định vị lại ảnh</h5>
    </div>
  ));

  return (
    <form className='formInfo__body'>
      <div className='formInfo__scroll'>
        {/* content */}
        {files.length === 0 ? (
          <div className='flex items-center justify-center'>
            <div className='createPicture__wrapper'>
              <input />
              <img src={cameraIcon} alt='camera icon' className='createPicture__img' />
              <h5 className='createPicture__h5'>
                Thả hình ảnh của bạn ở đây, hoặc{' '}
                <button type='button' className='createPicture__h5-btn'>
                  duyệt qua
                </button>
              </h5>
              <h6 className='createPicture__h6'>Hỗ trợ: JPG, PNG, TIFF</h6>
            </div>
          </div>
        ) : (
          <div className='createPicture__wrapper'>{thumbs}</div>
        )}
      </div>
      {/* button */}
      <div className='formInfo__btn'>
        <button className='formInfo__btn-left' onClick={handleClickCancel}>
          Thoát
        </button>
        <div className='formInfo__btn-right'>
          {step > 1 && (
            <button className='formInfo__btn-cancel' onClick={handleClickBack}>
              Quay lại
            </button>
          )}
          <button className='formInfo__btn-next' onClick={handleOnSubmit}>
            {step === 3 ? 'Lưu' : 'Tiếp'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SecondFormStep;

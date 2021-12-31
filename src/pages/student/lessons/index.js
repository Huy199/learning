import React from 'react';

import './lessons.css';
import blockIcon from '../../../assets/icons/blockIcon.svg';
import { useHistory } from 'react-router-dom';
import { routes } from '../../../utils/constants';

const Lesson = () => {
  const history = useHistory();

  return (
    <div id='lessons' className='wrap'>
      <div className='container'>
        <div className='content'>
          <img src={blockIcon} alt='no data available' className='content__img h-64 w-64' />
          <h4 className='content__title'>Dữ liệu không có sẵn</h4>
          <span className='content__desc'>Ngay sau khi bạn đăng ký một khoá học phù hợp, bạn sẽ thấy nó ở đây</span>
          <button className='content__btn' onClick={() => history.push(`${routes.STUDENT}`)}>
            <span>Tìm một gia sư riêng</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lesson;

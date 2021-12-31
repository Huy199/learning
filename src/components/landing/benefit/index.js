import React from 'react';
import { advantagesSecondData } from '../../../dataMock/advantagesData';
import './benefit.css';

const Benefit = () => {
  return (
    <div className='advantages_second_container'>
      <div className='second_titleWrap'>
        <h2 className='advantages_second_title-name'>Tập trung vào các kỹ năng bạn cần</h2>
        <div className='advantages_second_subMenu'>Chuẩn bị để đạt được mục tiêu của bạn với giáo viên riêng</div>
      </div>
      <ul className='advantages_second-list'>
        {advantagesSecondData.map((value, idx) => (
          <li key={idx} className='second_list-item'>
            <div className='second_list-icon'>{value.icon}</div>
            <div className='second_list-text'>
              <p className='second_list-title'>{value.title}</p>
              <p className='second_list-desc'>{value.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Benefit;

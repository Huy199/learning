import React from 'react';
import { advantagesFirstData } from '../../../dataMock/advantagesData';
import './advantages.css';

const Advantages = () => {
  return (
    <div className='advantages__container'>
      <div className='titleWrap'>
        <h2 className='advantages__title-name'>Biến thế giới thành vùng an toàn của bạn</h2>
        <div className='advantages__subMenu'>Nói chuyện một cách tự nhiên với các gia sư trực tuyến chuyên nghiệp </div>
      </div>
      <ul className='advantages__first-list'>
        {advantagesFirstData.map((value, idx) => (
          <li key={idx} className='first__list-item'>
            <div className='first__item-icon'>{value.icon}</div>
            <>
              <p className='first__item-subTitle'>{value.title}</p>
              <p className='first__item-subDesc'>{value.text}</p>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Advantages;

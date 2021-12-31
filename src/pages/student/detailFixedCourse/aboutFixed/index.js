import React from 'react';
import './aboutFixed.css';

const AboutFixed = () => {
  return (
    <div id='aboutFixed'>
      <div className='fixed__wrap'>
        <h3 className='fixed__title'>
          <span style={{ fontWeight: 400, fontSize: 'var(--fontSizeMedium) ' }}>Thông tin khóa học</span>
        </h3>
        <ul className='fixed__content'>
          <li>Ngữ pháp: hoàn thành khoảng 500 mẫu ngữ pháp trung cấp</li>
          <li>Từ vựng: khoảng 600 từ vựng ở trình độ trung cấp</li>
          <li>Kanji: gần 250 chữ Kanji ở trình độ trung cấp</li>
          <li>
            Luyện nghe: làm quen với kỹ năng nghe bằng các chuyên đề luyện nghe, là từng định dạng của đề thi JLPT, được
            sắp xếp từ dễ đến khó.
          </li>
          <li>
            Luyện đọc hiểu: học nhóm các kỹ năng để giải quyết các định dạng đề thi trong JLPT, rèn luyện kỹ năng đọc
            hiểu và nắm vững cấu trúc câu phức của tiếng Nhật.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutFixed;

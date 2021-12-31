import React from 'react';

import './lessonItem.css';

const LessonItem = () => {
  return (
    <ul id='lessonItem'>
      <li className='bodyItem'>
        <div className='itemInfo'>
          <div className='itemContent'>
            <div className='contentAvatar'>
              <span className='contentBadge'>{/* <span>Top giáo viên</span> */}</span>
              <div className='avatarWrap'>
                <img
                  src='https://kidenglish.vn/wp-content/uploads/2020/02/N3.jpg'
                  alt='avatar'
                  className='w-full object-cover'
                />
              </div>
            </div>
            {/* title */}
            <div className='contentTitle'>
              <div className='content_titleLeft'>
                <div className='info_titleText'>
                  <h2>Tiếng Nhật N3</h2>
                </div>
                <div className='content_mainLeft'>
                  <h2>Thời lượng: 20 giờ (2h / buổi) · Kỹ năng: nghe, nói</h2>
                  <p style={{ marginTop: 16 }}>
                    Cách Học Siêu Thông Minh Cho Người Mất Gốc. Đổi Đời Chỉ Sau 3 Tháng Tự Học. Tìm Hiểu Ngay.
                  </p>
                </div>
              </div>
              <div className='content_titleRight'>
                <div className='content_headerRight'>
                  <span className='mr-5'>Đánh giá: 5/5</span>
                  <span> 100$ / Buổi</span>
                </div>
                <div className='content_mainRight'>
                  <button className='content_mainBtn'>Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default LessonItem;

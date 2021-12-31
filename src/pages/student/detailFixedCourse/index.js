import React from 'react';

import DetailFixedCourseContent from './content/index';
import './detailFixedCourse.css';

const DetailFixedCourse = () => {
  return (
    <div id='detailFixedCourse' style={{ scrollBehavior: 'smooth' }} className='container'>
      <div className='content'>
        <div className='pageColumn'>
          {/* infor */}
          <div className='main-infor'>
            <div className='main__info-wrap'>
              <div className='main__info-avatar'>
                <img
                  className='avatar__img'
                  src='https://kidenglish.vn/wp-content/uploads/2020/02/N3.jpg'
                  alt='avatar'
                />
                <div className='main__info-status'></div>
              </div>
              <div className='main__info-core'>
                <div className='info__core-title'>
                  <div className='info__core-name'>Tiếng Nhật cơ bản</div>
                  <h1 className='info__core-desc'>
                    Học tiếng Nhật, chuẩn bị cho việc đi làm hoặc học tập ở nước ngoài
                  </h1>
                </div>
                <ul className='info-core-list'>
                  <li className='info-core-item'>
                    <div className='info-core-wrap-icon'>
                      {/* <img src='' alt='teachesIcon' className='info__icon' /> */}
                      <ul className='info-core-subList'>
                        <span className='info-core-subTitle'>
                          <b>Ngôn ngữ</b>
                        </span>
                        <li className='info-core-subItem'>
                          <a href='/#'> Tiếng Nhật</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='brief__mainContent'>
                <div className='brief__sideItem'>
                  <div className='brief__indicator-wrap'>
                    <div className='brief__indicator-item'>42 đánh giá</div>
                  </div>
                  <div className='brief__indicator-wrap'>
                    <div className='brief__indicator-item'>20$ / khoá</div>
                  </div>
                </div>

                <div className='brief__sideItem-btn'>
                  <button className='brief__btn-book'>Đăng ký</button>
                </div>
              </div>
            </div>
            <div className='main__info-reviews'>
              <img
                src='https://avatars.preply.com/i/logos/4001479.jpg'
                alt='img_review'
                className='main__info-reviews-img'
              />
              <div className='main__info-reviews-content'>
                <p className='info_reviews-title'>
                  <span style={{ color: '#1d1e20', fontWeight: 600 }}>Pini</span>
                  <h3 style={{ color: '#989c9e', fontWeight: 400 }}>Gần đây</h3>
                </p>
                <div className='info-reviews-mainContent'>
                  Sau khi hoàn thành 2 khóa học N5 và N4, mình đã quyết định bước vào khóa N3 cùng UDIC. Mặc dù được
                  biết kiến thức của N3 khó khăn và phức tạp hơn so với 2 khóa trước đó, nhưng với sự giảng dạy và giúp
                  đỡ nhiệt tình của các giáo viên tại UDIC, mình không hề cảm thấy lo lắng hay áp lực. UDIC đã giúp mình
                  có đủ năng lực và bản lĩnh để vượt qua kỳ thi JLPT N3 đầy thử thách này.
                </div>
                <button className='info-reviews-btn'>Toàn bộ đánh giá</button>
              </div>
            </div>
          </div>
          {/* detail tutor menu */}
          <DetailFixedCourseContent />
        </div>
      </div>
    </div>
  );
};

export default DetailFixedCourse;

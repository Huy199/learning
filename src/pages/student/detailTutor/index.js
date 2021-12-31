import React from 'react';

import DetailTutorContent from './detailTutorContent';
import teachesIcon from '../../../assets/icons/teachesIcon.svg';
import bookIcon from '../../../assets/icons/infoBookIcon.svg';
import './detailTutor.css';

const DetailTutor = () => {
  return (
    <div id='detailTutor' style={{ scrollBehavior: 'smooth' }} className='container'>
      <div className='content'>
        <div className='pageColumn'>
          {/* infor */}
          <div className='main-infor'>
            <div className='main__info-wrap'>
              <div className='main__info-avatar'>
                <img
                  className='avatar__img'
                  src='https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/84819605_2552838158283076_3576940384351158272_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=z-L6O3wsZYgAX-JXWIz&_nc_ht=scontent.fhan3-4.fna&oh=00_AT8nBlNsYa5xXDIUVGI1-9TdRXOHXPOJZmRbRC22T4U0aA&oe=61E1DEED'
                  alt='avatar'
                />
                <div className='main__info-status'></div>
              </div>
              <div className='main__info-core'>
                <div className='info__core-title'>
                  <div className='info__core-name'>Vũ Thiên Sơn</div>
                  <h1 className='info__core-desc'>
                    Phỏng vấn & Thuyết trình, Họp tiếng Nhật, Chuẩn bị cho việc đi làm hoặc học tập ở nước ngoài
                  </h1>
                </div>
                <ul className='info-core-list'>
                  <li className='info-core-item'>
                    <div className='info-core-wrap-icon'>
                      <img src={teachesIcon} alt='teachesIcon' className='info__icon' />
                      <ul className='info-core-subList'>
                        <span className='info-core-subTitle'>
                          <b>Giảng dạy</b>
                        </span>
                        <li className='info-core-subItem'>
                          <a href='/#'> Tiếng Nhật</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/*  */}
                  <li className='info-core-item'>
                    <div className='info-core-wrap-icon'>
                      <img src={bookIcon} className='info__icon' alt='bookIcon' />
                      <ul className='info-core-subList'>
                        <span className='info-core-subTitle'>
                          <b>Đã được phê duyệt</b>
                        </span>
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
                    <div className='brief__indicator-item'>20$ một giờ</div>
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
                  Tôi bắt đầu tham gia các lớp học với Sơn theo lời giới thiệu của bạn bè, Sơn thực sự đã giúp tôi tiến
                  bộ hơn sự tự tin của tôi khi nói tiếng Nhật và đã cho tôi những lời khuyên tuyệt vời đã giúp tôi trong
                  các cuộc phỏng vấn và cô ấy có một phần quan trọng trong việc tôi chấp nhận công việc mà tôi muốn!
                </div>
                <button className='info-reviews-btn'>Toàn bộ đánh giá</button>
              </div>
            </div>
          </div>
          {/* detail tutor menu */}
          <DetailTutorContent />
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default DetailTutor;

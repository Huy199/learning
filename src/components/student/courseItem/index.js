import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../utils/constants';
import './courseItem.css';

const CourseItem = (props) => {
  const { description, name } = props;

  return (
    <ul id='courseItem'>
      <Link to={`${routes.DETAIL_FIXED_COURSE}/1`}>
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
                    <h2>Tiếng Nhật cơ bản</h2>
                    <p className='mt-3'>Thời lượng: 20 giờ (2h / buổi)</p>
                  </div>
                  <div className='content_mainLeft'>
                    <h2>Tổng số bài học: 93 bài</h2>
                    {/* <p>Nói: sdfds</p> */}
                    <p style={{ marginTop: 16 }}>
                      Học Tiếng Nhật Online cùng với chuyên gia. Từ cơ bản đến nâng đang cao ưu đãi tới 42% Học online
                      tại nhà mọi lúc mọi nơi, đăng ký một lần học trọn đời. Học Online tại nhà. Tự tin giao tiếp. Học
                      và thực hành ngay.
                    </p>
                  </div>
                </div>
                <div className='content_titleRight'>
                  <div className='content_headerRight'>
                    <span className='mr-5'>Đánh giá: 5/5</span>
                    <span> 400$ / Khoá</span>
                  </div>
                  <div className='content_mainRight'>
                    <button className='content_mainBtnView'>Xem khoá học</button>
                    <button className='content_mainBtnApply'>Đăng ký</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </Link>
    </ul>
  );
};

export default CourseItem;

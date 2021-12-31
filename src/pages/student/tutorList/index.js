import { useEffect, useRef, useState } from 'react';

// import Pagination from '../../../components/common/pagination';
import eLearningImg from '../../../assets/images/eLearning.jpeg';
import FilterTutor from '../../../components/student/filterTutor';
import FilterTutorResponsive from '../../../components/student/filterTutorResponsive';
import TutorItem from './tutorItem';
import './tutorList.css';
import TutorScheduleSlide from './tutorSchedule';

const TutorList = () => {
  const [slideColumn, setSlideColumn] = useState(0);

  const slideColumnRef = useRef(null);

  useEffect(() => {
    if (setSlideColumn) slideColumnRef.current.style.top = `${slideColumn * 208}px`;
  }, [slideColumn]);

  return (
    <div id='tutorList'>
      <div className='banner'>
        {/* banner header */}
        <div className='banner__header'>
          <div className='banner__title-wrap'>
            <h1 className='banner__title'>Gia sư và giáo viên trực tuyến cho các bài học riêng</h1>
            <div className='banner__subTitle'>
              <div className='subTitle__text'>
                Tìm kiếm một gia sư tiếng Anh trực tuyến? UDIC là nền tảng học ngoại ngữ trực tuyến hàng đầu trên toàn
                thế giới. Bạn có thể chọn từ 13172 giáo viên tiếng Anh với xếp hạng trung bình là 4,87 trên 5 sao do
                66943 đưa ra khách hàng. Đặt một buổi học với giáo viên tiếng Anh riêng ngay hôm nay và bắt đầu học.
                Không hoàn toàn hạnh phúc với gia sư của bạn? Đừng lo lắng, UDIC cung cấp dịch vụ thay thế gia sư miễn
                phí cho đến khi bạn hài lòng 100%.
              </div>
              <div className='subTitle__readMore'>Đọc thêm</div>
            </div>
          </div>
        </div>
      </div>
      {/* banner filter */}
      <div className='filterTutor'>
        <FilterTutor
          languageFilterTitle='TÔI MUỐN HỌC'
          priceFilterTitle='GIÁ MỖI GIỜ'
          timeFilterTitle='KHUNG THỜI GIAN'
        />
      </div>
      <div className='filterTutorResponsive'>
        <FilterTutorResponsive />
      </div>
      {/* end banner filter */}
      <div className='body-container'>
        <div className='body-wrap'>
          {/* list column */}
          <div className='tutor__body-listColumn'>
            <div className='tutor__item'>
              <TutorItem setSlideColumn={(index) => setSlideColumn(index)} />
            </div>
            <div className='tutor__item-res'></div>
            {/* book lesson */}
            <div className='body__lesson-booking'>
              <img className='lesson__booking-img' src={eLearningImg} alt='booking' />
              <p className='lesson__booking-title'>Tham gia các lớp học nhóm hoặc lớp riêng</p>
              <ul className='lesson__booking-list'>
                <li className='lesson__booking-item'>
                  <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='10.539' cy='10.996' r='10' fill='#E1FAE3'></circle>
                    <path
                      d='M7.539 10.663l2 2.666 3.333-5.333'
                      stroke='#24BB36'
                      strokeWidth='1.778'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                  <span>Kết hợp với một giáo viên riêng</span>
                </li>
                <li className='lesson__booking-item'>
                  <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='10.539' cy='10.996' r='10' fill='#E1FAE3'></circle>
                    <path
                      d='M7.539 10.663l2 2.666 3.333-5.333'
                      stroke='#24BB36'
                      strokeWidth='1.778'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                  <span>Kế hoạch học tập có cấu trúc</span>
                </li>
                <li className='lesson__booking-item'>
                  <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='10.539' cy='10.996' r='10' fill='#E1FAE3'></circle>
                    <path
                      d='M7.539 10.663l2 2.666 3.333-5.333'
                      stroke='#24BB36'
                      strokeWidth='1.778'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                  <span>Bài học 24/7</span>
                </li>
              </ul>
              <button className='lesson__booking-btn'>Đặt một bài học</button>
              <p style={{ fontSize: 'var(--fontSizeSmall)', color: '#989c9e' }}>
                Tham gia ngay bây giờ và nhận bản dùng thử 7 ngày miễn phí
              </p>
            </div>
            {/* pagination */}
            <div className='pagination'>{/* <Pagination /> */}</div>
          </div>
          {/* slide column */}
          <div className='tutor__body-slideColumn' ref={slideColumnRef}>
            <div className='slide__wrap'>
              <div className='slide__video'>
                <iframe
                  src='https://www.youtube.com/embed/0GdRI_GEygQ'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div className='slide__content'>
                <TutorScheduleSlide />
              </div>
            </div>
            <i className='slide__arrow' style={{ top: '143.664px' }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorList;

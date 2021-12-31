import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { routes } from '../../../../utils/constants';
import './tutorItem.css';
import { modalActions } from '../../../../features/modal/modal';
import { ModalComponentName } from '../../../../utils/enum';

const TutorItem = ({ setSlideColumn }) => {
  const dispatch = useDispatch();

  const openBookTimeModal = (e) => {
    dispatch(modalActions.changeModalContent(ModalComponentName.BOOKING_MODAL));
    dispatch(modalActions.showModal());
    e.preventDefault();
  };

  return (
    <ul id='tutorItem'>
      {listTutors.map((tutor, index) => {
        return (
          <Link key={tutor.id} to={`${routes.STUDENT}/${tutor.id}`} onMouseEnter={() => setSlideColumn(index)}>
            <li className='body__item'>
              <div className='body__item-info'>
                <div className='item__info-content'>
                  <div className='info__content-avatar'>
                    <span className='content__badge'>
                      <span>Top giáo viên</span>
                    </span>
                    <div className='content__avatar-wrap'>
                      <div
                        className={`content__avatar-status ${!tutor.isOnline ? 'content__avatar-status-offline' : ''}`}
                      ></div>
                      <img src={tutor.img} alt='avatar' className='w-full object-cover' />
                    </div>
                  </div>
                  {/* title */}
                  <div className='info__content-title'>
                    <div className='content__title-left'>
                      <div className='info__title-text'>
                        <h2>{tutor.name}</h2>
                        <p>{tutor.subject}</p>
                      </div>
                      <div className='content__main-left'>
                        <h2>
                          {tutor.totalStudents} học sinh hoạt động · {tutor.totalLesson} bài học
                        </h2>
                        <p>Nói: {tutor.subject}</p>
                        <p style={{ marginTop: 16 }}>{tutor.desc}</p>
                      </div>
                    </div>
                    <div className='content__title-right'>
                      <div className='content__header-right'>
                        <span className='mr-1'>{tutor.reviews} đánh giá </span>
                        <span> {tutor.price}$ một giờ</span>
                      </div>
                      <div className='content__main-right'>
                        <button className='content__main-btn' onClick={openBookTimeModal}>
                          Đăng Ký
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

const listTutors = [
  {
    id: 1,
    name: 'Trần Văn Sơn',
    subject: 'Tiếng Việt',
    img: 'https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/84819605_2552838158283076_3576940384351158272_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=z-L6O3wsZYgAX-JXWIz&_nc_ht=scontent.fhan3-4.fna&oh=00_AT8nBlNsYa5xXDIUVGI1-9TdRXOHXPOJZmRbRC22T4U0aA&oe=61E1DEED',
    totalLesson: 14,
    totalStudents: 570,
    isOnline: true,
    desc: ' Giáo viên tiếng Việt vui vẻ và năng động, có đầy đủ chứng chỉ! Xin chào, tôi tên là Sơn, tôi đến từ Ninh Bình',
    reviews: 40,
    price: 18,
  },
  {
    id: 2,
    name: 'Đoàn Đức',
    subject: 'Tiếng Anh',
    isOnline: false,
    img: 'https://scontent.xx.fbcdn.net/v/t1.6435-9/58729814_2261143867485857_3834415676517253120_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=QWYUhG6KraUAX9riPM-&_nc_ht=scontent.fhan3-5.fna&oh=00_AT9lCJI6SbgSfg9jpR1KI3jdSPFbkCEancflk1gQls50qQ&oe=61E28F60&_nc_fr=fhan3c05',
    totalLesson: 31,
    totalStudents: 356,
    desc: ' Giáo viên tiếng Anh vui vẻ và năng động, có đầy đủ chứng chỉ! Xin chào, tôi tên là Đức, tôi đến từ Ninh Bình',
    reviews: 30,
    price: 10,
  },
  {
    id: 3,
    name: 'Hoàng Quang Huy',
    subject: 'Tiếng Nhật',
    isOnline: true,
    totalLesson: 27,
    totalStudents: 210,
    img: 'https://photo-cms-baonghean.zadn.vn/Uploaded/2021/tfohiuh/2020_12_06/sn1033388432999_6122020.jpg',
    desc: ' Giáo viên tiếng Nhật vui vẻ và năng động, có đầy đủ chứng chỉ! Xin chào, tôi tên là Huy, tôi đến từ Bắc Kạn',
    reviews: 100,
    price: 28,
  },
  {
    id: 4,
    name: 'Hoàng Quốc Việt',
    subject: 'Tiếng Trung',
    isOnline: true,
    img: 'https://vnn-imgs-f.vgcloud.vn/2020/10/28/20/giang-vien-su-pham.jpg',
    totalLesson: 50,
    totalStudents: 300,
    desc: ' Giáo viên tiếng Trung vui vẻ và năng động, có đầy đủ chứng chỉ! Xin chào, tôi tên là Việt, tôi đến từ Thái Bình',
    reviews: 400,
    price: 30,
  },
];

export default TutorItem;

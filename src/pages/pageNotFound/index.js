import React from 'react';
import './pageNotFound.css';
import Footer from '../../components/landing/footer';
import Header from '../../components/landing/header';
import { routes } from '../../utils/constants';

const PageNotFound = () => {
  return (
    <div className='page__notFound-container'>
      <div className='page__notFound-header'>
        <Header />
      </div>
      <div className='page__notFound-body'>
        <div className='contentWrap__body'>
          <h2 className='title__content'>Xin lỗi! Không tìm thấy trang này</h2>
          <p className='subTitle__content'>
            Trang bạn đang tìm kiếm có thể đã bị xóa, bị thay đổi tên hoặc tạm thời không có sẵn. Hãy thử như sau::
          </p>
          <ul className='listMenu__content'>
            <li className='itemMenu__content'>
              Đảm bảo rằng địa chỉ web được hiển thị được viết đúng chính tả và định dạng
            </li>
            <li className='itemMenu__content'>
              Nếu bạn đến đây bằng cách nhấp vào một liên kết, hãy cho chúng tôi biết rằng liên kết không chính xác
            </li>
          </ul>
          <a className='btn__content' href={routes.TUTOR_LIST}>
            Tìm một gia sư riêng
          </a>
        </div>
      </div>
      <div className='page__notFound-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default PageNotFound;

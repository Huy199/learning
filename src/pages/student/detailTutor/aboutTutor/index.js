import React from 'react';
import './aboutTutor.css';

const AboutTutor = () => {
  return (
    <div id='about' className='detailTutor-container'>
      <div className='detailTutor-wrap'>
        <h3 className='detailTutor-title'>
          <span style={{ fontWeight: 400, fontSize: 'var(--fontSizeMedium) ' }}>Về giáo viên</span>
        </h3>
        <div className='detailTutor-content'>
          Tên tôi là Vũ Thiên Sơn. Tôi đến từ Ninh Bình, Việt Nam. Tôi là người nói tiếng Việt bản ngữ. Tôi dạy tiếng
          Nhật cho các mục đích phát triển nghề nghiệp, du lịch và du lịch, giao tiếp xã hội cài đặt, chuẩn bị cho các
          bài kiểm tra học thuật và hơn thế nữa. Với tôi, bạn có thể học và thực hành giao tiếp kỹ năng, đọc và viết, có
          được sự tự tin và trở thành.
        </div>
        <span className='detailTutor-btn'>Xem thêm</span>
      </div>
    </div>
  );
};

export default AboutTutor;

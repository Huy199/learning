import { Link } from 'react-router-dom';

import { paymentHistoryData } from '../../../../dataMock/paymentHistoryData';
import './paymentHistory.css';

const PaymentHistorySettings = () => {
  return (
    <div id='paymentHistory'>
      <div className='title'>
        <h2>Lịch sử thanh toán</h2>
      </div>

      <div className='content'>
        <div className='content-header'>
          <div className='content-date'>
            <span className='content-text' style={{ fontWeight: 600 }}>
              Ngày
            </span>
          </div>
          <div className='content-hours'>
            <span className='content-text' style={{ fontWeight: 600 }}>
              Giờ
            </span>
          </div>

          <div className='content-subject'>
            <span className='content-text' style={{ fontWeight: 600 }}>
              Môn học
            </span>
          </div>
          <div className='content-download'>
            <span className='content-text' style={{ fontWeight: 600 }}>
              Tải tất cả
            </span>
          </div>
        </div>
        {paymentHistoryData.map((item, idx) => (
          <div className='content-header' key={idx}>
            <div className='content-date'>
              <span className='content-text'>{item.date}</span>
            </div>
            <div className='content-hours'>
              <span className='content-text'>{item.time}</span>
            </div>

            <div className='content-subject'>
              <span className='content-text'>{item.subject}</span>
            </div>
            <div className='content-download'>
              <span className='content-text'> Tải xuống</span>
            </div>
          </div>
        ))}

        <Link to='/students/tutors' className='btnSubmit'>
          <button>Tìm một giáo viên mới </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentHistorySettings;

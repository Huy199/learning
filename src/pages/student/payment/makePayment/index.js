import demoImg1 from '../../../../assets/images/demoImg.jpeg';
import starSolidIcon from '../../../../assets/icons/starSolidIcon.svg';
import subjectIcon from '../../../../assets/icons/graduateIcon.svg';
import securityIcon from '../../../../assets/icons/securityIcon.svg';
import paypalIcon from '../../../../assets/icons/paypalIcon.svg';
import guaranteeIcon from '../../../../assets/icons/guaranteeIcon.svg';

import ConfirmPayment from '../../../../components/student/confirmPayment';

import './makePayment.css';

const MakePayment = () => {
  return (
    <div id='makePayment'>
      <div className='bill__container'>
        <div className='bill__body'>
          <div className='bill__header'>
            <div className='bill__avatarWrap'>
              <img src={demoImg1} alt='avatar' />
              <div className='bill__ratting'>
                <img src={starSolidIcon} alt='ratting icon' className='h-6 w-6' />
                <span>5</span>
              </div>
            </div>

            <div className='bill__infoWrap'>
              <h3>Đoàn Đức</h3>
              <div className='bill__infoSubject'>
                <img src={subjectIcon} alt='subject icon' className='w-6 h-6' />
                <span>Tiếng Nhật</span>
              </div>
            </div>
          </div>
          <div className='bill__dateCreate'>
            <h5>Ngày giờ</h5>
            <p>Thứ sáu, ngày 17 tháng 12, 15:00</p>
            <p>GMT +7:00</p>
          </div>
          <div className='bill__serviceDetail'>
            <div className='bill__serviceDetail__header'>
              <h5>Chi tiết dịch vụ</h5>
              <p>Giá mỗi giờ</p>
            </div>
            <div className='bill__serviceDetail__price'>
              <h5>1 giờ học</h5>
              <p>300000 VND</p>
            </div>
            <div className='bill__serviceDetail__price'>
              <h5>Phí giao dịch</h5>
              <p>15000 VND</p>
            </div>
            <div className='bill__serviceDetail__free'>
              <h5>Huỷ bài học</h5>
              <p>Miễn phí</p>
            </div>
          </div>
          <div className='bill__total'>
            <h5>Total</h5>
            <p>315000 VND</p>
          </div>

          <div className='makePayment__formGroup'>
            <label className='makePaymentForm__container'>
              <div className='makePayment__checkbox__label'>
                <span>
                  Tôi muốn có một <span className='makePayment__checkbox__label-active'>môn học</span> miễn phí hoặc
                  được hoàn lại tiền nếu giáo viên không đáp ứng nhu cầu
                </span>
              </div>
              <input type='checkbox' />
              <span className='checkmark'></span>
            </label>
          </div>
        </div>
      </div>
      <div className='checkout__container'>
        <div className='checkout__body'>
          <div className='checkout__header'>
            <h2>Thanh toán an toàn</h2>
          </div>
          <div className='checkout__content'>
            <div className='checkout__content-header'>
              <h2>2. Phương thức thanh toán</h2>
            </div>

            <div className='checkout__content-desc'>
              <img src={securityIcon} alt='icon' />
              <p>Thanh toán trả trước. Tất cả các giao dịch được bảo vệ bằng mã hóa SSL.</p>
            </div>

            <div className='checkout__content-paypal'>
              <img src={paypalIcon} alt='icon' />
              <img src={securityIcon} alt='icon' className='security' />
            </div>

            <button className='checkout__content-paypalBtn'>
              <img src={paypalIcon} alt='' />
            </button>
          </div>

          <div className='checkout__footer'>
            <img src={guaranteeIcon} alt='' />
            <div className='checkout__footer-content'>
              <h1>Học với đảm bảo hài lòng 100%</h1>
              <p>
                Nếu bài học của bạn không diễn ra, hoặc bạn không hài lòng với giáo viên, chúng tôi sẽ cung cấp cho bạn
                sự thay thế miễn phí cho một giáo viên khác mà bạn chọn hoặc hoàn lại tiền đầy đủ cho bạn.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ConfirmPayment />
    </div>
  );
};

export default MakePayment;

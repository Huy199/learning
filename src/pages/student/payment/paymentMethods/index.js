import './paymentMethod.css';

import visaIcon from '../../../../assets/icons/iconVisa.svg';
import mastercardIcon from '../../../../assets/icons/iconMastercard.svg';
const PaymentMethodSettings = () => {
  return (
    <div id='paymentMethods'>
      <div className='title'>
        <h2>Phương thức thanh toán</h2>
      </div>
      <div className='content'>
        <div className='content-header'>
          <h3>Chọn phương thức thanh toán</h3>
        </div>
        <div className='content-desc'>
          <p>
            Thanh toán nhanh chóng và dễ dàng. Lưu thẻ để sử dụng nạp tiền và tự động bảo lưu các bài học hàng tuần.
            Thông tin thanh toán được bảo mật, một dịch vụ PayPal, mã hóa và lưu trữ an toàn.
          </p>
        </div>

        <div className='content-image'>
          <div className='visa'>
            <img src={visaIcon} alt='icon' />
          </div>
          <div className='mastercard'>
            <img src={mastercardIcon} alt='icon' />
          </div>
        </div>

        <div className='btnSubmit'>
          <button>Lưu thẻ</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodSettings;

import React, { useState } from 'react';

import cancelIcon from '../../../assets/icons/cancelIcon.svg';
import './confirmPayment.css';

const ConfirmPayment = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    isOpenModal && (
      <div className='confirmPayment__wrapper'>
        <div className='confirm__payment'>
          {/* header */}
          <div className='confirm__payment-header'>
            <div className='confirm__payment-title'>
              <span>Hủy thanh toán</span>
            </div>
            <button className='confirm__payment-cancel' onClick={() => setIsOpenModal(false)}>
              <img src={cancelIcon} className='h-9 w-9' alt='cancle icon' />
            </button>
          </div>
          {/* body */}
          <div className='confirm__payment-body'>
            <span className='confirm__payment-desc'>
              Bạn vẫn chưa hoàn tất thanh toán của mình. Bạn có chắc chắn rời đi không?
            </span>
          </div>
          {/* footer */}
          <div className='confirm__payment-footer'>
            <button className='confirm__payment-stay'>Tiếp tục thanh toán </button>
            <button className='confirm__payment-leave' onClick={() => setIsOpenModal(false)}>
              Hủy thanh toán
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ConfirmPayment;

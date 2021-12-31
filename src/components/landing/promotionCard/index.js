import React from 'react';

import './promotionCard.css';

const PromotionCard = () => {
  return (
    <div className='promotionCard'>
      <div className='promotionCard-title__wrapper'>
        <h1 className='promotionCard__title'>Bắt đầu dùng</h1>
        <p className='promotionCard__subtitle'>Các thành viên được trả tiền khi bạn đi dạy kèm với 200.000 VND/giờ.</p>
      </div>

      <div className='promotionCard__container'>
        <div className='promotionCard__item promotionCard__Popular--active'>
          <div className='promotionCard__item-info'>
            <div className='promotionCard-item-title__wrapper'>
              <h3 className='promotionCard-item-title__text'>Hàng năm</h3>
              <p className='promotionCard-item-title__subtitle'>Thành viên</p>

              <div className='promotionCard-priceTag__pay'>
                <p className='promotionCard-priceTag__pay-text'>THANH TOÁN $ 288 HÀNG NĂM</p>
              </div>
            </div>

            <div className='promotionCard-priceTag'>
              <div className='promotionCard-priceTag__subscription'>
                <div className='promotionCard-priceTag__subscription-wrapper'>
                  <span className='promotionCard-subscription__currency'>$</span>
                  <p className='promotionCard-subscription__price'>24</p>
                </div>
                <p className='promotionCard-subscription__perTime'>một tháng</p>
              </div>
            </div>
          </div>

          <div className='promotionCard-priceTag__discount'>
            <p className='promotionCard-priceTag__discount__text'>tiết kiệm 50%</p>
          </div>

          <div className='promotionCard-button__wrapper'>
            <button className='promotionCard-button__item'>
              <p className='promotionCard-button__name'>Mua gói</p>
              <div className='promotionCard-button__icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  viewBox='0 0 48 48'
                  width='28'
                  height='30'
                  className='productCard__button-arrow'
                >
                  <g fill='none'>
                    <path
                      d='M4 24c0-.69.56-1.25 1.25-1.25h32.446L24.874 10.14a1.25 1.25 0 1 1 1.752-1.782l14.988 14.738l.027.026a1.245 1.245 0 0 1 .352 1.009a1.245 1.245 0 0 1-.393.785L26.626 39.641a1.25 1.25 0 1 1-1.752-1.782l12.822-12.61H5.25C4.56 25.25 4 24.69 4 24z'
                      fill='currentColor'
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>

          <div className='promotionCard-popular'>
            <div className='promotionCard-popular__text'>Phổ biến </div>
          </div>
        </div>

        <div className='promotionCard__item promotionCard__Popular--active'>
          <div className='promotionCard__item-info'>
            <div className='promotionCard-item-title__wrapper'>
              <h3 className='promotionCard-item-title__text'>6 tháng</h3>
              <p className='promotionCard-item-title__subtitle'>Thành viên</p>

              <div className='promotionCard-priceTag__pay'>
                <p className='promotionCard-priceTag__pay-text'>THANH TOÁN $ 216 HÀNG NĂM</p>
              </div>
            </div>

            <div className='promotionCard-priceTag'>
              <div className='promotionCard-priceTag__subscription'>
                <div className='promotionCard-priceTag__subscription-wrapper'>
                  <span className='promotionCard-subscription__currency'>$</span>
                  <p className='promotionCard-subscription__price'>36</p>
                </div>
                <p className='promotionCard-subscription__perTime'>một tháng</p>
              </div>
            </div>
          </div>

          <div className='promotionCard-priceTag__discount'>
            <p className='promotionCard-priceTag__discount__text'>tiết kiệm 50%</p>
          </div>

          <div className='promotionCard-button__wrapper'>
            <button className='promotionCard-button__item'>
              <p className='promotionCard-button__name'>Mua gói</p>
              <div className='promotionCard-button__icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  viewBox='0 0 48 48'
                  width='28'
                  height='30'
                  className='productCard__button-arrow'
                >
                  <g fill='none'>
                    <path
                      d='M4 24c0-.69.56-1.25 1.25-1.25h32.446L24.874 10.14a1.25 1.25 0 1 1 1.752-1.782l14.988 14.738l.027.026a1.245 1.245 0 0 1 .352 1.009a1.245 1.245 0 0 1-.393.785L26.626 39.641a1.25 1.25 0 1 1-1.752-1.782l12.822-12.61H5.25C4.56 25.25 4 24.69 4 24z'
                      fill='currentColor'
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>

          <div className='promotionCard-popular'>
            <div className='promotionCard-popular__text'>Phổ biến</div>
          </div>
        </div>

        <div className='promotionCard__item'>
          <div className='promotionCard__item-info'>
            <div className='promotionCard-item-title__wrapper'>
              <h3 className='promotionCard-item-title__text'>HÀNG THÁNG</h3>
              <p className='promotionCard-item-title__subtitle'>Thành viên</p>

              <div className='promotionCard-priceTag__pay'>
                <p className='promotionCard-priceTag__pay-text'>THANH TOÁN $ 48 HÀNG NĂM</p>
              </div>
            </div>

            <div className='promotionCard-priceTag'>
              <div className='promotionCard-priceTag__subscription'>
                <div className='promotionCard-priceTag__subscription-wrapper'>
                  <span className='promotionCard-subscription__currency'>$</span>
                  <p className='promotionCard-subscription__price'>48</p>
                </div>
                <p className='promotionCard-subscription__perTime'>một tháng</p>
              </div>
            </div>
          </div>

          <div className='promotionCard-priceTag__discount'>
            <p className='promotionCard-priceTag__discount__text'>tiết kiệm 50%</p>
          </div>

          <div className='promotionCard-button__wrapper'>
            <button className='promotionCard-button__item'>
              <p className='promotionCard-button__name'>Mua gói</p>
              <div className='promotionCard-button__icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  viewBox='0 0 48 48'
                  width='28'
                  height='30'
                  className='productCard__button-arrow'
                >
                  <g fill='none'>
                    <path
                      d='M4 24c0-.69.56-1.25 1.25-1.25h32.446L24.874 10.14a1.25 1.25 0 1 1 1.752-1.782l14.988 14.738l.027.026a1.245 1.245 0 0 1 .352 1.009a1.245 1.245 0 0 1-.393.785L26.626 39.641a1.25 1.25 0 1 1-1.752-1.782l12.822-12.61H5.25C4.56 25.25 4 24.69 4 24z'
                      fill='currentColor'
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>

          <div className='promotionCard-popular'>
            <div className='promotionCard-popular__text'>phổ biến</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;

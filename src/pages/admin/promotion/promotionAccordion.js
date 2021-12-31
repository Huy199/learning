import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import downIcon from '../../../assets/icons/arrowDownBlueIcon.svg';
import upIcon from '../../../assets/icons/arrowUpIcon.svg';

const AdminPromotionAccordion = ({ item }) => {
  const location = useLocation();
  const { name, promo, point, visible, code, price } = item;
  const [isOpen, setIsOpen] = useState(false);
  const [isEditForm, setIsEditForm] = useState(false);
  const [inputForm, setInputForm] = useState({
    name,
    promo,
    code,
    point,
    visible,
    bought: 30,
  });
  const handleClickOpen = () => {
    setIsOpen(!isOpen);
    setIsEditForm(false);
  };

  const handleClickEditForm = () => {
    setIsEditForm(!isEditForm);
  };

  const handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    // console.log('value: ', value);
    const name = event.target.name;
    setInputForm({
      ...inputForm,
      [name]: value,
      visible: value,
    });
  };
  return (
    // <Link to={`${location.pathname}/${code}`}>
    <div className='adminPromotion__item'>
      {!isOpen ? (
        <div className='relative'>
          <Link to={`${location.pathname}/${code}`}>
            <div className='adminPromotion__header px-10 py-9'>
              <div className='adminPromotion__header-item-name'>{name}</div>
              <div className='adminPromotion__header-item-code'>{code}</div>
              <div className='adminPromotion__header-item-price'>{price} USD</div>
              <div className='adminPromotion__header-item-points'>{point} điểm</div>
              <div className='adminPromotion__header-item-points'>{promo} điểm</div>
              <div className='adminPromotion__header-item-status'>{visible ? 'Hiển thị' : 'Ẩn'}</div>
              <div className='adminPromotion__header-item-bought'>
                <div>{30}</div>
              </div>
            </div>
          </Link>
          <div className='adminPromotion__open-btn'>
            <div className='promotionTable__btn-item' onClick={handleClickOpen}>
              <div className='btnIcon'>
                <img src={downIcon} alt='arrowDownIcon' className='-mr-1 ml-2 h-7 w-7' />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form className='rounded-lg'>
          <div className='adminPromotion__form-header '>
            <h3 className='adminPromotion__form-header-title'>Thông tin mã khuyến mại</h3>
            <div className='adminPromotion__title-btn'>
              <div className='adminPromotion__btn-item' onClick={handleClickEditForm}>
                {!isEditForm && (
                  <div className='btnIcon'>
                    <button>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        viewBox='0 0 20 20'
                        width={17}
                        height={17}
                      >
                        <g fill='none'>
                          <path
                            d='M13.245 2.817a2.783 2.783 0 0 1 4.066 3.796l-.13.14l-9.606 9.606a2.001 2.001 0 0 1-.723.462l-.165.053l-4.055 1.106a.5.5 0 0 1-.63-.535l.016-.08l1.106-4.054c.076-.28.212-.54.398-.76l.117-.128l9.606-9.606zm-.86 2.275L4.346 13.13a1 1 0 0 0-.215.321l-.042.123l-.877 3.21l3.212-.875a1 1 0 0 0 .239-.1l.107-.072l.098-.085l8.038-8.04l-2.521-2.52zm4.089-1.568a1.783 1.783 0 0 0-2.402-.11l-.12.11l-.86.86l2.52 2.522l.862-.86a1.783 1.783 0 0 0 .11-2.402l-.11-.12z'
                            fill='blue'
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                )}
                <div className='btnName'>{isEditForm ? <span className='cancel'>Huỷ</span> : ''}</div>
              </div>

              <div className='adminPromotion__btn-item'>
                {!isEditForm && (
                  <div className='btnIcon'>
                    <button className=''>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        viewBox='0 0 24 24'
                        width={17}
                        height={17}
                      >
                        <g fill='none'>
                          <path
                            d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z'
                            fill='red'
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                )}
                <div className='btnName'>{isEditForm ? <span className='save'>Lưu</span> : ''}</div>
              </div>
              <div className='promotionTable__btn-item' onClick={handleClickOpen}>
                <div className='btnIcon'>
                  <img src={upIcon} alt='arrowUpIcon' className='-mr-1 ml-2 h-7 w-7' />
                </div>
              </div>
            </div>
          </div>

          <ul className='adminPromotion__accordion'>
            <li className='adminPromotion__accordion-item-name'>
              <label htmlFor='promotionName' className='adminPromotion__accordion-item-label'>
                Tên khuyến mại
              </label>
              <input
                id='promotionName'
                type='text'
                name='name'
                className='adminPromotion__input'
                value={inputForm.name}
                onChange={handleChange}
                disabled={!isEditForm}
                placeholder='Nhập tên gói...'
              />
            </li>

            <li className='adminPromotion__accordion-item-code'>
              <label htmlFor='promotionCode' className='adminPromotion__accordion-item-label'>
                Mã khuyến mại
              </label>
              <input
                id='promotionCode'
                type='text'
                name='code'
                className='adminPromotion__input'
                value={inputForm.code}
                onChange={handleChange}
                disabled
                placeholder=''
              />
            </li>

            <li className='adminPromotion__accordion-item-price'>
              <label htmlFor='price' className='adminPromotion__accordion-item-label'>
                Giá
              </label>
              <input
                id='price'
                type='text'
                name='price'
                className='adminPromotion__input'
                value={inputForm.promo}
                onChange={handleChange}
                disabled={!isEditForm}
                placeholder='Nhập giá...'
              />
            </li>
            <li className='adminPromotion__accordion-item-points'>
              <label htmlFor='points' className='adminPromotion__accordion-item-label'>
                Tổng điểm quy đổi
              </label>
              <input
                id='sumOfPoint'
                type='text'
                name='sumOfPoint'
                className='adminPromotion__input'
                value={inputForm.point}
                onChange={handleChange}
                disabled={!isEditForm}
                placeholder='Nhập điểm...'
              />
            </li>

            <li className='adminPromotion__accordion-item-points'>
              <label htmlFor='points' className='adminPromotion__accordion-item-label'>
                Điểm cộng thêm
              </label>
              <input
                id='points'
                type='text'
                name='points'
                className='adminPromotion__input'
                value={inputForm.point}
                onChange={handleChange}
                disabled={!isEditForm}
                placeholder='Nhập điểm...'
              />
            </li>

            <li className='adminPromotion__accordion-item-status'>
              <label htmlFor='status' className='adminPromotion__accordion-item-label mb-1'>
                Trạng thái
              </label>
              {/* <div className={isEditForm == false ? 'btnIcon-status' : 'btnIcon-status-active'}>
                <img src={downIcon} alt='arrowDownIcon' className='-mr-1 ml-2 h-7 w-7' />
              </div> */}
              <select
                className='adminPromotion__select'
                name='status'
                id='status'
                disabled={!isEditForm}
                onChange={handleChange}
                value={inputForm.visible}
              >
                <option value='true'>Hiển thị</option>
                <option value='false'>Ẩn</option>
              </select>
            </li>

            <li className='adminPromotion__accordion-item-bought'>
              <label htmlFor='points' className='adminPromotion__accordion-item-label'>
                SL đã mua
              </label>
              <input
                id='bought'
                type='number'
                name='bought'
                className='adminPromotion__input'
                value={inputForm.bought}
                disabled
              />
            </li>
          </ul>
        </form>
      )}
    </div>
    // </Link>
  );
};

export default AdminPromotionAccordion;

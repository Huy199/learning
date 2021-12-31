import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../../features/modal/modal';
import { useOutside } from '../../../utils/help';
import './formAddPromotion.css';

const FormAddPromotion = () => {
  const dispatch = useDispatch();
  const [animationClose, setAnimationClose] = useState('');
  const handleCloseModal = () => {
    setAnimationClose('formAddPromotion-animation');
    setTimeout(() => {
      dispatch(modalActions.hideModal());
    }, 200);
  };

  //click outside to close modal
  const formModalRef = useRef();
  useOutside(formModalRef, handleCloseModal);
  return (
    <div id='formAddPromotion'>
      <div ref={formModalRef} className={`container ${animationClose}`}>
        <div className='title'>
          <h1>Thêm khuyến mãi</h1>
        </div>
        <div className='wrapper'>
          <div className='form-group'>
            <label htmlFor='name' className='label'>
              Nhập tên gói
            </label>
            <input id='name' type='text' name='name' className='input w-3/4' placeholder='Nhập tên gói...' />
            <p className='message__error'></p>
          </div>

          <div className='form-group'>
            <label htmlFor='price' className='label'>
              Nhập giá
            </label>
            <input id='price' type='number' name='price' className='input w-2/4' placeholder='Nhập giá...' />
            <p className='message__error'></p>
          </div>

          <div className='form-group'>
            <label htmlFor='sumOfPoint' className='label'>
              Tổng điểm quy đổi
            </label>
            <input
              id='sumOfPoint'
              type='number'
              name='sumOfPoint'
              className='input w-2/4'
              placeholder='Nhập tổng điểm quy đổi...'
            />
            <p className='message__error'></p>
          </div>

          <div className='form-group'>
            <label htmlFor='points' className='label'>
              Điểm cộng thêm
            </label>
            <input
              id='points'
              type='number'
              name='points'
              className='input w-2/4'
              placeholder='Nhập điểm cộng thêm...'
            />
            <p className='message__error'></p>
          </div>

          <div className='form-group'>
            <label htmlFor='code' className='label'>
              Nhập mã
            </label>
            <input id='code' type='text' name='code' className='input w-2/4' placeholder='Nhập mã...' />
            <p className='message__error'></p>
          </div>

          <div className='form-group'>
            <label className='label'>Chọn trạng thái</label>
            <div className='flex mt-4 w-2/4'>
              <label className='flex items-center w-2/4'>
                <input type='radio' name='status' value='Ẩn' />
                <span className='label ml-2'>Ẩn</span>
              </label>
              <label className='flex items-center w-2/4'>
                <input type='radio' name='status' value='Hiện' />
                <span className='label ml-2'>Hiện</span>
              </label>
            </div>
          </div>
        </div>
        <div className='btn-group'>
          <button className='btn cancel' onClick={handleCloseModal}>
            Thoát
          </button>
          <button className='btn'>Lưu</button>
        </div>
      </div>
    </div>
  );
};

export default FormAddPromotion;

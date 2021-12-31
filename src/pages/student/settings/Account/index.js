import './account.css';
import createIcon from '../../../../assets/icons/createIconGreen.svg';

import { modalActions } from '../../../../features/modal/modal';
import { ModalComponentName } from '../../../../utils/enum';
import { useDispatch } from 'react-redux';
const AccountSettings = () => {
  const dispatch = useDispatch();

  const handleAddForm = () => {
    dispatch(modalActions.changeModalContent(ModalComponentName.ADD_AVATAR_STUDENT));
    dispatch(modalActions.showModal());
  };
  return (
    <div id='studentAccount'>
      <div className='title'>
        <h2>Cài đặt tài khoản</h2>
      </div>

      <div className='form'>
        <div className='select-picture'>
          <div className='name-picture'>Ảnh đại diện</div>
          <div className='edit-picture'>
            <img
              alt=''
              className='picture'
              src='https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png'
            />
            <button className='btn-add' onClick={handleAddForm}>
              <img src={createIcon} alt='btn Icon' />
            </button>
          </div>
        </div>
        <div className='formGroup'>
          <label htmlFor='firstName'>Họ, tên đệm</label>
          <input type='text' name='firstName' id='firstName' autoComplete='off' />
        </div>
        <div className='formGroup'>
          <label htmlFor='lastName'>Tên</label>
          <input type='text' name='lastName' id='lastName' autoComplete='off' />
        </div>
        <div className='formGroup'>
          <label htmlFor='phone'>Số điện thoại</label>
          <input type='text' name='phone' id='phone' autoComplete='off' />
        </div>
        <div className='btnSubmit'>
          <button>Lưu</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;

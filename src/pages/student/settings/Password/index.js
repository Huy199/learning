import './password.css';

const PasswordSettings = () => {
  return (
    <div id='studentPassword'>
      <div className='title'>
        <h2>Cài đặt mật khẩu</h2>
      </div>

      <div className='form'>
        <div className='formGroup'>
          <label htmlFor='password'>Mật khẩu hiện tại</label>
          <input type='text' name='password' id='password' autoComplete='off' />
        </div>

        <div className='formGroup'>
          <label htmlFor='password'>Mật khẩu mới</label>
          <input type='text' name='password' id='password' autoComplete='off' />
        </div>

        <div className='formGroup'>
          <label htmlFor='verifyPassword'>Xác nhận mật khẩu mới</label>
          <input type='text' name='verifyPassword' id='verifyPassword' autoComplete='off' />
        </div>

        <div className='btnSubmit'>
          <button>Lưu</button>
        </div>
      </div>
    </div>
  );
};

export default PasswordSettings;

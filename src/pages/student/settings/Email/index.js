import './email.css';
const EmailSettings = () => {
  return (
    <div id='studentEmail'>
      <div className='title'>
        <h2>Cài đặt email</h2>
      </div>

      <div className='form'>
        <div className='formGroup'>
          <label htmlFor='email'>Email hiện tại</label>
          <input type='text' name='email' id='email' autoComplete='off' />
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Email mới</label>
          <input type='text' name='email' id='email' autoComplete='off' />
        </div>

        <div className='btnSubmit'>
          <button>Lưu</button>
        </div>
      </div>
    </div>
  );
};

export default EmailSettings;

import React from 'react';
import './forgotPassword.css';

const ForgotPassword = () => {
  return (
    <div id='forgot-password' className='body'>
      <div className='container'>
        <div className='header'>
          <h1 className='header-left'>Quên mật khẩu?</h1>
        </div>
        <form>
          <div className='form'>
            <div className='form-row'>
              <label className='form-title'>Email</label>
              <div className='form-input-wrapper'>
                <input type='text' className='form-input' value='' name='username' />
              </div>
            </div>
            <div className='form-row'>
              <button className='form-btn'>Gửi</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

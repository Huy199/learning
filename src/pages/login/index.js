import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { authActions, selectToken } from '../../features/auth/authSlice';
import './login.css';

const Login = () => {
  const [fakeRole, setFakeRole] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectToken);

  const onValueChange = (e) => {
    setFakeRole({
      ...fakeRole,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login(fakeRole));
  };

  useEffect(() => {}, [isLoggedIn]);

  return isLoggedIn ? (
    <Redirect to='/' />
  ) : (
    <div className='login'>
      <div className='login__container'>
        {/*login header*/}
        <div className='login__header'>
          <h1 className='login__header-left'>Đăng nhập</h1>
          <div className='login__header-right'>
            <a href='/auth/register'>
              <span>Đăng ký học viên </span>
            </a>
            {/* <span className='login__header-right-or'>hoặc</span>
            <a>
              <span>Đăng ký gia sư</span>
            </a> */}
          </div>
        </div>
        {/*end login header*/}

        <div className='login__separator'></div>
        {/*login social*/}
        {/* <div className='login__social'>
          <div className='login__item'>
            <a href='#' className='login__fb'>
              <img src={facebookIcon} />
              <span className='login__fb-text'>Đăng nhập với Facebook</span>
            </a>
          </div>

          <div className='login__item'>
            <a href='#' className='login__google'>
              <img src={googleIcon} />
              <span className='login__google-text'>Đăng nhập với Google</span>
            </a>
          </div>
        </div> */}
        {/*end login social*/}
        {/* <div className='login__separator'>
          <span className='login__separator-text'>hoặc</span>
        </div> */}
        {/*form login*/}
        <form>
          <div className='login__form'>
            {/* email*/}
            <div className='login__form-row'>
              <label className='login__form-title'>Email</label>
              <div className='login__form-input-wrapper'>
                <input
                  type='text'
                  className='login__form-input'
                  value={fakeRole.username}
                  name='username'
                  onChange={onValueChange}
                />
              </div>
            </div>
            {/*password*/}
            <div className='login__form-row'>
              <label className='login__form-title'>Mật khẩu</label>
              <div className='login__form-input-wrapper'>
                <input
                  type='password'
                  className='login__form-input'
                  value={fakeRole.password}
                  name='password'
                  onChange={onValueChange}
                />
              </div>
              <a href='/auth/forgot-password' className='login__form-forgotPassword'>
                <span>Quên mật khẩu?</span>
              </a>
            </div>
            {/* Remember me */}
            {/* <div className='login__form-row'>
              <div className='login__form-remember'>
                <label className='login__form-remember-wrapper'>
                  <input className='login__form-checkbox' type='checkbox' />
                  <span className='login__form-checkbox-label'>Ghi nhớ tôi</span>
                </label>
              </div>
            </div> */}
            {/* login button */}
            <div className='login__form-row'>
              <button onClick={onSubmit} className='login__form-btn'>
                Đăng nhập
              </button>
            </div>
          </div>
        </form>
        {/*end form login*/}
      </div>
    </div>
  );
};

export default Login;

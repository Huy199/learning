import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';

import paymentIcon from '../../../assets/icons/paymentIcon.svg';
import helpIcon from '../../../assets/icons/helpIcon.svg';
import hamburgerIcon from '../../../assets/icons/humburgerIcon.svg';
import ringGreyIcon from '../../../assets/icons/ringGreyIcon.svg';
import logo from '../../../assets/images/greenifyLogo.svg';
import { selectToken } from '../../../features/auth/authSlice';
import { modalActions } from '../../../features/modal/modal';
import { ModalComponentName } from '../../../utils/enum';
import { studentRoutes } from '../../../utils/routers';
import DropdownInfo from '../../admin/dropdownInfo';
import MultiLanguageDropdown from '../../common/multiLanguageDropdown';
import DropdownStudentPageInfo from '../../student/dropdownStudentPageInfo';
import './header.css';

const Header = () => {
  const token = useSelector(selectToken);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  function activeRoute(routeName) {
    return location.pathname.includes(routeName);
  }

  const openHamburgerMenu = () => {
    dispatch(modalActions.changeModalContent(ModalComponentName.HAMBURGER_MENU));
    dispatch(modalActions.showModal());
  };

  const openNotification = () => {
    dispatch(modalActions.changeModalContent(ModalComponentName.NOTIFICATION_STUDENT));
    dispatch(modalActions.showModal());
  };

  const handleReturnHomePage = () => {
    if (token === 'admin') {
      history.push('/admin');
    }
    if (token === 'student') {
      history.push('/students');
    }
    if (token === 'tutor') {
      history.push('/tutors');
    }
    if (!token) {
      history.push('/');
    }
  };

  return (
    <div className='landing__header'>
      <div className='landing__header__container'>
        {/* landing__header left */}
        <div className='landing__header__left'>
          <button className='landing__header__left-logo' onClick={handleReturnHomePage}>
            <img src={logo} alt='logo' />
          </button>
          <div className='landing__header__left-container'>
            {studentRoutes.map((menu, idx) => {
              const isActiveRoute = activeRoute(menu.path) ? ' landing__header__left-item-active' : '';
              return (
                <span key={idx} className={'landing__header__left-item' + isActiveRoute}>
                  <Link to={menu.layout + menu.path}>{menu.name}</Link>
                </span>
              );
            })}
          </div>
        </div>
        {/* landing__header right */}
        <div className='landing__header__right'>
          {token === 'student' && <button className='landing__header__rightBuyHours'>Mua thêm giờ</button>}
          <div className='landing__header__rightDropdown'>
            <MultiLanguageDropdown />
          </div>
          <div className='landing__header__help'>
            <button className='landing__header__btn__helpIcon'>
              <img src={helpIcon} alt='help icon' className='h-9 w-9' />
            </button>
          </div>
          {token ? (
            <>
              {token === 'student' ? (
                <>
                  <div className='landing__header__payment'>
                    <button
                      className='landing__header__btn__icon'
                      onClick={() => history.push(`/student_profile/payments/detail-payment`)}
                    >
                      <img className='landing__header__icon h-9 w-9' src={paymentIcon} alt='icon' />
                    </button>
                  </div>

                  <div className='landing__header__notification' onClick={openNotification}>
                    <button className='landing__header__btn__icon'>
                      <img className='landing__header__icon h-9 w-9' src={ringGreyIcon} alt='icon' />
                      <div className='landing__header__ring-number'>
                        <span>5</span>
                      </div>
                    </button>
                  </div>
                  <div className='studentPage__info__dropdownAvt'>
                    <DropdownStudentPageInfo />
                  </div>
                </>
              ) : null}
              {token === 'admin' ? <DropdownInfo /> : null}
            </>
          ) : (
            <button className='landing__header__right-login' onClick={() => history.push('/auth')}>
              {/* <img src={loginIcon} className='landing__header-loginIcon h-9 w-9' alt='icon' /> */}
              <span>Đăng nhập</span>
            </button>
          )}
          <button onClick={openHamburgerMenu} className='landing__header__hamburger-menu'>
            <img src={hamburgerIcon} className='hamburger__icon w-14 h-14' alt='icon' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import cookies from 'js-cookie';
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { languageDropdownData } from '../../../dataMock/headerDropdownData';
import { modalActions } from '../../../features/modal/modal';
import { landingRoutes } from '../../../utils/routers';
import SelectForm from '../../common/selectForm';
import { useOutside } from '../../../utils/help';
import './hamburgerMenu.css';

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const [animationClose, setAnimationClose] = useState('');

  const currentLanguageCode = cookies.get('i18next') || 'vi';
  const currentLanguage = languageDropdownData.find((language) => language.code === currentLanguageCode);

  const languageRef = useRef(null);
  const closeHamburgerMenu = () => {
    setAnimationClose(' hamburgerMenu__container-animation ');
    setTimeout(() => {
      dispatch(modalActions.hideModal());
    }, 400);
  };
  useOutside(languageRef, closeHamburgerMenu);
  return (
    <div ref={languageRef} className={'hamburgerMenu__container' + animationClose} onClick={(e) => e.stopPropagation()}>
      <div className='hamburgerMenu__header'>
        <div className='hamburgerMenu__btn-cancel'>
          <button onClick={closeHamburgerMenu} style={{ height: 'auto' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
      </div>
      <div className='hamburgerMenu__body'>
        <div className='hamburger__body-menuItem'>
          <span className='hamburger__menu-item-span'>Home</span>
          {landingRoutes.map((menu, idx) => (
            <span key={idx} className='hamburger__menu-item-span'>
              <Link to={menu.path}>{menu.name}</Link>
            </span>
          ))}
          <span className='hamburger__menu-item-span'>
            <button>
              <Link to='/auth/login'>Đăng nhập</Link>
            </button>
          </span>
        </div>
        <div className='hamburger__body-menuOption'>
          <div className='hamburger__menuOption-item'>
            <SelectForm languageDropdownData={languageDropdownData} currentLanguage={currentLanguage} />
          </div>

          {/* <div className='hamburger__menuOption-item'>
            <SelectForm data={currencyUnit} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

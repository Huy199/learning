import React from 'react';
import { useDispatch } from 'react-redux';

import ringGreyIcon from '../../../assets/icons/ringGreyIcon.svg';
import { modalActions } from '../../../features/modal/modal';
import { ModalComponentName } from '../../../utils/enum';
import MultiLanguageDropdown from '../../common/multiLanguageDropdown';
import DropdownInfo from '../dropdownInfo';
import './header.css';

const Header = () => {
  const dispatch = useDispatch();

  const openNotification = () => {
    dispatch(modalActions.changeModalContent(ModalComponentName.NOTIFICATION));
    dispatch(modalActions.showModal());
  };

  return (
    <div className='headerAdmin'>
      <div className='headerAmin__menu'>
        {/* <button className="headerAdmin__pricing">
          <img className = 'headerAdmin__star__icon h-6 w-5' src={starIcon}/>Pricing
          </button> */}
        <div className='headerAdmin__laguage'>
          <MultiLanguageDropdown isAdmin />
        </div>
        <div className='headerAdmin__notification'>
          <button className='headerAdmin__btn__ring__icon' onClick={openNotification}>
            <img className='headerAdmin__ring__icon h-9 w-9' src={ringGreyIcon} alt='ring-icon' />
            <div className='headerAdmin__ring-number'>
              <span>5</span>
            </div>
          </button>
        </div>
        <div className='headerAdmin__info__dropAvt'>
          <DropdownInfo />
        </div>
      </div>
    </div>
  );
};

export default Header;

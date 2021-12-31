import React, { useState, useRef } from 'react';
import i18next from 'i18next';

import { useOutside } from '../../../utils/help';
import './selectForm.css';
import downIcon from '../../../assets/icons/arrowDownIcon.svg';
import downAdminIcon from '../../../assets/icons/arrowDownBlueIcon.svg';

const SelectForm = ({ languageDropdownData, currentLanguage, isAdmin }) => {
  const [openSelectForm, setOpenSelectForm] = useState(false);
  const formRef = useRef(null);
  useOutside(formRef, setOpenSelectForm);
  return (
    <div ref={formRef} className='select__form-container'>
      <div className='select__form-title'>
        <button
          onClick={() => setOpenSelectForm(!openSelectForm)}
          className={'relative select-form select-arrow-custom z-10 '}
        >
          {currentLanguage.name}
        </button>
        <img src={isAdmin ? downAdminIcon : downIcon} alt='arrowDownIcon' className='arrow_down-icon' />
      </div>
      {openSelectForm && (
        <ul className='select__form-content'>
          {languageDropdownData.map((items) => (
            <li
              className={'select__form-li ' + items.code}
              key={items.code}
              value={items.code}
              onClick={() => i18next.changeLanguage(items.code)}
            >
              {items.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectForm;

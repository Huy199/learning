import cookies from 'js-cookie';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import downIcon from '../../../assets/icons/arrowDownIcon.svg';
import downAdminIcon from '../../../assets/icons/arrowDownBlueIcon.svg';
import { languageDropdownData } from '../../../dataMock/headerDropdownData';
import { useOutside } from '../../../utils/help';
import SelectForm from '../selectForm';
import './multiLanguageDropdown.css';

const MultiLanguageDropdown = ({ isAdmin }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const currentLanguageCode = cookies.get('i18next') || 'vi';
  const currentLanguage = languageDropdownData.find((language) => language.code === currentLanguageCode);
  const { t } = useTranslation();
  const wrapperRef = useRef(null);

  useOutside(wrapperRef, setOpenDropdown);
  return (
    <div className='dropdown__header' ref={wrapperRef}>
      <div className='dropdown__wrap-btn'>
        <button onClick={() => setOpenDropdown(!openDropdown)} type='button' className='dropdown__btn'>
          {currentLanguage.name}
          <img src={isAdmin ? downAdminIcon : downIcon} alt='arrowDownIcon' className='-mr-1 ml-2 h-5 w-5' />
        </button>
      </div>

      {openDropdown && (
        <div className='dropdown__content'>
          <div className='py-1' role='none'>
            <div className='dropdown__container'>
              <div className='dropdown__title'>{t('change_language_title')}</div>
              <SelectForm
                languageDropdownData={languageDropdownData}
                currentLanguage={currentLanguage}
                isAdmin={isAdmin}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiLanguageDropdown;

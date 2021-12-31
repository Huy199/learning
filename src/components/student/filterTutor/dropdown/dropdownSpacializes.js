import React, { useState, useRef } from 'react';
import { useOutside } from '../../../utils/help';
import './dropdown.css';

/*TODO: @dev-duc_subFilter__dropdown_Dec-03-2021*/

const DropdownSpacialize = () => {
  const [isActiveView, setIsActiveView] = useState(false);
  const [checked, setChecked] = useState([true]);
  if (checked === true) {
  }
  const wrapperRef = useRef(null);
  useOutside(wrapperRef, setIsActiveView);

  return (
    <div ref={wrapperRef}>
      <div className={isActiveView ? 'subFilter__selection-active' : 'subFilter__selection'}>
        <button
          className='subFilter__selection-core'
          onClick={(e) => {
            setIsActiveView(!isActiveView);
          }}
        >
          <span className='selection__core-title'>Chuyên ngành</span>
          <div className='subFilter__status'>
            <div className='subFilter__status-container'>
              <span className='subFilter__status-text'>1</span>
            </div>
          </div>
          <svg
            height='8'
            viewBox='0 0 12 8'
            width='12'
            xmlns='http://www.w3.org/2000/svg'
            className='DropdownIconNewDesign___30V-9'
          >
            <path d='M6 4.586L10.293.293l1.414 1.414L6 7.414.293 1.707 1.707.293z'></path>
          </svg>
        </button>
      </div>
      {isActiveView && (
        <div className='subFilter__dropdown'>
          <div className='subFilter__dropdown-container'>
            <label className='subFilter__item'>
              <input className='subFilter__checkbox' type='checkbox' />
              <span className='subFilter__title'>English</span>
            </label>
            <label className='subFilter__item'>
              <input className='subFilter__checkbox' type='checkbox' />
              <span className='subFilter__title'>English</span>
            </label>
            <label className='subFilter__item'>
              <input className='subFilter__checkbox' type='checkbox' />
              <span className='subFilter__title'>English</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};
/* ENDTODO: @dev-duc_subFilter__dropdown_Dec-03-2021 */

export default DropdownSpacialize;

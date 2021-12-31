import React from 'react';

import './optionForm.css';

const OptionForm = () => {
  return (
    <div className='bg-white' style={{ borderRadius: '12px' }}>
      <select className={'relative optionForm optionForm__arrow-custom z-10'} required>
        <option value='' disabled hidden></option>

        <option className='optionForm-item'></option>
      </select>
      <img src='#' alt='' className='absolute right-2 bottom-2 z-1' />
    </div>
  );
};

export default OptionForm;

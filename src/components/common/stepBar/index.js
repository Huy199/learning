import React from 'react';

import './stepBar.css';

const StepBar = ({ step }) => {
  return (
    <div className='stepBar__container'>
      <div className='stepBar__wrapper'>
        <div
          className={
            'stepBar__progress stepBar__firstProgress ' +
            (step === 1 ? 'stepBar__progress-inprogress' : 'stepBar__progress-passed')
          }
        >
          <span className='stepBar__progress-text '>1</span>
        </div>
      </div>

      <div className='stepBar__wrapper'>
        <div className='stepBar_bar__left'>
          <div className={'stepBar_bar-container ' + (step >= 2 ? 'stepBar_bar--active' : '')}></div>
        </div>
        <div className='stepBar_bar__right'>
          <div className={'stepBar_bar-container ' + (step >= 3 ? 'stepBar_bar--active' : '')}></div>
        </div>
        <div
          className={
            'stepBar__progress stepBar__secondProgress ' +
            (step === 2 ? ' stepBar__progress-inprogress' : step > 2 ? ' stepBar__progress-passed' : '')
          }
        >
          <span className='stepBar__progress-text '>2</span>
        </div>
      </div>

      <div className='stepBar__wrapper'>
        <div
          className={'stepBar__progress stepBar__thirdProgress ' + (step === 3 ? ' stepBar__progress-inprogress' : '')}
        >
          <span className={'stepBar__progress-text ' + (step === 3 ? 'text-white !important' : '')}>3</span>
        </div>
      </div>
    </div>
  );
};

export default StepBar;

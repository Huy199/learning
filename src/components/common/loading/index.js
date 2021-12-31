import React from 'react';

import './loading.css';

const Loading = ({ isStudent }) => {
  return (
    <div id='loading'>
      <div
        className='loader'
        style={{ borderTopColor: isStudent ? 'var(--colorBlue)' : 'var(--colorBlueAdmin)' }}
      ></div>
    </div>
  );
};

export default Loading;

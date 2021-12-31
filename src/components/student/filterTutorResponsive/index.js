import React from 'react';
import './filterTutorResponsive.css';

const FilterTutorResponsive = () => {
  return (
    <div className='banner__filterRes-wrap'>
      <div className='banner__filterRes'>
        <div className='banner__filterRes-container'>
          {/* Search */}
          <div className='banner__filterRes-search'>
            <div className='filterRes__search'>
              <svg
                className='filterRes__search-icon'
                width='15'
                height='16'
                viewBox='0 0 15 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M6.5.642a6.5 6.5 0 0 1 5.249 10.335l2.958 2.958-1.414 1.415-2.958-2.959A6.5 6.5 0 1 1 6.5.642zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z'
                  fill='#3BB2BD'
                ></path>
              </svg>
              <input type='text' className='filterRes__search-input' placeholder='Select subject' />
              <div className='filterRes__search-clear'>
                <svg
                  height='12'
                  viewBox='0 0 12 12'
                  width='12'
                  xmlns='http://www.w3.org/2000/svg'
                  className='filterRes__search-clearIcon'
                >
                  <path d='M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z'></path>
                </svg>
              </div>
            </div>
          </div>
          {/* End Search */}

          {/* Filter */}
          <div className='banner__filterRes-filter'>
            <button className='filterRes__filter'>
              <svg className='filterRes__filter-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 38.15' width='18'>
                <path
                  d='M1.28 7.63h5.23a6.39 6.39 0 0 0 12.51 0h19.7a1.27 1.27 0 1 0 0-2.54H19a6.39 6.39 0 0 0-12.51 0H1.26a1.27 1.27 0 1 0 .02 2.54zm11.49-5.09a3.82 3.82 0 1 1-3.83 3.82 3.83 3.83 0 0 1 3.83-3.82zm25.95 27.98H19a6.39 6.39 0 0 0-12.51 0H1.26a1.27 1.27 0 1 0 0 2.54h5.23a6.39 6.39 0 0 0 12.51 0h19.7a1.27 1.27 0 1 0 .02-2.54zm-26 5.09a3.82 3.82 0 1 1 3.83-3.82 3.83 3.83 0 0 1-3.78 3.82zm26-17.8h-5.23a6.39 6.39 0 0 0-12.51 0H1.28a1.27 1.27 0 1 0 0 2.54H21a6.39 6.39 0 0 0 12.51 0h5.23a1.27 1.27 0 1 0-.02-2.54zM27.23 22.9a3.82 3.82 0 1 1 3.83-3.82 3.83 3.83 0 0 1-3.83 3.81z'
                  className='cls-1'
                  fill='#3BB2BD'
                ></path>
              </svg>
              <div className='filterRes__filter-title'>Filters</div>
              <div className='filterRes__filter-right '>
                <svg
                  height='12'
                  viewBox='0 0 8 12'
                  width='8'
                  xmlns='http://www.w3.org/2000/svg'
                  className='filterRes__filter-rightIcon'
                >
                  <path d='M4.732 5.854L.44 1.56 1.854.146 7.56 5.854 1.854 11.56.439 10.146z'></path>
                </svg>
              </div>
            </button>
          </div>
          {/* End Filter */}
        </div>
      </div>
    </div>
  );
};

export default FilterTutorResponsive;

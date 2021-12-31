import './courseFilter.css';

import downIcon from '../../../../assets/icons/arrowDownBlueIcon.svg';
import arrowUp from '../../../../assets/icons/arrowUpIcon.svg';
import { useRef, useState } from 'react';
import { useOutside } from '../../../../utils/help';

const StudentCourseFilter = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [filter, setFilter] = useState('');

  //onblur dropdown
  const filterDropdownRef = useRef(null);
  useOutside(filterDropdownRef, setIsOpenFilter);

  const handleOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  return (
    <>
      <div ref={filterDropdownRef} id='courseFilter' className='filter__wrapper' onClick={handleOpenFilter}>
        <button className='filter__btn'>
          <span className='block'>Lọc theo{filter && `: ${filter}`}</span>
          <img src={!isOpenFilter ? downIcon : arrowUp} alt='arrowDownIcon' className='-mr-1 ml-2 h-9 w-5' />
        </button>

        {isOpenFilter && (
          <ul className='filter-dropdown__wrapper'>
            <li className='filter-dropdown__item filter-dropdown__item-border' onClick={() => setFilter('')}>
              Tất cả
            </li>
            <li className='filter-dropdown__item filter-dropdown__item-border' onClick={() => setFilter('Đã đăng ký')}>
              Đã đăng ký
            </li>
            <li className='filter-dropdown__item filter-dropdown__item-border' onClick={() => setFilter('Đã học')}>
              Đã học
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default StudentCourseFilter;

import './filter.css';

import downIcon from '../../../assets/icons/arrowDownBlueIcon.svg';
import arrowUp from '../../../assets/icons/arrowUpIcon.svg';
import { useRef, useState } from 'react';
import { useOutside } from '../../../utils/help';

const Filter = ({ selected, setSelected, filter }) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  //onblur dropdown
  const filterDropdownRef = useRef(null);
  useOutside(filterDropdownRef, setIsOpenFilter);

  const handleOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  return (
    <>
      <div ref={filterDropdownRef} className='filter__wrapper' onClick={handleOpenFilter}>
        <button className='filter__btn'>
          <span className='block'>Lọc theo : {filter[selected]}</span>
          <img src={!isOpenFilter ? downIcon : arrowUp} alt='arrowDownIcon' className='-mr-1 ml-2 h-9 w-5' />
        </button>

        {isOpenFilter && (
          <ul className='filter-dropdown__wrapper'>
            {Object.keys(filter).map((keys, idx) => (
              <li
                className='filter-dropdown__item filter-dropdown__item-border'
                key={idx}
                onClick={(e) => {
                  setSelected(keys);
                  setIsOpenFilter(false);
                }}
              >
                {filter[keys]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Filter;

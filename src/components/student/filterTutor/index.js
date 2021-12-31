import { useRef, useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import { filterTimeBlock, filterWeekday } from '../../../utils/constants';
import { useOutside } from '../../../utils/help';
import arrowDownIcon from '../../../assets/icons/arrowDownIcon.svg';
import dotIcon from '../../../assets/icons/dotIcon.svg';
import './filterTutor.css';

const FilterTutor = ({ languageFilterTitle, priceFilterTitle, timeFilterTitle }) => {
  const [fee, setFee] = useState({
    min: 1,
    max: 40,
  });
  const [handleTime, setHandleTime] = useState([]);
  const [handleDay, setHandleDay] = useState([]);
  const [isOpenTimeDropDown, setIsOpenTimeDropDown] = useState(false);
  const [isOpenFilterPrice, setIsOpenFilterPrice] = useState(false);
  const [isOpenTutor, setIsOpenTutor] = useState(false);
  const [timeActiveIndexArr, setTimeActiveIndexArr] = useState(filterTimeBlock);
  const [weekDayActiveIndexArr, setWeekDayActiveIndexArr] = useState(filterWeekday);
  const [language, setLanguage] = useState('Ngôn ngữ');
  const dropdownRef = useRef(null);
  const filterPriceRef = useRef(null);
  const filterTutorRef = useRef(null);
  useOutside(dropdownRef, setIsOpenTimeDropDown);
  useOutside(filterPriceRef, setIsOpenFilterPrice);
  useOutside(filterTutorRef, setIsOpenTutor);

  const handleTimeClick = (id) => {
    const updatedItems = timeActiveIndexArr.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isActive: !item.isActive,
        };
      } else {
        return item;
      }
    });
    setTimeActiveIndexArr(updatedItems);
  };
  const handleWeekdayClick = (id) => {
    const updatedItems = weekDayActiveIndexArr.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isActive: !item.isActive,
        };
      } else {
        return item;
      }
    });
    setWeekDayActiveIndexArr(updatedItems);
  };

  const isVietNamese = (id) => {
    setIsOpenTutor(!isOpenTutor);
    id === 1 ? setLanguage('Tiếng Việt') : setLanguage('Tiếng Nhật');
  };
  return (
    <div className='banner__filter-wrap'>
      {/* BANNER_FILTER */}
      <div className='banner__filter'>
        <div className='banner__filter-item'>
          {/*  */}
          <div className='filter__item-content' ref={filterTutorRef}>
            <span className='filter__item-wrap-title'>
              <span>{languageFilterTitle}</span>
            </span>
            <div className='filter__item-popular' onClick={() => setIsOpenTutor(!isOpenTutor)}>
              <div className='filter__item-popular-wrap'>
                <label className='banner__filter__laguage focus:outline-none' htmlFor='cowbell'>
                  {language}
                </label>
                <div className='popular-icon'>
                  <img src={arrowDownIcon} alt='arrowDownIcon' className='h-7 w-7' />
                </div>
              </div>
            </div>
            {isOpenTutor && (
              <div className='filter-tutor__input'>
                <div onClick={() => isVietNamese(1)} className='filter-choose-language'>
                  Tiếng Việt
                </div>
                <div onClick={() => isVietNamese(2)} className='filter-choose-language'>
                  Tiếng Nhật
                </div>
              </div>
            )}
          </div>
          {/*  */}
          <div className='filter__item-content' ref={filterPriceRef}>
            <div className='cursor-pointer' onClick={() => setIsOpenFilterPrice(!isOpenFilterPrice)}>
              <span className='filter__item-wrap-title '>
                <span className='mt-2'>{priceFilterTitle}</span>
              </span>
              <div className='filter__item-popular'>
                <div className='filter__item-popular-wrap'>
                  <div className='filter__item-price'>
                    <label className='filter__label-price cursor-pointer' htmlFor='cowbell'>
                      {`$ ${fee.min} - $ ${fee.max}`}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='popular-icon' onClick={() => setFee({ min: 1, max: 40 })} title='Đặt lại'>
              {/* <svg
                height='12'
                width='12'
                viewBox='0 0 12 12'
                xmlns='http://www.w3.org/2000/svg'
                className='ClearIcon___35wVk'
              >
                <path d='M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z'></path>
              </svg> */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 24 24'
                height='15'
                width='15'
              >
                <g fill='none'>
                  <path
                    d='M7.207 2.543a1 1 0 0 1 0 1.414L5.414 5.75h7.836a8 8 0 1 1-8 8a1 1 0 1 1 2 0a6 6 0 1 0 6-6H5.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0z'
                    fill='#3bb3bd'
                  ></path>
                </g>
              </svg>
            </div>
            {isOpenFilterPrice && (
              <div className='filter-price__input'>
                <InputRange
                  maxValue={40}
                  minValue={1}
                  step={1}
                  onChange={(value) => setFee({ ...fee, ...value })}
                  value={fee}
                  formatLabel={() => ''}
                />
              </div>
            )}
          </div>
          {/*  */}
          <div className='filter__item-content' ref={dropdownRef}>
            <div className='filter__item--container' onClick={() => setIsOpenTimeDropDown(!isOpenTimeDropDown)}>
              <span className='filter__item-wrap-title'>
                <span>{timeFilterTitle}</span>
              </span>
              <div className='filter__item-popular'>
                <div className='filter__item-popular-wrap'>
                  {handleTime.length === 0 && handleDay.length === 0
                    ? 'Chọn thời gian'
                    : handleTime.map((item) => <span>{item.hours} </span>)}

                  {handleDay.length !== 0 ? <img src={dotIcon} alt='' className='filter__dotIcon' /> : null}

                  {handleDay.map((item) => (
                    <span>{item.day} </span>
                  ))}

                  <div className='popular-icon'>
                    <img src={arrowDownIcon} alt='arrowDownIcon' className='h-7 w-7' />
                  </div>
                </div>
              </div>
            </div>
            {isOpenTimeDropDown && (
              <ul className='filter-popular__dropdown'>
                <li className='filter-popular__label'>Thời gian trong ngày, theo múi giờ của bạn</li>
                <li className='time__block-wrapper'>
                  <div className='time__block'>
                    {timeActiveIndexArr.map((item) => (
                      <div
                        className={`time__item ${item.isActive ? 'time-item-active' : ''}`}
                        key={item.id}
                        onClick={() => {
                          if (item.isActive) {
                            let timeUpdate = handleTime.filter((time) => time.id !== item.id);
                            setHandleTime(timeUpdate);
                            handleTimeClick(item.id);
                          } else {
                            handleTimeClick(item.id);
                            setHandleTime([...handleTime, { hours: item.hours, id: item.id }]);
                          }
                        }}
                      >
                        <div className='time__item-icon'>
                          <img src={item.isActive ? item.iconActive : item.icon} alt='' />
                        </div>
                        <div className='time__item-text-wrapper'>
                          <h3 className='time__item-hours'>{item.hours}</h3>
                          <p className='time__item-text'>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
                <li className='weekday__wrapper'>
                  <h5>Các ngày trong tuần</h5>
                  <div className='weekday__container'>
                    {weekDayActiveIndexArr.map((item, index) => (
                      <div
                        className={`weekday__item ${item.isActive ? 'weekday__item-active' : ''}`}
                        key={index}
                        onClick={() => {
                          if (item.isActive) {
                            let dayUpdate = handleDay.filter((day) => day.id !== item.id);
                            handleWeekdayClick(item.id);
                            setHandleDay(dayUpdate);
                          } else {
                            handleWeekdayClick(item.id);
                            setHandleDay([...handleDay, { id: item.id, day: item.text }]);
                          }
                        }}
                      >
                        {item.text}
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTutor;

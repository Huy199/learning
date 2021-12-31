import React from 'react';

import arrowLeftIcon from '../../../assets/icons/arrowLeftIcon.svg';
import arrowEndLeftIcon from '../../../assets/icons/arrowEndLeftIcon.svg';
import arrowRightIcon from '../../../assets/icons/arrowRightIcon.svg';
import arrowEndLRightIcon from '../../../assets/icons/arrowEndRightIcon.svg';

import './pagination.css';

const Pagination = ({ filter, total, handlePageChange }) => {
  const { _page, _limit } = filter;
  const totalPage = Math.ceil(total / _limit);

  const goToFirstPage = () => {
    if (_page === 1) return;
    const newFilter = {
      ...filter,
      _page: 1,
    };
    handlePageChange(newFilter);
  };

  const goToPreviousPage = () => {
    if (_page === 1) return;
    const newFilter = {
      ...filter,
      _page: _page - 1,
    };
    handlePageChange(newFilter);
  };

  const goToNextPage = () => {
    if (_page === totalPage) return;
    const newFilter = {
      ...filter,
      _page: _page + 1,
    };
    handlePageChange(newFilter);
  };

  const goToPageEnd = () => {
    if (_page === totalPage) return;
    const newFilter = {
      ...filter,
      _page: totalPage,
    };
    handlePageChange(newFilter);
  };

  return (
    <div className='pagination__container'>
      <div className='pagination__btn-container'>
        <button className={_page === 1 ? 'pagination__btn-disable' : 'pagination__btn'} onClick={goToFirstPage}>
          <img src={arrowEndLeftIcon} alt='' className={_page === 1 ? 'pagination__img-disable' : ''} />
        </button>
        <button className={_page === 1 ? 'pagination__btn-disable' : 'pagination__btn'} onClick={goToPreviousPage}>
          <img src={arrowLeftIcon} alt='' className={_page === 1 ? 'pagination__img-disable' : ''} />
        </button>
        <h5 className='pagination__text'>
          Trang {_page} / {totalPage}
        </h5>
        <button className={_page === totalPage ? 'pagination__btn-disable' : 'pagination__btn'} onClick={goToNextPage}>
          <img src={arrowRightIcon} alt='' className={_page === totalPage ? 'pagination__img-disable' : ''} />
        </button>
        <button className={_page === totalPage ? 'pagination__btn-disable' : 'pagination__btn'} onClick={goToPageEnd}>
          <img src={arrowEndLRightIcon} alt='' className={_page === totalPage ? 'pagination__img-disable' : ''} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

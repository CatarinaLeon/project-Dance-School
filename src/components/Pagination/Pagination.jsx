// import { useState } from 'react';
import s from './Pagination.module.css';
import { ReactComponent as Arrow } from '../../images/SVG/icon-arrow-right.svg';

export default function Pagination({
  totalItems,
  setCurrentPage,
  itemsPerPage,
  currentPage,
}) {
  // console.log('currentPage', currentPage);

  const pageNumbers = [];

  for (let i = 1; i <= Math.floor(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = pageNumbers => setCurrentPage(pageNumbers);

  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(prev => prev + 1);
    }
  };
  const prevPage = () => {
    if (currentPage <= pageNumbers.length) {
      setCurrentPage(prev => prev - 1);
    }
    if (currentPage === 1) {
      setCurrentPage(1);
    }
  };

  return (
    <div className={s.paginationContaner}>
      <ul className={s.pagination}>
        {pageNumbers.map(number => (
          <li
            className={s.paginationItem}
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`${s.paginationBtn} ${s.prev}`}
        onClick={prevPage}
      >
        <Arrow className={s.buttonArrowIcon} />
      </button>
      <button
        type="button"
        className={`${s.paginationBtn} ${s.next}`}
        onClick={nextPage}
      >
        <Arrow className={s.buttonArrowIcon} />
      </button>
    </div>
  );
}

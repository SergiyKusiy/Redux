import React from 'react';

const Pagination = ({ goNext, goPrev, currentPage, totalItems, itemsPerPage }) => {
  const currentPageNum = currentPage + 1;

  const isPrevDisable = currentPageNum > 1;

  const isNextDisable = currentPageNum * itemsPerPage >= totalItems;

  return (
    <div className="pagination">
      <button onClick={goPrev} className="btn" disabled={!isPrevDisable}>
        {isPrevDisable && '←'}
      </button>
      <span className="pagination__page">{currentPageNum}</span>
      <button onClick={goNext} className="btn" disabled={isNextDisable}>
        {isNextDisable ? '' : '→'}
      </button>
    </div>
  );
};
export default Pagination;
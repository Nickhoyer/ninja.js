import React from 'react';
import cx from 'classnames';

export const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  const renderedPageNumber = pageNumber + 1;

  const click = (e) => {
    e.preventDefault();
    onChange(pageNumber);
  };

  return (
    <li className='page-item mr-1'>
      <button
        className={cx('page-link', {
          'button-outline': currentPageNumber === pageNumber,
        })}
        onClick={click}>
        {renderedPageNumber}
      </button>
    </li>
  );
};

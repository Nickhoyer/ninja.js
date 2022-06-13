import React from 'react';

export const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  const renderedPageNumber = pageNumber + 1;

  const click = (e) => {
    e.preventDefault();
    onChange(pageNumber);
  };

  if (currentPageNumber === pageNumber) {
    return (
      <li className='page-item mr-1'>
        <button className='page-link button-outline' onClick={click}>
          {renderedPageNumber}
        </button>
      </li>
    );
  }
  return (
    <li className='page-item mr-1'>
      <button className='page-link' onClick={click}>
        {renderedPageNumber}
      </button>
    </li>
  );
};

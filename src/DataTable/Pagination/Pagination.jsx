import React from 'react';

import { Page } from './Page';

export const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  if (totalNumberOfPages <= 0) return null;

  const pages = Array.from(Array(totalNumberOfPages).keys()).map((pageNumber) => {
    return (
      <Page
        key={pageNumber}
        currentPageNumber={currentPageNumber}
        pageNumber={pageNumber}
        onChange={onChange}
      />
    );
  });

  return <ul className='pagination'>{pages}</ul>;
};

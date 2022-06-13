import React, { useEffect, useState } from 'react';

import { Pagination } from './Pagination/Pagination';
import { Row } from './Row';
import { Search } from './Search';

export const DataTable = ({ rows, rowsPerPage }) => {
  const [filteredRows, setFilteredRows] = useState(rows);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);
  const [rowsToRender, setRowsToRender] = useState();

  useEffect(() => {
    if (rowsPerPage !== 0) setTotalNumberOfPages(Math.ceil(rows.length / rowsPerPage));
  }, [rows.length, rowsPerPage]);

  useEffect(() => {
    const startIndex = currentPageNumber * rowsPerPage;
    setRowsToRender(
      filteredRows
        .slice(startIndex, startIndex + rowsPerPage)
        .map((row) => <Row key={row.per_id} row={row} />),
    );
  }, [currentPageNumber, rowsPerPage, filteredRows]);

  const onSearch = (searchResult) => {
    setFilteredRows(searchResult);
    setCurrentPageNumber(0);
  };

  return (
    <div>
      <Search rows={rows} onSearch={onSearch} />
      <table>
        <tbody>{rowsToRender}</tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={setCurrentPageNumber}
      />
    </div>
  );
};

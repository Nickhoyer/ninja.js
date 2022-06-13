import React from 'react';

export const Search = ({ onSearch, rows }) => {
  const onChange = (e) => {
    const searchQuery = e.target.value;
    const filteredRows = rows.filter(
      (row) =>
        row.name1.toLowerCase().search(searchQuery.toLowerCase()) > -1 ||
        (row.email && row.email.toLowerCase().search(searchQuery.toLowerCase()) > -1),
    );

    onSearch(filteredRows);
  };

  return (
    <div className='p-b-1'>
      <input type='search' className='form-control' placeholder='Søg brugere' onChange={onChange} />
    </div>
  );
};

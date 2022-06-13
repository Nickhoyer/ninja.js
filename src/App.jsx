import './App.css';

import React from 'react';

import { DataTable } from './DataTable/DataTable';

export const App = ({ rows }) => {
  return (
    <div className='container mt-3'>
      <DataTable rows={rows} locale='da' rowsPerPage={5} />
    </div>
  );
};

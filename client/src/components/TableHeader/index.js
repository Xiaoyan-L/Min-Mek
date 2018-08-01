import React from 'react';

const TableHeader = ({ headers }) => (
  <thead>
    <tr>
      {headers.map((header,index) => (
        <th key={index}>
          {header}
        </th>
      ))}
      <th>
        Delete
      </th>
    </tr>
  </thead>
);

export default TableHeader;
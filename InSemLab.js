import React, { useState } from 'react';

const employeeData = [
  { name: 'John Doe', department: 'Sales', salary: 50000 },
  { name: 'Jane Smith', department: 'Marketing', salary: 60000 },
  { name: 'Bob Johnson', department: 'Sales', salary: 55000 },
  { name: 'Alice Brown', department: 'Marketing', salary: 65000 },
  { name: 'Mike Davis', department: 'IT', salary: 70000 },
];

function SortableTable() {
  const [data, setData] = useState(employeeData);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => handleSort('name')}>
            Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
          </th>
          <th style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => handleSort('department')}>
            Department {sortConfig.key === 'department' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
          </th>
          <th style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => handleSort('salary')}>
            Salary {sortConfig.key === 'salary' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#ffffff' }}>
            <td style={{ border: '1px solid black', padding: '10px' }}>{row.name}</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{row.department}</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{row.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SortableTable;

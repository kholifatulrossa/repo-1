import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';

const CustomTable = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 28, occupation: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },
    { id: 3, name: 'Alice Johnson', age: 24, occupation: 'Developer' },
  ];

  return (
    <Table aria-label="simple table" sx={{ borderRadius: '8px', overflow: 'hidden' }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography level="body2" fontWeight="bold">ID</Typography>
          </TableCell>
          <TableCell>
            <Typography level="body2" fontWeight="bold">Name</Typography>
          </TableCell>
          <TableCell>
            <Typography level="body2" fontWeight="bold">Age</Typography>
          </TableCell>
          <TableCell>
            <Typography level="body2" fontWeight="bold">Occupation</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.occupation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;

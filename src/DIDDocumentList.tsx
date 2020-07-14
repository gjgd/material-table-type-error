import React from 'react';
import MaterialTable from 'material-table';

export const Table = ({ list }: any) => {
  const columns: any = [
    {
      title: 'ID',
      field: 'id'
    },
  ];

  return (
    <MaterialTable
      title="title"
      columns={columns}
      data={list}
    />
  );
};

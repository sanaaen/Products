import { useMemo } from 'react';

export const useColumns = () => {
  return useMemo(
    () => [
      { Header: 'ID', accessor: '_id' },
      { Header: 'Thumbnail', accessor: 'thumbnail' },
      { Header: 'Features', accessor: 'features' },
      {
        Header: 'Specifications',
        id: 'spec',
        columns: [
          {
            Header: 'Name',
            id: 'spec.name',
            accessor: 'name',
          },
          {
            Header: 'Category',
            id: 'spec.category',
            accessor: 'category',
          },
          {
            Header: 'Value',
            id: 'spec.value',
            accessor: 'value',
          },
        ],
      },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Description', accessor: 'description' },
      { Header: 'Category', accessor: 'category' },
      { Header: 'Subcategory', accessor: 'subcategory' },
      { Header: 'Created At', accessor: 'createdAt' },
      { Header: 'Updated At', accessor: 'updatedAt' },
      { Header: 'Model ID', accessor: 'modelId' },
      { Header: 'PID', accessor: 'pid' },
      { Header: 'Datasheet', accessor: 'datasheet' },
      { Header: 'Link', accessor: 'link' },
    ],
    []
  );
};

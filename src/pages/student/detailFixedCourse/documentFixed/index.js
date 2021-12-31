import React from 'react';

import pdfIcon from '../../../../assets/icons/pdfIcon.svg';
import TableHeader from './table/tableHeader';
import TableItem from './table/tableItem';
import Search from '../../../../components/admin/search';

import './documentFixed.css';

const DocumentFixed = () => {
  const data = [
    {
      name: 'Toán.pdf',
      date: '20-10-2021',
      size: '20KB',
      icon: pdfIcon,
    },
    {
      name: 'Văn.pdf',
      date: '20-10-2021',
      size: '20KB',
      icon: pdfIcon,
    },
    {
      name: 'Anh.pdf',
      date: '20-10-2021',
      size: '20KB',
      icon: pdfIcon,
    },
    {
      name: 'Sinh.pdf',
      date: '20-10-2021',
      size: '20KB',
      icon: pdfIcon,
    },
    {
      name: 'Sử.pdf',
      date: '20-10-2021',
      size: '20KB',
      icon: pdfIcon,
    },
  ];

  return (
    <div id='documentFixed'>
      <div className='filter-search'>
        <Search />
        {/* <Filter /> */}
      </div>

      <TableHeader />
      <div className='table__item'>
        {data.map((item, index) => (
          <TableItem key={index} name={item.name} date={item.date} size={item.size} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default DocumentFixed;

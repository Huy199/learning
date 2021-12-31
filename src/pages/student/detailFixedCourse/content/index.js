import React, { useState } from 'react';
import { TabsMenu } from '../../../../utils/enum';
import AboutFixed from '../aboutFixed';
import DocumentFixed from '../documentFixed';
import ReviewFixed from '../reviewFixed';
import './content.css';

const DetailFixedCourseContent = () => {
  const tabsMenu = [
    { name: 'Thông tin', link: TabsMenu.ABOUT },
    { name: 'Đánh giá', link: TabsMenu.REVIEWS },
    { name: 'Tài liệu', link: TabsMenu.DOCUMENT },
  ];

  const [links, setLinks] = useState(TabsMenu.ABOUT);

  const activeComponent = {
    ABOUT: <AboutFixed />,
    REVIEWS: <ReviewFixed />,
    DOCUMENT: <DocumentFixed />,
  };
  return (
    <div id='detailFixed'>
      <div className='menu'>
        <ul className='menu-list'>
          {tabsMenu.map((props) => (
            <button
              className={links === props.link ? 'menu-item--active' : 'menu-item'}
              key={props.link}
              onClick={() => setLinks(props.link)}
            >
              {props.name}
            </button>
          ))}
        </ul>
      </div>
      <div>{activeComponent[links]}</div>
    </div>
  );
};

export default DetailFixedCourseContent;

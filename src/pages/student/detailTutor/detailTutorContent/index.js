import React, { useState } from 'react';

import { TabsMenu } from '../../../../utils/enum';
import AboutTutor from '../aboutTutor';
import ReviewTutor from '../reviewTutor';
import ResumeTutor from '../resumeTutor';
import ScheduleTutor from '../scheduleTutor';
import './detailTutorContent.css';

const DetailTutorContent = () => {
  const tabsMenu = [
    { name: 'Thông tin', link: TabsMenu.ABOUT },
    { name: 'Lịch trình', link: TabsMenu.SCHEDULE },
    { name: 'Đánh giá', link: TabsMenu.REVIEWS },
    { name: 'Tóm tắt', link: TabsMenu.RESUME },
  ];

  const [links, setLinks] = useState(TabsMenu.ABOUT);

  const activeComponent = {
    ABOUT: <AboutTutor />,
    SCHEDULE: <ScheduleTutor />,
    REVIEWS: <ReviewTutor />,
    RESUME: <ResumeTutor />,
  };
  return (
    <div className='detailTutor_content'>
      <div className='detailTutor_menu'>
        <ul className='detailTutor_menu-list'>
          {tabsMenu.map((props) => (
            <button
              className={links === props.link ? 'detailTutor_menu-item--active' : 'detailTutor_menu-item'}
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

export default DetailTutorContent;

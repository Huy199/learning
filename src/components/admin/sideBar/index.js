import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { adminPanelRouters } from '../../../utils/routers';
import logoImg from '../../../assets/images/greenifyLogo.svg';
import './sideBar.css';

const SideBar = () => {
  const location = useLocation();
  const activeRoute = (routeName) => {
    if (routeName.includes('*')) {
      routeName = routeName.replace('*', '');
    }

    return location.pathname.includes(routeName);
  };
  const link = (
    <ul className='sidebar__menu-ul'>
      {adminPanelRouters.map((item) => {
        if (item.hidden) {
          return null;
        }

        const isActiveMenu = activeRoute(item.path) ? ' active' : '';
        return (
          <Link key={item.path} to={item.layout + item.path}>
            <li className={'sidebar__menu-li' + isActiveMenu}>
              <img src={activeRoute(item.layout + item.path) ? item.iconEnabled : item.icon} alt='icon' />
              <h5>{item.name}</h5>
            </li>
          </Link>
        );
      })}
    </ul>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <a className='sidebar__logo' href='/admin'>
          <img src={logoImg} alt='logoImg' />
        </a>
      </div>

      <div className='sidebar__menu'>{link}</div>
    </div>
  );
};

export default SideBar;

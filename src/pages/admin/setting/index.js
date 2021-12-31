import React from 'react';
import { Link, Route, Switch, Redirect, useLocation } from 'react-router-dom';

import './adminSetting.css';
import { adminSetting } from '../../../utils/routers';
const AdminSetting = () => {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  return (
    <div className='adminSetting__container'>
      <hr className='adminSetting__line' />
      <div className='adminSetting__header-routes'>
        <div className='adminSetting__routes'>
          {adminSetting.map((route, index) => {
            const isActiveMenu = activeRoute(route.path) ? 'adminSetting__focus' : '';
            return (
              <div className='adminSetting__route' key={index}>
                <Link className={isActiveMenu} to={route.layout + route.path}>
                  <span>{route.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <Switch>
        {adminSetting.map((route, idx) => (
          <Route key={idx} path={route.layout + route.path} exact={route.exact}>
            {route.component}
          </Route>
        ))}
        <Redirect to='/admin/setting/info' />
      </Switch>
    </div>
  );
};

export default AdminSetting;

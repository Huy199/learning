import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { studentSettingRoutes } from '../../../utils/routers';
import './studentPageSettings.css';
import Modal from '../../../components/common/modal';
const Settings = () => {
  const location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  return (
    <div id='studentPageSettings'>
      <div className='container'>
        <nav className='left'>
          {studentSettingRoutes.map((route, index) => {
            const isActiveRoute = activeRoute(route.path) ? 'route-active' : '';
            return (
              <Link className={`route ${isActiveRoute}`} key={index} to={route.layout + route.path}>
                <span>{route.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className='right'>
          <div className='right__wrapper'>
            <Switch>
              {studentSettingRoutes.map((route, idx) => (
                <Route key={idx} path={route.layout + route.path} exact={route.exact}>
                  {route.component}
                </Route>
              ))}
              <Redirect to={`/student_profile/settings/account`} />
            </Switch>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Settings;

import React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';

// import Loading from '../../components/common/loading';
import Header from '../../components/landing/header';
import { studentProfile } from '../../utils/routers';
import './studentProfile.css';

const StudentProfile = () => {
  const location = useLocation();
  function activeRoute(routeName) {
    if (routeName.includes('*')) routeName = routeName.replace('*', '');
    return location.pathname.includes(routeName);
  }

  return (
    <div id='studentProfile'>
      {/* <Loading /> */}
      <div className='header'>
        <Header />
      </div>
      <div className='navBar'>
        {studentProfile.map((menu, idx) => {
          const isActiveRoute = activeRoute(menu.path) ? ' navBar_linkActive' : '';
          return (
            <span key={idx} className={'navBar_link ' + isActiveRoute}>
              <Link to={menu.layout + menu.path}>{menu.name}</Link>
            </span>
          );
        })}
      </div>

      <div className='body__container'>
        <Switch>
          {studentProfile.map((screen, idx) => (
            <Route key={idx} path={screen.layout + screen.path} exact={screen.exact}>
              {screen.component}
            </Route>
          ))}
        </Switch>
      </div>
    </div>
  );
};

export default StudentProfile;

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Footer from '../../components/landing/footer';
import Header from '../../components/landing/header';
import { routes } from '../../utils/constants';
import { tutorRoutes } from '../../utils/routers';
import './tutorRole.css';

const TutorRole = () => {
  return (
    <div id='tutorRole'>
      <div className='headerWrap'>
        <Header />
      </div>
      <div className='contentWrap'>
        <Switch>
          {tutorRoutes.map((page) => (
            <Route key={page.path} path={page.layout + page.path} exact={page.exact}>
              {page.component}
            </Route>
          ))}
          <Redirect from='/tutors' to={routes.TUTOR} />
        </Switch>
      </div>
      <div className='footerWrap'>
        <Footer />
      </div>
    </div>
  );
};

export default TutorRole;

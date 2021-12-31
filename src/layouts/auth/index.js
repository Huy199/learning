import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Modal from '../../components/common/modal';
import Footer from '../../components/landing/footer';
import Header from '../../components/landing/header';
import { routes } from '../../utils/constants';
import { authRoutes } from '../../utils/routers';
import './auth.css';

const Auth = () => {
  return (
    <div className='authPage__container'>
      <div className='authPage__header-component'>
        <Header />
      </div>
      <div className='authPage__list-component'>
        <Switch>
          {authRoutes.map((screen, idx) => (
            <Route key={idx} path={screen.layout + screen.path} exact={screen.exact}>
              {screen.component}
            </Route>
          ))}
          <Redirect from='/auth' to={routes.AUTH} />
        </Switch>
      </div>
      <div className='authPage__footer-container'>
        <Footer />
      </div>
      <Modal />
    </div>
  );
};

export default Auth;

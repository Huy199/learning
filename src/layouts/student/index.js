import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import Loading from '../../components/common/loading';

import Modal from '../../components/common/modal';
import Footer from '../../components/landing/footer';
import Header from '../../components/landing/header';
import { routes } from '../../utils/constants';
import { studentRoutes } from '../../utils/routers';
import ProtectedRoute from '../../components/common/protectedRoute';
import Loading from '../../components/common/loading';
import './studentRole.css';

const StudentRole = () => {
  return (
    <div className='studentRole__container'>
      {/* <Loading isStudent /> */}
      <div className='studentRole__header-component'>
        <Header />
      </div>

      <div className='studentRole__list-component'>
        <Switch>
          {studentRoutes.map((screen, idx) => {
            return screen.public ? (
              <Route key={idx} path={screen.layout + screen.path} exact={screen.exact}>
                {screen.component}
              </Route>
            ) : (
              <ProtectedRoute key={idx} path={screen.layout + screen.path} exact={screen.exact}>
                {screen.component}
              </ProtectedRoute>
            );
          })}
          <Redirect from='/students' to={routes.STUDENT} />
        </Switch>
      </div>
      <div className='studentRole__footer-container'>
        <Footer />
      </div>
      <Modal />
      {/* <Loading /> */}
    </div>
  );
};

export default StudentRole;

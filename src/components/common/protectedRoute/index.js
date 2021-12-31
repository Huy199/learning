import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectToken } from '../../../features/auth/authSlice';

const ProtectedRoute = ({ path, children, render, ...rest }) => {
  const isLoggedIn = useSelector(selectToken);
  return (
    <Route
      path={path}
      {...rest}
      render={() => {
        return isLoggedIn ? children : <Redirect to={{ pathname: '/auth' }} />;
      }}
    />
  );
};

export default ProtectedRoute;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import AdminPanel from './layouts/adminPanel';
import LandingRole from './layouts/landing';
import StudentRole from './layouts/student';
import Auth from './layouts/auth';
import PageNotFound from './pages/pageNotFound';
import StudentProfile from './layouts/studentProfile';
import ProtectedRoute from './components/common/protectedRoute';
import TutorRole from './layouts/tutor';

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/auth' component={Auth}></Route>
        <Route path='/students' component={StudentRole}></Route>

        <ProtectedRoute path='/student_profile'>
          <StudentProfile />
        </ProtectedRoute>

        <ProtectedRoute path='/tutors'>
          <TutorRole />
        </ProtectedRoute>

        <ProtectedRoute path='/admin'>
          <AdminPanel />
        </ProtectedRoute>

        <Route path='/' component={LandingRole} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;

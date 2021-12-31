import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectLoadingTutors } from '../../features/tutors/tutorsSlice';
import { selectLoadingCourse } from '../../features/courses/coursesSlice';
import Loading from '../../components/common/loading';
import Header from '../../components/admin/header';
import SideBar from '../../components/admin/sideBar';
import { adminPanelRouters } from '../../utils/routers';
import './adminPanel.css';
import Notify from '../../components/common/modal/index';
import { selectorStudentLoading } from '../../features/students/studentsSlice';
import { selectorPromotionLoading } from '../../features/promotions/promotionsSlice';

const AdminPanel = () => {
  const loadingTutors = useSelector(selectLoadingTutors);
  const loadingCourse = useSelector(selectLoadingCourse);
  const loadingStudent = useSelector(selectorStudentLoading);
  const loadingPromotion = useSelector(selectorPromotionLoading);
  return (
    <div className='adminLayout__container'>
      <div className='sidebar__container'>
        <SideBar />
      </div>
      <div className='adminBody__container'>
        <div className='adminHeader__container'>
          <Header />
        </div>
        <div className='adminContent__container'>
          <Switch>
            {adminPanelRouters.map((item) => (
              <Route key={item.path} exact={item.exact} path={item.layout + item.path}>
                {item.component}
              </Route>
            ))}
            <Redirect from='/admin' to='/admin/dashboard' />
          </Switch>
        </div>
      </div>
      <div className='admin__notify'>
        <Notify />
      </div>
      {(loadingTutors || loadingCourse || loadingStudent || loadingPromotion) && <Loading />}
    </div>
  );
};

export default AdminPanel;

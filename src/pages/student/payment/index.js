import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { studentPayment } from '../../../utils/routers';
import './studentPayment.css';
import Modal from '../../../components/common/modal';

const Payments = () => {
  const location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  return (
    <div id='studentPayment'>
      <div className='container'>
        <nav className='left'>
          {studentPayment.map((route, index) => {
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
              {studentPayment.map((route, idx) => (
                <Route key={idx} path={route.layout + route.path} exact={route.exact}>
                  {route.component}
                </Route>
              ))}
              <Redirect to={`/student_profile/payments/detail-payment`} />
            </Switch>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Payments;

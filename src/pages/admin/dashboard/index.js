import React from 'react';

import LineChart from '../../../components/admin/lineChart';
import StatCard from '../../../components/admin/statCard';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div id='adminDashboard'>
      <div className='wrapper'>
        <div className='body'>
          <div className='statistic'>
            <div className='statistic_header'>
              <p className='statistic_title'>Thống kê chung về hệ thống</p>
            </div>
            <div className='statistic_card'>
              <StatCard />
            </div>
          </div>

          <div className='chart_container'>
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

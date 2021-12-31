import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

import './lineChart.css';

const LineChart = () => {
  useEffect(() => {
    var ctx = document.getElementById('lineChart').getContext('2d');

    var config = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            pointDot: false,
            fill: true,
            fillColor: 'var(--colorBlueAdmin)',
            borderColor: 'rgba(25, 103, 210, 0.8)',
            strokeColor: 'var(--colorBlueAdmin)',
            pointColor: '#19283F',
            pointStrokeColor: '#28AFFA',
            pointHighlightFill: '#19283F',
            pointHighlightStroke: '#28AFFA',
            backgroundColor: 'rgba(229, 242, 255,0.8)',
            data: [65, 59, 80, 81, 56, 66, 40],
            tension: 0.3,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltips: {
            enabled: false,
          },
          label: {
            display: true,
          },
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      },
    };

    var myLine = new Chart(ctx, config);
    return () => {
      myLine.destroy();
    };
  }, []);

  return (
    <div className='chart'>
      <div className='chart__title'>
        <div className='chart__title__content'>
          <div className='content__wraper flex justify-start relative'>
            <div className='left_content'>
              <h6 className='content__wraper-h6'>Tổng quát</h6>
            </div>
            <div className='right_content'>{/* <button className={'content_day active_day'}>7 day</button> */}</div>
          </div>
        </div>
      </div>
      <div className='p-4 flex-auto h-auto' id='24hours'>
        {/* Chart */}
        <div className='chart__canvas'>
          <canvas id='lineChart'></canvas>
        </div>
      </div>
    </div>
  );
};

export default LineChart;

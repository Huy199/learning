import React from 'react';

import './resumeTutor.css';

const ResumeTutor = () => {
  return (
    <div id='resume' className='detailTutor-container'>
      <div className='detailTutor-wrap'>
        <div className='detailTutor-heard'>
          <h3 className='heard-title'>
            <span>Tóm tắt</span>
          </h3>
          <ul className='heard-list'>
            <li className='heard-item'>
              <h4>Chứng chỉ</h4>
            </li>
          </ul>
        </div>

        <ul className='body-list'>
          <li className='body-item'>
            <table className='body-table'>
              <tbody>
                <tr className='body-tableRow'>
                  <td style={{ minWidth: '140px' }} className='body-tableData'>
                    2020 — 2021
                  </td>
                  <td className='body-tableData'>
                    <p>CHỨNG CHỈ TEFL 120 GIỜ</p>
                    <p>Dạy tiếng Nhật như một ngoại ngữ</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeTutor;

import React from 'react';
import { useHistory } from 'react-router-dom';

import './tutorsCard.css';

const TutorsCard = () => {
  const history = useHistory();
  return (
    <div className='tutors-card__container' onClick={() => history.push('/students')}>
      <div className='tutors-card_left'>
        <div className='tutors_card-icon'>
          <svg width='34' height='34' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'>
            <title>english_icon</title>
            <g id='Page-1' fill='none' fillRule='evenodd'>
              <g id='english_icon' fillRule='nonzero' fill='#3BB3BD'>
                <path
                  d='M13.784.004a.556.556 0 0 0-.385.28L10.144 5.71a.265.265 0 0 0-.035.035.56.56 0 0 0-.157.577v3.5L6.33 12.934l-.018.017a.531.531 0 0 0-.07.053l-.017.017a.261.261 0 0 0-.035.018v.017a.53.53 0 0 0-.07.07l-.018.018a.696.696 0 0 0-.035.07.56.56 0 0 0-.035.455v12.09c0 .309.252.56.56.56h.56V28h1.12v-1.68H19.47V28h1.12v-1.68h.56c.308 0 .56-.251.56-.56V13.67a.568.568 0 0 0-.018-.385.557.557 0 0 0-.087-.158v-.017a.265.265 0 0 0-.035-.035v-.018a.261.261 0 0 0-.035-.017l-.018-.018-.017-.017a.534.534 0 0 0-.088-.07L17.791 9.82V6.268a.632.632 0 0 0 0-.157v-.018a.55.55 0 0 0-.07-.192v-.017a.508.508 0 0 0-.088-.105l-.017-.018L14.344.284a.561.561 0 0 0-.56-.28zm.087 1.628l2.38 3.972h-4.76l2.38-3.972zm-2.8 5.091h5.6v2.8h-5.6v-2.8zm-.35 3.92h6.3l2.624 2.24H8.097l2.625-2.24zm-3.569 3.36H20.59V25.2H7.152V14.002zm6.72.56a4.711 4.711 0 0 0-4.708 4.706 4.711 4.711 0 0 0 4.707 4.707 4.711 4.711 0 0 0 4.707-4.707 4.711 4.711 0 0 0-4.707-4.707zm0 1.119a3.57 3.57 0 0 1 3.586 3.587 3.57 3.57 0 0 1-3.587 3.587 3.57 3.57 0 0 1-3.587-3.587 3.57 3.57 0 0 1 3.587-3.587zm.927.315a.654.654 0 0 0-.07.017.563.563 0 0 0-.438.385l-.945 2.677a.563.563 0 0 0 .14.595l1.627 1.558a.559.559 0 0 0 .976-.248.563.563 0 0 0-.206-.557L14.52 19.11l.84-2.344a.562.562 0 0 0-.56-.77z'
                  id='Shape'
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div className='tutors_card-content'>
          <div className='card__content-title'>
            <h3>Giáo viên tiếng Việt</h3>
          </div>
          <div className='card__content-statistic'>100,666,000 thành viên</div>
        </div>
      </div>
      {/*  */}
      <div className='tutors-card_right' onClick={() => history.push('/students')}>
        <div className='tutors_card-icon'>
          <svg width='34' height='34' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'>
            <title>japanese_icon</title>
            <g id='Page-1' fill='none' fillRule='evenodd'>
              <g id='japanese_icon' fillRule='nonzero' fill='#3BB3BD'>
                <g id='icons8-torii' transform='translate(0 2)'>
                  <path
                    d='M.507.56a.557.557 0 0 0-.433.383c-.063.199-.01.415.136.562l4.41 4.48a.56.56 0 0 0 .402.175H6.16V8.4H4.427a.558.558 0 0 0-.507.56v3.36c0 .308.252.56.56.56h1.68v9.52c0 .308.252.56.56.56h3.36c.308 0 .56-.252.56-.56v-9.52h6.72v9.52c0 .308.252.56.56.56h3.36c.308 0 .56-.252.56-.56v-9.52h1.68c.308 0 .56-.252.56-.56V8.96a.561.561 0 0 0-.56-.56h-1.68V6.16h1.137a.56.56 0 0 0 .403-.175l4.41-4.48a.556.556 0 0 0 .074-.643.557.557 0 0 0-.582-.284S22.002 1.68 14.018 1.68C6.032 1.68.717.578.717.578A.544.544 0 0 0 .56.56H.507zm1.68 1.365c1.8.308 5.585.875 11.83.875 6.237 0 10-.567 11.796-.875L22.75 5.04h-1.348a.524.524 0 0 0-.175-.018.492.492 0 0 0-.052.018h-3.133a.524.524 0 0 0-.175-.018.492.492 0 0 0-.052.018h-2.573a.524.524 0 0 0-.175-.018.492.492 0 0 0-.052.018h-2.03a.57.57 0 0 0-.227 0h-2.555a.524.524 0 0 0-.175-.018.492.492 0 0 0-.053.018H6.843a.524.524 0 0 0-.175-.018.492.492 0 0 0-.053.018H5.25L2.187 1.925zM7.28 6.16h2.24V8.4H7.28V6.16zm3.36 0h1.68V8.4h-1.68V6.16zm2.8 0h1.12V8.4h-1.12V6.16zm2.24 0h1.68V8.4h-1.68V6.16zm2.8 0h2.24V8.4h-2.24V6.16zM5.04 9.52h17.92v2.24h-4.918a.524.524 0 0 0-.175-.018.492.492 0 0 0-.052.018H6.842a.524.524 0 0 0-.174-.018.492.492 0 0 0-.053.018H5.04V9.52zm2.24 3.36h2.24v8.96H7.28v-8.96zm11.2 0h2.24v8.96h-2.24v-8.96z'
                    id='Shape'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className='tutors_card-content'>
          <div className='card__content-title'>
            <h3>Giáo viên tiếng Nhật</h3>
          </div>
          <div className='card__content-statistic'>195,645,000 thành viên</div>
        </div>
      </div>
    </div>
  );
};

export default TutorsCard;

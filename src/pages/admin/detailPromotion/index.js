import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import studentsIcon from '../../../assets/icons/personIconEnabled.svg';
import pigIcon from '../../../assets/icons/pigIcon.svg';
import calendarIcon from '../../../assets/icons/calendarIcon.svg';
import { promotionsActions, selectorDetailPromotion } from '../../../features/promotions/promotionsSlice';

import './detailPromotion.css';
import moment from 'moment';

const AdminDetailPromotion = () => {
  const { code } = useParams();
  const dispatch = useDispatch();
  const promotionDetail = useSelector(selectorDetailPromotion);
  const { name, price, point, promo, visible, createdAt } = promotionDetail;
  useEffect(() => {
    dispatch(promotionsActions.fetchDetailPromotion({ code }));
    return () => {
      dispatch(promotionsActions.refreshState());
    };
  }, [dispatch, code]);
  return (
    <div id='detail-promotion'>
      <div className='container'>
        <div className='promotionInfo__left'>
          <div className='promotionInfo__data'>
            <div className='promotionInfo__data-core'>
              <div className='promotion-title'>
                <div className='promotion-name'>Tên khuyến mại: {name}.</div>
              </div>
              <ul className='promotion-list'>
                <li className='promotion-item'>
                  <div className='promotion-wrapIcon' data-tip='Giá' data-for='registerTip'>
                    {/* <img src={subjectIcon} alt='subject icon' className='h-9 w-9' /> */}
                    <div>
                      Giá: <span className='font-semibold'>{price}</span>$
                    </div>
                  </div>
                </li>
                <li className='promotion-item'>
                  <div className='promotion-wrapIcon' data-tip='Điểm thưởng' data-for='registerTip'>
                    {/* <img src={genderIcon} alt='gender icon' className='h-9 w-9' /> */}
                    <div>
                      Mã khuyến mại: <span className='font-semibold'>{code}</span>
                    </div>
                  </div>
                </li>
                <li className='promotion-item'>
                  <div className='promotion-wrapIcon' data-tip='Điểm thưởng' data-for='registerTip'>
                    {/* <img src={genderIcon} alt='gender icon' className='h-9 w-9' /> */}
                    <div>
                      Điểm quy đổi: <span className='font-semibold'>{point}</span>
                    </div>
                  </div>
                </li>

                <li className='promotion-item'>
                  <div className='promotion-wrapIcon' data-tip='Điểm thưởng' data-for='registerTip'>
                    {/* <img src={genderIcon} alt='gender icon' className='h-9 w-9' /> */}
                    <div>
                      Điểm cộng thêm: <span className='font-semibold'>{promo}</span>
                    </div>
                  </div>
                </li>

                <li className='promotion-item'>
                  <div className='promotion-wrapIcon'>
                    <div>
                      Trạng thái: <span className='font-semibold'>{visible ? 'Hiển thị' : 'Ẩn'}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='promotionInfo__facts'>
          <p className='facts__title'>Thống kê</p>
          <div className='promotionInfo__menu'>
            <span data-tip='Số lượng đã mua' data-for='registerTip' className='promotion-wrapIcon'>
              <img src={studentsIcon} alt='icon' className='h-9 w-9' />
              <span>Số lượng đã mua: </span>
              <span className='mx-1'>{promotionDetail.users?.length || 100} </span>
            </span>

            <span data-tip='Tổng thu nhập' data-for='registerTip' className='promotion-wrapIcon'>
              <img src={pigIcon} alt='icon' className='h-9 w-9' />
              <span>Tổng thu nhập: </span>
              <span className='ml-1'>{parseFloat(price * (promo / 100) * 100)}$</span>
            </span>

            <span data-tip='Ngày tạo' data-for='registerTip' className='promotion-wrapIcon'>
              <img src={calendarIcon} alt='icon' className='h-9 w-9' />
              <span>{`Ngày tạo: `} </span>
              <span className='mx-1'>{moment(createdAt).format('DD/MM/YYYY')}</span>
            </span>
          </div>
        </div>
      </div>
      <ReactTooltip id='registerTip' />
    </div>
  );
};

export default AdminDetailPromotion;

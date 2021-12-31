// import createIcon from '../../../assets/icons/createIcon.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import createIcon from '../../../assets/icons/createIcon.svg';
import Filter from '../../../components/admin/filter';
import Search from '../../../components/admin/search';
import Pagination from '../../../components/common/pagination';
// import Pagination from '../../../components/common/pagination';
import { modalActions } from '../../../features/modal/modal';
import {
  promotionsActions,
  selectListRemaining,
  selectorPromotionList,
  selectPromotionFilter,
} from '../../../features/promotions/promotionsSlice';
import { ModalComponentName, promotionFilter } from '../../../utils/enum';
import './adminPromotion.css';
import AdminPromotionAccordion from './promotionAccordion';
const AdminPromotion = () => {
  const dispatch = useDispatch();
  const promotionList = useSelector(selectListRemaining);
  const filterPromotion = useSelector(selectPromotionFilter);

  const [selected, setSelected] = useState('DEFAULT');

  // handle pagination
  const handlePageChange = (newFilter) => {
    dispatch(promotionsActions.setFilterStudent(newFilter));
  };

  const startIndex = (filterPromotion._page - 1) * filterPromotion._limit;
  const endIndex = filterPromotion._page * filterPromotion._limit;
  const newPromotionList = promotionList.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(promotionsActions.fetchPromotionList());
  }, [dispatch]);
  const handleAddForm = () => {
    dispatch(modalActions.changeModalContent(ModalComponentName.ADD_FORM_PROMOTION));
    dispatch(modalActions.showModal());
  };

  useEffect(() => {
    dispatch(promotionsActions.fetchPromotionList(filterPromotion));
    if (promotionFilter[selected] === promotionFilter.DEFAULT) {
      dispatch(promotionsActions.fetchFilterBy({ ...filterPromotion, _sortBy: 'default' }));
    }
    if (promotionFilter[selected] === promotionFilter.A_Z_NAME) {
      dispatch(promotionsActions.fetchFilterBy({ ...filterPromotion, _sortBy: 'nameA_Z' }));
    }
  }, [dispatch, filterPromotion, selected]);

  return (
    <div id='adminPromotion' className='adminPromotion__container'>
      <div className='flex item-center justify-between'>
        <h1 className='adminPromotion__totalPromotion'>Phiếu khuyến mại: {promotionList.length || 0}</h1>
      </div>
      <div className='filter-search'>
        <Search filterPromotion />
        <Filter selected={selected} setSelected={setSelected} filter={promotionFilter} />
        <div className='createBtn_promotion'>
          <button className='btn_promotion' onClick={handleAddForm}>
            <img src={createIcon} alt='btn Icon' />
          </button>
        </div>
      </div>
      <div className='adminPromotion__header font-bold' style={{ marginTop: '16px' }}>
        <div className='adminPromotion__header-item-name'>Tên khuyến mại</div>
        <div className='adminPromotion__header-item-code'>Mã khuyến mại</div>
        <div className='adminPromotion__header-item-price'>Giá</div>
        <div className='adminPromotion__header-item-points'>Tổng điểm quy đổi</div>
        <div className='adminPromotion__header-item-points'>Điểm cộng thêm</div>
        <div className='adminPromotion__header-item-status'>Trạng thái</div>
        <div className='adminPromotion__header-item-bought'>SL đã mua</div>
      </div>
      <div className='adminPromotionAccordionContainer'>
        {newPromotionList &&
          newPromotionList.length > 0 &&
          newPromotionList.map((item) => <AdminPromotionAccordion key={item._id} item={item} />)}
      </div>
      <div className='adminPromotion__pagination mb-4'>
        <Pagination total={promotionList.length} filter={filterPromotion} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default AdminPromotion;

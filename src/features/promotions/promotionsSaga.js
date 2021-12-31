import { call, put, takeLatest } from 'redux-saga/effects';
import promotionsApi from '../../api/promotions';
import { promotionsActions } from './promotionsSlice';

function* handleFetchPromotionList(action) {
  try {
    const response = yield call(promotionsApi.getAllPromotions, action.payload);
    yield put(promotionsActions.fetchPromotionSuccess(response.data.data.promotions));
  } catch (error) {
    yield put(promotionsActions.fetchPromotionFailed(error));
  }
}

function* handleFetchDetailPromotion(action) {
  try {
    const response = yield call(promotionsApi.getPromotionByCode, action.payload);
    yield put(promotionsActions.fetchDetailPromotionSuccess(response.data.data.promotion));
  } catch (error) {
    yield put(promotionsActions.fetchDetailPromotionFailed(error));
  }
}

function* handleDeletePromotion(action) {
  try {
    const response = yield call(promotionsApi.deleteTutor, action.payload);
    yield put(promotionsActions.deletePromotionSuccess(response.data));
    // yield put(push('/admin/promotions'));
  } catch (error) {
    yield put(promotionsActions.deletePromotionFailed(error));
  }
}

function* handleFilterBy(action) {
  try {
    const filterKey = action.payload._sortBy;
    const response = yield call(promotionsApi.getAllPromotions, action.payload);
    const data = response.data.data.promotions;
    let result = null;
    if (filterKey === 'default') {
      result = data;

      yield put(promotionsActions.fetchFilterBySuccess({ promotionList: result }));
    }
    if (filterKey === 'nameA_Z') {
      result = data.sort((a, b) => a.name.localeCompare(b.name));

      yield put(promotionsActions.fetchFilterBySuccess({ promotionList: result }));
    }
  } catch (error) {
    yield put(promotionsActions.fetchFilterByFailed(error));
  }
}

export function* promotionsSaga() {
  yield takeLatest(promotionsActions.fetchPromotionList.type, handleFetchPromotionList);
  yield takeLatest(promotionsActions.fetchDetailPromotion.type, handleFetchDetailPromotion);
  yield takeLatest(promotionsActions.deletePromotion.type, handleDeletePromotion);
  yield takeLatest(promotionsActions.fetchFilterBy.type, handleFilterBy);
}

import { call, put, takeLatest } from 'redux-saga/effects';
import flexibleLessonApi from '../../api/flexibleLesson';
import { flexibleLessonActions } from './flexibleLessonSlice';

function* handleFetchFlexibleLesson(action) {
  try {
    const resp = yield call(flexibleLessonApi.getFlexibleLesson);
    console.log(resp);
  } catch (error) {
    yield put(flexibleLessonActions.fetchFlexibleLessonFailed(error));
  }
}

export function* flexibleLessonSaga() {
  yield takeLatest(flexibleLessonActions.fetchFlexibleLesson.type, handleFetchFlexibleLesson);
}

import { call, put, takeLatest } from 'redux-saga/effects';

import { fixedCourseActions } from './fixedCourseSlice';
import fixedCourseApi from '../../api/fixedCourse';

function* handleFetchFixedCourse() {
  try {
    const resp = yield call(fixedCourseApi.getFixedCourse);
    const data = resp.data.data;
    yield put(fixedCourseActions.fetchFixedCourseSuccess(data));
  } catch (error) {
    yield put(fixedCourseActions.fetchFixedCourseFailed(error));
  }
}

export function* fixedCourseSaga() {
  yield takeLatest(fixedCourseActions.fetchFixedCourse.type, handleFetchFixedCourse);
}

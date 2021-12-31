import { call, put, takeLatest } from 'redux-saga/effects';
import { courseActions } from './coursesSlice';

import coursesApi from '../../api/courses';

function* handleFetchListCourse(action) {
  try {
    const resp = yield call(coursesApi.getCourses);
    yield put(courseActions.fetchCourseSuccess(resp.data));
  } catch (error) {
    yield put(courseActions.fetchCourseFailed(error));
  }
}

function* handleSearch(action) {
  try {
    const searchKey = action.payload._key;
    const resp = yield call(coursesApi.getCourses, action.payload);
    const data = resp.data;
    const result = data.filter((e) => e.name.toLowerCase().includes(searchKey.toLowerCase()));

    yield put(courseActions.fetchSearchSuccess({ courseList: result }));
  } catch (error) {
    yield put(courseActions.fetchSearchFailed(error));
  }
}

function* handleFilterBy(action) {
  try {
    const filterKey = action.payload._sortBy;
    const resp = yield call(coursesApi.getCourses, action.payload);
    const data = resp.data;
    let result = null;
    if (filterKey === 'default') {
      result = data;

      yield put(courseActions.fetchFilterBySuccess({ courseList: result }));
    }
    if (filterKey === 'nameA_Z') {
      result = data.sort((a, b) => a.name.localeCompare(b.name));

      yield put(courseActions.fetchFilterBySuccess({ courseList: result }));
    }
    if (filterKey === 'createdAt') {
      result = data.sort((a, b) => a.createdAt.localeCompare(b.createdAt));

      yield put(courseActions.fetchFilterBySuccess({ courseList: result }));
    }
  } catch (error) {
    yield put(courseActions.fetchFilterByFailed(error));
  }
}

export function* coursesSaga() {
  yield takeLatest(courseActions.fetchListCourse.type, handleFetchListCourse);
  yield takeLatest(courseActions.fetchSearchCourse.type, handleSearch);
  yield takeLatest(courseActions.fetchFilterBy.type, handleFilterBy);
}

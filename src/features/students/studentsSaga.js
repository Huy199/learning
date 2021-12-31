import { call, put, takeLatest } from 'redux-saga/effects';
import studentsApi from '../../api/students';
import { studentsActions } from './studentsSlice';

function* handleFetchStudentList(action) {
  try {
    const response = yield call(studentsApi.getStudents, action.payload);
    yield put(studentsActions.fetchStudentSuccess(response.data));
  } catch (error) {
    yield put(studentsActions.fetchStudentFailed(error));
  }
}

function* handleFetchDetailStudent(action) {
  try {
    const response = yield call(studentsApi.getStudentById, action.payload);
    yield put(studentsActions.fetchDetailStudentSuccess(response.data));
  } catch (error) {
    yield put(studentsActions.fetchDetailStudentFailed(error));
  }
}

function* handleDeleteStudent(action) {
  try {
    const response = yield call(studentsApi.deleteStudent, action.payload);
    yield put(studentsActions.deleteStudentSuccess(response.data));
  } catch (error) {
    yield put(studentsActions.deleteStudentFailed(error));
  }
}

function* handleFilterBy(action) {
  try {
    const filterKey = action.payload._sortBy;
    const resp = yield call(studentsApi.getStudents, action.payload);
    const data = resp.data;
    let result = null;
    if (filterKey === 'default') {
      result = data;
      yield put(studentsActions.fetchFilterBySuccess({ studentList: result }));
    }
    if (filterKey === 'nameA_Z') {
      result = data.sort((a, b) => a.name.localeCompare(b.name));
      yield put(studentsActions.fetchFilterBySuccess({ studentList: result }));
    }
    if (filterKey === 'createdAt') {
      result = data.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
      yield put(studentsActions.fetchFilterBySuccess({ studentList: result }));
    }
  } catch (error) {
    yield put(studentsActions.fetchFilterByFailed(error));
  }
}

function* handleSearch(action) {
  try {
    const searchKey = action.payload._key;
    const resp = yield call(studentsApi.getStudents, action.payload);
    const data = resp.data;
    const result = data.filter((e) => e.name.toLowerCase().includes(searchKey.toLowerCase()));
    // console.log(searchKey);
    // console.log(result);
    yield put(studentsActions.fetchSearchSuccess({ studentList: result }));
  } catch (error) {
    yield put(studentsActions.fetchSearchFailed(error));
  }
}

export function* studentsSaga() {
  yield takeLatest(studentsActions.fetchStudentList.type, handleFetchStudentList);
  yield takeLatest(studentsActions.fetchDetailStudent.type, handleFetchDetailStudent);
  yield takeLatest(studentsActions.deleteStudent.type, handleDeleteStudent);
  yield takeLatest(studentsActions.fetchFilterBy.type, handleFilterBy);
  yield takeLatest(studentsActions.fetchSearchStudent.type, handleSearch);
}

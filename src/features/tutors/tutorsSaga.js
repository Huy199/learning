import { push } from 'connected-react-router';
import { call, put, takeLatest } from 'redux-saga/effects';
import tutorsApi from '../../api/tutors';
import { tutorActions } from './tutorsSlice';

function* handleFetchTutorsList(action) {
  try {
    const resp = yield call(tutorsApi.getTutors, action.payload);
    yield put(tutorActions.fetchTutorsSuccess(resp.data));
  } catch (error) {
    yield put(tutorActions.fetchTutorFailed(error));
  }
}

function* handleFetchDetailTutors(action) {
  try {
    const resp = yield call(tutorsApi.getTutorsById, action.payload);
    yield put(tutorActions.fetchDetailSuccess(resp.data));
  } catch (error) {
    yield put(tutorActions.fetchDetailFailed(error));
  }
}

function* handleDeleteTutor(action) {
  try {
    const resp = yield call(tutorsApi.deleteTutor, action.payload);
    yield put(tutorActions.deleteTutorSuccess(resp.data));
    yield put(push('/admin/tutors'));
  } catch (error) {
    yield put(tutorActions.deleteTutorFailed(error));
  }
}

function* handleFilterBy(action) {
  try {
    const filterKey = action.payload._sortBy;
    const response = yield call(tutorsApi.getTutors, action.payload);
    const data = response.data;
    let result = null;
    if (filterKey === 'default') {
      result = data;

      yield put(tutorActions.fetchFilterBySuccess({ tutorList: result }));
    }
    if (filterKey === 'nameA_Z') {
      result = data.sort((a, b) => a.name.localeCompare(b.name));

      yield put(tutorActions.fetchFilterBySuccess({ tutorList: result }));
    }
    if (filterKey === 'createdAt') {
      result = data.sort((a, b) => a.createdAt.localeCompare(b.createdAt));

      yield put(tutorActions.fetchFilterBySuccess({ tutorList: result }));
    }
  } catch (error) {
    yield put(tutorActions.fetchFilterByFailed(error));
  }
}

export function* tutorsSaga() {
  yield takeLatest(tutorActions.fetchTutorList.type, handleFetchTutorsList);
  yield takeLatest(tutorActions.fetchDetailTutor.type, handleFetchDetailTutors);
  yield takeLatest(tutorActions.deleteTutor.type, handleDeleteTutor);
  yield takeLatest(tutorActions.fetchFilterBy.type, handleFilterBy);
}

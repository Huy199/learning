import { push } from 'connected-react-router';
import { put, takeLatest } from 'redux-saga/effects';
import { StorageConstants } from '../../utils/enum';
import { authActions } from './authSlice';

function* handleLogin(action) {
  const resp = action.payload;
  // console.log('resp saga: ', resp);
  try {
    if (resp.username === 'admin' && resp.password === '123456aA') {
      localStorage.setItem(StorageConstants.ACCESS_TOKEN, 'admin');
      yield put(authActions.loginSuccess({ username: resp.username, token: 'admin' }));
      yield put(push('/admin'));
    } else if (resp.username === 'student' && resp.password === '123456aA') {
      localStorage.setItem(StorageConstants.ACCESS_TOKEN, 'student');
      yield put(authActions.loginSuccess({ username: resp.username, token: 'student' }));
      yield put(push('/students'));
    } else if (resp.username === 'tutor' && resp.password === '123456aA') {
      localStorage.setItem(StorageConstants.ACCESS_TOKEN, 'tutor');
      yield put(authActions.loginSuccess({ username: resp.username, token: 'tutor' }));
      yield put(push('/tutors'));
    }
  } catch (error) {
    yield put(authActions.loginFailed(error));
  }
}

function* handleLogout(action) {
  localStorage.removeItem(StorageConstants.ACCESS_TOKEN);
  yield put(authActions.logoutSuccess());
  yield put(push('/auth/login'));
}

export default function* authSaga() {
  yield takeLatest(authActions.login.type, handleLogin);
  yield takeLatest(authActions.logout.type, handleLogout);
}

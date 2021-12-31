import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { history } from '../utils/history';
import rootSaga from './rootSaga';
import modalReducer from '../features/modal/modal';
import formCreateReducer from '../features/form/from';
import authReducer from '../features/auth/authSlice';
import tutorReducer from '../features/tutors/tutorsSlice';
import courseReducer from '../features/courses/coursesSlice';
import studentsReducer from '../features/students/studentsSlice';
import promotionsReducer from '../features/promotions/promotionsSlice';
import fixedCourseReducer from '../features/fixedCourse/fixedCourseSlice';
import flexibleLessonReducer from '../features/flexibleLesson/flexibleLessonSlice';
const rootReducer = combineReducers({
  router: connectRouter(history),
  modal: modalReducer,
  formCreate: formCreateReducer,
  tutors: tutorReducer,
  courses: courseReducer,
  students: studentsReducer,
  promotions: promotionsReducer,
  auth: authReducer,
  fixedCourse: fixedCourseReducer,
  flexibleLesson: flexibleLessonReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);

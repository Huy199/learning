import { all } from 'redux-saga/effects';
import authSaga from '../features/auth/authSaga';
import { coursesSaga } from '../features/courses/coursesSaga';
import { fixedCourseSaga } from '../features/fixedCourse/fixedCourseSaga';
import { flexibleLessonSaga } from '../features/flexibleLesson/flexibleLessonSaga';
import { promotionsSaga } from '../features/promotions/promotionsSaga';
import { studentsSaga } from '../features/students/studentsSaga';
import { tutorsSaga } from '../features/tutors/tutorsSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    tutorsSaga(),
    coursesSaga(),
    studentsSaga(),
    promotionsSaga(),
    fixedCourseSaga(),
    flexibleLessonSaga(),
  ]);
}

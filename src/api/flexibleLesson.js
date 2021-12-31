import { urls } from '../utils/constants';
import axiosClient from './axiosClient';

const flexibleLessonApi = {
  getFlexibleLesson() {
    const url = `${urls.LESSON}/${urls.FLEXIBLE}/all`;
    return axiosClient.get(url);
  },
};

export default flexibleLessonApi;

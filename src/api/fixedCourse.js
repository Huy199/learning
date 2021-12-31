import { urls } from '../utils/constants';
import axiosClient from './axiosClient';

const fixedCourseApi = {
  getFixedCourse() {
    const url = `/${urls.FIXED_COURSE}/all`;
    return axiosClient.get(url);
  },
};

export default fixedCourseApi;

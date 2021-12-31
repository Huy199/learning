import axios from 'axios';

const coursesApi = {
  getCourses() {
    const url = `https://61baf2bfe943920017784aed.mockapi.io/edu/courses`;
    return axios.get(url);
  },
};

export default coursesApi;

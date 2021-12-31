import axios from 'axios';

const studentsApi = {
  getStudents() {
    const url = 'https://61baf2bfe943920017784aed.mockapi.io/edu/student';
    return axios.get(url);
  },
  getStudentById(id) {
    const url = `https://61baf2bfe943920017784aed.mockapi.io/edu/student/${id}`;
    return axios.get(url);
  },

  deleteStudent(id) {
    const url = `https://61baf2bfe943920017784aed.mockapi.io/edu/student/${id}`;
    return axios.delete(url);
  },
};

export default studentsApi;

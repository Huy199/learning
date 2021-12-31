import axios from 'axios';

const tutorsApi = {
  getTutors() {
    const url = `https://61baf2bfe943920017784aed.mockapi.io/edu/getTutor`;
    return axios.get(url);
  },

  getTutorsById({ id }) {
    const url = `https://61baf2bfe943920017784aed.mockapi.io/edu/getTutor/${id}`;
    return axios.get(url);
  },

  deleteTutor(id) {
    const url = `https://61baf2bfe943920017784aed.mockapi.io/edu/getTutor/${id}`;
    return axios.delete(url);
  },
};

export default tutorsApi;

import axios from 'axios';

const promotionsApi = {
  getAllPromotions() {
    const url = 'http://35.222.215.64/api/promotions/all';
    return axios.get(url);
  },

  getPromotionByCode(params) {
    const url = `http://35.222.215.64/api/promotions`;
    return axios.get(url, { params });
  },

  deletePromotion(id) {
    const url = `https://61bd455ad8542f0017824b97.mockapi.io/api/promotions/${id}`;
    return axios.delete(url);
  },
};

export default promotionsApi;

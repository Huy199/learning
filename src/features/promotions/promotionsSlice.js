import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  promotionList: [],
  promotionDetail: {},
  filter: {
    search: '',
    _sortBy: '',
    _page: 1,
    _limit: 10,
  },
};
const promotionsSlice = createSlice({
  name: 'promotions',
  initialState,
  reducers: {
    //get all promotions
    fetchPromotionList(state, action) {
      state.loading = true;
    },
    fetchPromotionSuccess(state, action) {
      state.loading = false;
      state.promotionList = action.payload;
    },
    fetchPromotionFailed(state, action) {
      state.loading = false;
    },

    //get detail promotion by id
    fetchDetailPromotion(state, action) {
      state.loading = true;
    },
    fetchDetailPromotionSuccess(state, action) {
      state.loading = false;
      state.promotionDetail = action.payload;
    },
    fetchDetailPromotionFailed(state, action) {
      state.loading = false;
    },

    // refresh when unmount
    refreshState(state, action) {
      state.promotionDetail = {};
    },

    //delete promotion

    deletePromotion(state, action) {
      state.loading = true;
    },
    deletePromotionSuccess(state, action) {
      state.loading = false;
    },
    deletePromotionFailed(state, action) {
      state.loading = false;
    },

    // pagination
    setFilterPromotion(state, action) {
      state.filter = action.payload;
    },

    // search promotion
    setSearchPromotion(state, action) {
      state.filter.search = action.payload;
    },

    // handle filter list
    fetchFilterBy(state, action) {
      state.loading = true;
    },
    fetchFilterBySuccess(state, action) {
      state.loading = false;
      state.promotionList = action.payload.promotionList;
    },
    fetchFilterByFailed(state, action) {
      state.loading = false;
    },
  },
});

//actions
export const promotionsActions = promotionsSlice.actions;

//selector
export const selectorPromotionLoading = (state) => state.promotions.loading;
export const selectorPromotionList = (state) => state.promotions.promotionList;
export const selectorDetailPromotion = (state) => state.promotions.promotionDetail;
export const selectPromotionFilter = (state) => state.promotions.filter;
export const selectPromotionSearch = (state) => state.promotions.filter.search;

export const selectListRemaining = createSelector(
  selectorPromotionList,
  selectPromotionSearch,
  (listPromotion, searchText) => {
    //search all
    // return listPromotion.filter((promotion) => Object.values(tutor).join(' ').toLowerCase().includes(searchText.toLowerCase()));

    // search by name
    return listPromotion.filter((promotion) => promotion.name.toLowerCase().includes(searchText.toLowerCase()));
  }
);

//reducer
export default promotionsSlice.reducer;

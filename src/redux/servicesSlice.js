import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [],
  loading: false,
  error: null,


};

export const servicesSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    servicesRequest(state, action) {
      state.services = [];
      state.loading = true;
      state.error = null;
    },

    servicesFailure(state, action) {
      state.services = [];
      state.loading = false;
      state.error = action.payload;
    },

    servicesSuccess(state, action) {
      state.services = action.payload;
      state.loading = false;
      state.error = null;
    },
  },

});

export const { servicesRequest, servicesFailure, servicesSuccess } = servicesSlice.actions;


export default servicesSlice.reducer;

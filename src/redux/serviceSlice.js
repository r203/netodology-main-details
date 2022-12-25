import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  service: {},
  loading: false,
  error: null,


};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    serviceRequest(state, action) {
      state.service = {};
      state.loading = true;
      state.error = null;
    },

    serviceFailure(state, action) {
      state.service = [];
      state.loading = false;
      state.error = action.payload;
    },

    serviceSuccess(state, action) {
      state.service = action.payload;
      state.loading = false;
      state.error = null;
    },
  },

});

export const { serviceRequest, serviceFailure, serviceSuccess } = serviceSlice.actions;


export default serviceSlice.reducer;

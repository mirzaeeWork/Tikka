// components/Redux/slices/apiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: null,
        error: null,
        loading: false,
    },
    reducers: {
        fetchDataRequest: (state) => {
            state.loading = true;
            state.error = null; // خطا را به حالت اولیه برمی‌گرداند
        },
        fetchDataSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataFailure,
} = apiSlice.actions;

export default apiSlice.reducer;

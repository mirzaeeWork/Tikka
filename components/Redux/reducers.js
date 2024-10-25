// components/Redux/reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import apiReducer from './slices/apiSlice';

// ترکیب همه‌ی ردیوسرها
const rootReducer = combineReducers({
    api: apiReducer,
});

export default rootReducer;

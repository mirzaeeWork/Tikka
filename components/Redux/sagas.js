// components/Redux/sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './slices/apiSlice';

// تابع برای فراخوانی API
function fetchAPI() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}

// Saga مربوط به API
function* fetchDataSaga() {
    try {
        const response = yield call(fetchAPI);
        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFailure(error.message));
    }
}

// rootSaga که همه‌ی sagas‌ها را ترکیب می‌کند
export default function* rootSaga() {
    yield takeLatest(fetchDataRequest.type, fetchDataSaga);
}

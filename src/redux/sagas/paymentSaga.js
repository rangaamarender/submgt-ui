// paymentSaga.js
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPaymentsFailure, fetchPaymentsSuccess, FETCH_PAYMENTS_REQUEST } from '../actions/paymentActions';

function* fetchPayments() {
    try {
        console.log('******* Fetching the data *********');
        const response = yield call(axios.post, 'http://localhost:8080/subscriptions');
        yield put(fetchPaymentsSuccess(response.data));
    } catch (error) {
        yield put(fetchPaymentsFailure(error.message));
    }
}

function* paymentSaga() {
    yield takeLatest(FETCH_PAYMENTS_REQUEST, fetchPayments);
}

export default paymentSaga;

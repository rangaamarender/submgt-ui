import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    ADD_PAYMENTMETHOD_REQUEST,
    FETCH_PAYMENTMETHOD_REQUEST,
    SELECT_PAYMENTMETHOD_REQUEST,
    UPDATE_PAYMENTMETHOD_REQUEST,
    addPaymentMethodFailure,
    addPaymentMethodSuccess,
    fetchPaymentMethodFailure,
    fetchPaymentMethodSuccess,
    selectPaymentMethodFailure,
    selectPaymentMethodSuccess,
    updatePaymentMethodFailure,
    updatePaymentMethodSuccess,
} from '../actions/paymentMethodActions';

//Fetch Request
function* fetchPaymentMethodRequest(action) {
    try {
        console.log(' Param :' + action.payload);
        const encodedParam = encodeURIComponent(action.payload);
        console.log('fetching the payment methods -->' + { encodedParam });
        const response = yield call(axios.get, `http://localhost:8080/paymentMethods/${encodedParam}`);
        //const data = processResponseData(response);
        yield put(fetchPaymentMethodSuccess(response.data));
    } catch (error) {
        yield put(fetchPaymentMethodFailure(error.message));
    }
}
//Select Request
function* selectPaymentMethodRequest(action) {
    try {
        const encodedParam = encodeURIComponent(action.payload);
        const response = yield call(axios.get, `<TODOM>/${encodedParam}`);
        yield put(selectPaymentMethodSuccess(response.data));
    } catch (error) {
        yield put(selectPaymentMethodFailure(error.message));
    }
}
function* addPaymentMethodRequest(action) {
    try {
        const encodedParam = encodeURIComponent(action.payload.subscriptionID);
        const data = action.payload.creditCard;
        console.log('got the data:' + data + ' for subscription :' + encodedParam);
        const response = yield call(axios.post, `http://localhost:8080/paymentMethod/${encodedParam}`, data);
        yield put(addPaymentMethodSuccess(response.data));
        // Refresh the list after adding
        yield call(fetchPaymentMethodRequest);
    } catch (error) {
        console.log(error.response.data);
        yield put(addPaymentMethodFailure(error));
    }
}
function* updatePaymentMethodRequest(action) {
    try {
        const encodedParam = encodeURIComponent(action.payload.paymentMethod.paymentMethodId);
        const data = action.payload.paymentMethod;
        const response = yield call(axios.post, `<TODOM>/${encodedParam}`, data);
        yield put(updatePaymentMethodSuccess(response.data));
        // Refresh the list after updating
        yield call(fetchPaymentMethodRequest);
    } catch (error) {
        yield put(updatePaymentMethodFailure(error.message));
    }
}

function* paymentMethodSaga() {
    yield takeLatest(FETCH_PAYMENTMETHOD_REQUEST, fetchPaymentMethodRequest);
    yield takeLatest(ADD_PAYMENTMETHOD_REQUEST, addPaymentMethodRequest);
    yield takeLatest(UPDATE_PAYMENTMETHOD_REQUEST, updatePaymentMethodRequest);
    yield takeLatest(SELECT_PAYMENTMETHOD_REQUEST, selectPaymentMethodRequest);
}

export default paymentMethodSaga;

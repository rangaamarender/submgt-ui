import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    fetchCreditCardSuccess,
    fetchCreditCardFailure,
    // selectCreditCardSuccess,
    // selectCreditCardFailure,
    addCreditCardSuccess,
    addCreditCardFailure,
    // updateCreditCardSuccess,
    // updateCreditCardFailure,
    // FETCH_CREDITCARD_REQUEST,
    ADD_CREDITCARD_REQUEST,
    // SELECT_CREDITCARD_REQUEST,
    // UPDATE_CREDITCARD_REQUEST,
} from '../actions/creditCardActions';

import { processResponseData } from '../../utils/processResponseData';

//Fetch Request
function* fetchCreditCardRequest(action) {
    try {
        const { page, pageSize } = action.payload;
        console.log(page,pageSize);
        const response = yield call(axios.post, `<TODO>?page=CREDITCARD&pageSize=${pageSize}`);
        const data = processResponseData(response);
        yield put(fetchCreditCardSuccess(data));
    } catch (error) {
        yield put(fetchCreditCardFailure(error.message));
    }
}
//Select Request
// function* selectCreditCardRequest(action) {
//     try {
//         const encodedParam = encodeURIComponent(action.payload);
//         const response = yield call(axios.get, `<TODOM>/${encodedParam}`);
//         yield put(selectCreditCardSuccess(response.data));
//     } catch (error) {
//         yield put(selectCreditCardFailure(error.message));
//     }
// }
function* addCreditCardRequest(action) {
    try {
        const data = action.payload.creditCard;
        const response = yield call(axios.post, `<TODOM>`, data);
        yield put(addCreditCardSuccess(response.data));
        // Refresh the list after adding
        yield call(fetchCreditCardRequest);
    } catch (error) {
        yield put(addCreditCardFailure(error.message));
    }
}
// function* updateCreditCardRequest(action) {
//     try {
//         const encodedParam = encodeURIComponent(action.payload.creditCard.creditCardId);
//         const data = action.payload.creditCard;
//         const response = yield call(axios.post, `<TODOM>/${encodedParam}`, data);
//         yield put(updateCreditCardSuccess(response.data));
//         // Refresh the list after updating
//         yield call(fetchCreditCardRequest);
//     } catch (error) {
//         yield put(updateCreditCardFailure(error.message));
//     }
// }

function* creditCardSaga() {
    // yield takeLatest(FETCH_CREDITCARD_REQUEST, fetchCreditCardRequest);
    yield takeLatest(ADD_CREDITCARD_REQUEST, addCreditCardRequest);
    //yield takeLatest(UPDATE_CREDITCARD_REQUEST, updateCreditCardRequest);
    //yield takeLatest(SELECT_CREDITCARD_REQUEST, selectCreditCardRequest);
}

export default creditCardSaga;

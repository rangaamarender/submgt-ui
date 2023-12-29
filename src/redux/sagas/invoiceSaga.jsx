import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    fetchInvoiceSuccess,
    fetchInvoiceFailure,
    selectInvoiceSuccess,
    selectInvoiceFailure,
    addInvoiceSuccess,
    addInvoiceFailure,
    updateInvoiceSuccess,
    updateInvoiceFailure,
    FETCH_INVOICE_REQUEST,
    ADD_INVOICE_REQUEST,
    SELECT_INVOICE_REQUEST,
    UPDATE_INVOICE_REQUEST,
} from '../actions/invoiceActions';

import { processResponseData } from '../../utils/processResponseData';

//Fetch Request
function* fetchInvoiceRequest(action) {
    try {
        const { page, pageSize } = action.payload;
        const response = yield call(
            axios.get,
            `http://localhost:8080/retrieveInvoices?page=${page}&pageSize=${pageSize}`
        );
        const data = processResponseData(response);
        yield put(fetchInvoiceSuccess(data));
    } catch (error) {
        yield put(fetchInvoiceFailure(error.message));
    }
}
//Select Request
function* selectInvoiceRequest(action) {
    try {
        const encodedParam = encodeURIComponent(action.payload);
        const response = yield call(axios.get, `<TODOM>/${encodedParam}`);
        yield put(selectInvoiceSuccess(response.data));
    } catch (error) {
        yield put(selectInvoiceFailure(error.message));
    }
}
function* addInvoiceRequest(action) {
    try {
        const data = action.payload.invoice;
        const response = yield call(axios.post, `<TODOM>`, data);
        yield put(addInvoiceSuccess(response.data));
        // Refresh the list after adding
        yield call(fetchInvoiceRequest);
    } catch (error) {
        yield put(addInvoiceFailure(error.message));
    }
}
function* updateInvoiceRequest(action) {
    try {
        const encodedParam = encodeURIComponent(action.payload.invoice.invoiceId);
        const data = action.payload.invoice;
        const response = yield call(axios.post, `<TODOM>/${encodedParam}`, data);
        yield put(updateInvoiceSuccess(response.data));
        // Refresh the list after updating
        yield call(fetchInvoiceRequest);
    } catch (error) {
        yield put(updateInvoiceFailure(error.message));
    }
}

function* invoiceSaga() {
    yield takeLatest(FETCH_INVOICE_REQUEST, fetchInvoiceRequest);
    yield takeLatest(ADD_INVOICE_REQUEST, addInvoiceRequest);
    yield takeLatest(UPDATE_INVOICE_REQUEST, updateInvoiceRequest);
    yield takeLatest(SELECT_INVOICE_REQUEST, selectInvoiceRequest);
}

export default invoiceSaga;

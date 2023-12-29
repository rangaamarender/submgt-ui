import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    fetchSubscriptionSuccess,
    fetchSubscriptionFailure,
    selectSubscriptionSuccess,
    selectSubscriptionFailure,
    addSubscriptionSuccess,
    addSubscriptionFailure,
    updateSubscriptionSuccess,
    updateSubscriptionFailure,
    FETCH_SUBSCRIPTION_REQUEST,
    ADD_SUBSCRIPTION_REQUEST,
    SELECT_SUBSCRIPTION_REQUEST,
    UPDATE_SUBSCRIPTION_REQUEST,
} from '../actions/subscriptionActions';

import { processResponseData } from '../../utils/processResponseData';

//Fetch Request
function* fetchSubscriptionRequest(action) {
    try {
        const searchCriteria = null;
        const response = yield call(axios.post, '<TODO>', searchCriteria);
        yield put(fetchSubscriptionSuccess(response.data));
    } catch (error) {
        yield put(fetchSubscriptionFailure(error.message));
    }
}
//Select Request
function* selectSubscriptionRequest(action) {
    try {
        const encodedParam = encodeURIComponent(action.payload);
        const response = yield call(axios.get, `<TODOM>/${encodedParam}`);
        const data = processResponseData(response);
        yield put(selectSubscriptionSuccess(data));
    } catch (error) {
        yield put(selectSubscriptionFailure(error.message));
    }
}
function* addSubscriptionRequest(action) {
    try {
        const data = action.payload.subscription;
        const response = yield call(axios.post, `<TODOM>`, data);
        yield put(addSubscriptionSuccess(response.data));
        // Refresh the list after adding
        yield call(fetchSubscriptionRequest);
    } catch (error) {
        yield put(addSubscriptionFailure(error.message));
    }
}
function* updateSubscriptionRequest(action) {
    try {
        const encodedParam = encodeURIComponent(action.payload.subscription.subscriptionId);
        const data = action.payload.subscription;
        const response = yield call(axios.post, `<TODOM>/${encodedParam}`, data);
        yield put(updateSubscriptionSuccess(response.data));
        // Refresh the list after updating
        yield call(fetchSubscriptionRequest);
    } catch (error) {
        yield put(updateSubscriptionFailure(error.message));
    }
}

function* subscriptionSaga() {
    yield takeLatest(FETCH_SUBSCRIPTION_REQUEST, fetchSubscriptionRequest);
    yield takeLatest(ADD_SUBSCRIPTION_REQUEST, addSubscriptionRequest);
    yield takeLatest(UPDATE_SUBSCRIPTION_REQUEST, updateSubscriptionRequest);
    yield takeLatest(SELECT_SUBSCRIPTION_REQUEST, selectSubscriptionRequest);
}

export default subscriptionSaga;

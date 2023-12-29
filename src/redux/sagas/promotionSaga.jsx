import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    fetchPromotionSuccess,
    fetchPromotionFailure,
    selectPromotionSuccess,
    selectPromotionFailure,
    addPromotionSuccess,
    addPromotionFailure,
    updatePromotionSuccess,
    updatePromotionFailure,
    FETCH_PROMOTION_REQUEST,
    ADD_PROMOTION_REQUEST,
    SELECT_PROMOTION_REQUEST,
    UPDATE_PROMOTION_REQUEST,
} from '../actions/promotionActions';

import { processResponseData } from '../../utils/processResponseData';

//Fetch Request
function* fetchPromotionRequest(action) {
    try {
        const { page, pageSize } = action.payload;
        const response = yield call(
            axios.get,
            `http://localhost:8080/retrievePromotions?page=${page}&pageSize=${pageSize}`
        );
        const data = processResponseData(response);
        yield put(fetchPromotionSuccess(data));
    } catch (error) {
        yield put(fetchPromotionFailure(error.message));
    }
}
//Select Request
function* selectPromotionRequest(action) {
    try {
        const encodedParam = encodeURIComponent(action.payload);
        const response = yield call(axios.get, `<TODOM>/${encodedParam}`);
        yield put(selectPromotionSuccess(response.data));
    } catch (error) {
        yield put(selectPromotionFailure(error.message));
    }
}
function* addPromotionRequest(action) {
    try {
        const data = action.payload.promotion;
        const response = yield call(axios.post, `<TODOM>`, data);
        yield put(addPromotionSuccess(response.data));
        // Refresh the list after adding
        yield call(fetchPromotionRequest);
    } catch (error) {
        yield put(addPromotionFailure(error.message));
    }
}
function* updatePromotionRequest(action) {
    try {
        const encodedParam = encodeURIComponent(action.payload.promotion.promotionId);
        const data = action.payload.promotion;
        const response = yield call(axios.post, `<TODOM>/${encodedParam}`, data);
        yield put(updatePromotionSuccess(response.data));
        // Refresh the list after updating
        yield call(fetchPromotionRequest);
    } catch (error) {
        yield put(updatePromotionFailure(error.message));
    }
}

function* promotionSaga() {
    yield takeLatest(FETCH_PROMOTION_REQUEST, fetchPromotionRequest);
    yield takeLatest(ADD_PROMOTION_REQUEST, addPromotionRequest);
    yield takeLatest(UPDATE_PROMOTION_REQUEST, updatePromotionRequest);
    yield takeLatest(SELECT_PROMOTION_REQUEST, selectPromotionRequest);
}

export default promotionSaga;

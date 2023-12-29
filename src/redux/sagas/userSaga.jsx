import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    fetchUserSuccess,
    fetchUserFailure,
    selectUserSuccess,
    selectUserFailure,
    addUserSuccess,
    addUserFailure,
    updateUserSuccess,
    updateUserFailure,
    FETCH_USER_REQUEST,
    ADD_USER_REQUEST,
    SELECT_USER_REQUEST,
    UPDATE_USER_REQUEST,
} from '../actions/userActions';

import { processResponseData } from '../../utils/processResponseData';

//Fetch Request
function* fetchUserRequest(action) {
    try {
        const { page, pageSize } = action.payload;
        const response = yield call(axios.get, `http://localhost:8080/v1/susers?page=${page}&pageSize=${pageSize}`);
        const data = processResponseData(response);
        yield put(fetchUserSuccess(data));
    } catch (error) {
        yield put(fetchUserFailure(error.message));
    }
}
//Select Request
function* selectUserRequest(action) {
    try {
        const encodedParam = encodeURIComponent(action.payload);
        const response = yield call(axios.get, `http://localhost:8080/v1/suser/${encodedParam}`);
        console.log('Got it ----->' + response.data.userID);
        yield put(selectUserSuccess(response.data));
    } catch (error) {
        yield put(selectUserFailure(error.message));
    }
}
function* addUserRequest(action) {
    try {
        const data = action.payload.user;
        const response = yield call(axios.post, `<TODOM>`, data);
        yield put(addUserSuccess(response.data));
        // Refresh the list after adding
        yield call(fetchUserRequest);
    } catch (error) {
        yield put(addUserFailure(error.message));
    }
}
function* updateUserRequest(action) {
    try {
        const encodedParam = encodeURIComponent(action.payload.user.userId);
        const data = action.payload.user;
        const response = yield call(axios.post, `<TODOM>/${encodedParam}`, data);
        yield put(updateUserSuccess(response.data));
        // Refresh the list after updating
        yield call(fetchUserRequest);
    } catch (error) {
        yield put(updateUserFailure(error.message));
    }
}

function* userSaga() {
    yield takeLatest(FETCH_USER_REQUEST, fetchUserRequest);
    yield takeLatest(ADD_USER_REQUEST, addUserRequest);
    yield takeLatest(UPDATE_USER_REQUEST, updateUserRequest);
    yield takeLatest(SELECT_USER_REQUEST, selectUserRequest);
}

export default userSaga;

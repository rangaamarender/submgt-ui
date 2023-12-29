import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    fetchTenantSuccess,
    fetchTenantFailure,
    selectTenantSuccess,
    selectTenantFailure,
    addTenantSuccess,
    addTenantFailure,
    updateTenantSuccess,
    updateTenantFailure,
    FETCH_TENANT_REQUEST,
    ADD_TENANT_REQUEST,
    SELECT_TENANT_REQUEST,
    UPDATE_TENANT_REQUEST,
} from '../actions/tenantActions';

import { processResponseData } from '../../utils/processResponseData';
import { config } from '../../utils/config';

//Fetch Request
function* fetchTenantRequest(action) {
    try {
        const { page, pageSize } = action.payload;
        //const params = { page: page, pageSize: pageSize };
        //console.log(`url --> ${config.url.API_BASE_URL}`);
        //const response = makeApiCall('/tenants?', 'GET', params);
        const response = yield call(axios.get, `${config.url.API_BASE_URL}/tenants?page=${page}&pageSize=${pageSize}`);
        const data = processResponseData(response);
        yield put(fetchTenantSuccess(data));
    } catch (error) {
        yield put(fetchTenantFailure(error.message));
    }
}
//Select Request
function* selectTenantRequest(action) {
    try {
        const encodedParam = encodeURIComponent(action.payload);
        const response = yield call(axios.get, `http://localhost:8080/tenant/${encodedParam}`);
        yield put(selectTenantSuccess(response.data));
    } catch (error) {
        yield put(selectTenantFailure(error.message));
    }
}
function* addTenantRequest(action) {
    try {
        const data = action.payload.tenant;
        const response = yield call(axios.post, `<TODOM>`, data);
        yield put(addTenantSuccess(response.data));
        // Refresh the list after adding
        yield call(fetchTenantRequest);
    } catch (error) {
        yield put(addTenantFailure(error.message));
    }
}
function* updateTenantRequest(action) {
    try {
        const encodedParam = encodeURIComponent(action.payload.tenant.tenantId);
        const data = action.payload.tenant;
        const response = yield call(axios.post, `http://localhost:8080/updateTenantDetails/${encodedParam}`, data);
        yield put(updateTenantSuccess(response.data));
        // Refresh the list after updating
        yield call(fetchTenantRequest);
    } catch (error) {
        yield put(updateTenantFailure(error.message));
    }
}

function* tenantSaga() {
    yield takeLatest(FETCH_TENANT_REQUEST, fetchTenantRequest);
    yield takeLatest(ADD_TENANT_REQUEST, addTenantRequest);
    yield takeLatest(UPDATE_TENANT_REQUEST, updateTenantRequest);
    yield takeLatest(SELECT_TENANT_REQUEST, selectTenantRequest);
}

export default tenantSaga;

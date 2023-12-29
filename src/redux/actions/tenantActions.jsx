//For FETCH
export const FETCH_TENANT_REQUEST = 'FETCH_TENANT_REQUEST';
export const FETCH_TENANT_SUCCESS = 'FETCH_TENANT_SUCCESS';
export const FETCH_TENANT_FAILURE = 'FETCH_TENANT_FAILURE';
//For SELECT
export const SELECT_TENANT_REQUEST = 'SELECT_TENANT_REQUEST';
export const SELECT_TENANT_SUCCESS = 'SELECT_TENANT_SUCCESS';
export const SELECT_TENANT_FAILURE = 'SELECT_TENANT_FAILURE';
//For ADD
export const ADD_TENANT_REQUEST = 'ADD_TENANT_REQUEST';
export const ADD_TENANT_SUCCESS = 'ADD_TENANT_SUCCESS';
export const ADD_TENANT_FAILURE = 'ADD_TENANT_FAILURE';
//For UPDATE
export const INIT_UPDATE_TENANT_REQUEST = 'INIT_UPDATE_TENANT_REQUEST';
export const UPDATE_TENANT_REQUEST = 'UPDATE_TENANT_REQUEST';
export const UPDATE_TENANT_SUCCESS = 'UPDATE_TENANT_SUCCESS';
export const UPDATE_TENANT_FAILURE = 'UPDATE_TENANT_FAILURE';

//fetch
export const fetchTenantRequest = (searchCriteria) => ({
    type: FETCH_TENANT_REQUEST,
    payload: searchCriteria,
});

export const fetchTenantSuccess = (tenants) => ({
    type: FETCH_TENANT_SUCCESS,
    payload: tenants,
});

export const fetchTenantFailure = (error) => ({
    type: FETCH_TENANT_FAILURE,
    payload: error,
});

//select
export const selectTenantRequest = (tenantId) => ({
    type: SELECT_TENANT_REQUEST,
    payload: tenantId,
});

export const selectTenantSuccess = (tenant) => ({
    type: SELECT_TENANT_SUCCESS,
    payload: tenant,
});

export const selectTenantFailure = (error) => ({
    type: SELECT_TENANT_FAILURE,
    payload: error,
});
//add
export const addTenantRequest = (tenant) => ({
    type: ADD_TENANT_REQUEST,
    payload: tenant,
});

export const addTenantSuccess = () => ({
    type: ADD_TENANT_SUCCESS,
});

export const addTenantFailure = (error) => ({
    type: ADD_TENANT_FAILURE,
    payload: error,
});
//update
export const initUpdateTenantRequest = () => ({
    type: INIT_UPDATE_TENANT_REQUEST,
});
export const updateTenantRequest = (tenant) => ({
    type: UPDATE_TENANT_REQUEST,
    payload: tenant,
});

export const updateTenantSuccess = () => ({
    type: UPDATE_TENANT_SUCCESS,
});

export const updateTenantFailure = (error) => ({
    type: UPDATE_TENANT_FAILURE,
    payload: error,
});

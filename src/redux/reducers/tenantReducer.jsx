import {
    FETCH_TENANT_REQUEST,
    FETCH_TENANT_SUCCESS,
    FETCH_TENANT_FAILURE,
    SELECT_TENANT_REQUEST,
    SELECT_TENANT_SUCCESS,
    SELECT_TENANT_FAILURE,
    ADD_TENANT_REQUEST,
    ADD_TENANT_SUCCESS,
    ADD_TENANT_FAILURE,
    UPDATE_TENANT_REQUEST,
    UPDATE_TENANT_SUCCESS,
    UPDATE_TENANT_FAILURE,
    INIT_UPDATE_TENANT_REQUEST,
} from '../actions/tenantActions';
import { ADD_ACTION, UPDATE_ACTION, VIEW_ACTION } from '../../utils/ActionTypes';

const TENANT_DATA = {
    tenantID: ' ',
    createdBy: ' ',
    createdDt: ' ',
    updatedBy: ' ',
    updatedDt: ' ',
    companyName: ' ',
    externalCode: ' ',
    status: ' ',
};

// initial state
const initialState = {
    searchCriteria: null,
    tenants: [],
    tenant: null,
    tenantId: null,
    selectedTenant: TENANT_DATA,
    mode: VIEW_ACTION,
    navigationData: null,
    pageable: null,
    loading: false,
    error: null,
};

const tenantReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TENANT_REQUEST:
            return { ...state, loading: true, searchCriteria: action.payload, mode: VIEW_ACTION };
        case FETCH_TENANT_SUCCESS:
            return {
                ...state,
                loading: false,
                tenants: action.payload.content,
                navigationData: action.payload.navigationData,
                pageable: action.payload.pageable,
            };
        case FETCH_TENANT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        //select
        case SELECT_TENANT_REQUEST:
            return { ...state, loading: true, tenantId: action.payload, mode: VIEW_ACTION };
        case SELECT_TENANT_SUCCESS:
            return { ...state, loading: false, selectedTenant: action.payload };
        case SELECT_TENANT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ADD_TENANT_REQUEST:
            return { ...state, loading: true, tenant: action.payload, mode: ADD_ACTION };
        case ADD_TENANT_SUCCESS:
            return {
                ...state,
                loading: false,
                tenant: action.payload.content,
                navigationData: action.payload.navigationData,
                pageable: action.payload.pageable,
            };
        case ADD_TENANT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case INIT_UPDATE_TENANT_REQUEST:
            return { ...state, loading: false, mode: UPDATE_ACTION };
        case UPDATE_TENANT_REQUEST:
            return { ...state, loading: true, selectedTenant: action.payload };
        case UPDATE_TENANT_SUCCESS:
            return { ...state, loading: false, selectedTenant: action.payload };
        case UPDATE_TENANT_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default tenantReducer;

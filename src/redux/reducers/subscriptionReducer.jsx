import {
    FETCH_SUBSCRIPTION_REQUEST,
    FETCH_SUBSCRIPTION_SUCCESS,
    FETCH_SUBSCRIPTION_FAILURE,
    SELECT_SUBSCRIPTION_REQUEST,
    SELECT_SUBSCRIPTION_SUCCESS,
    SELECT_SUBSCRIPTION_FAILURE,
    ADD_SUBSCRIPTION_REQUEST,
    ADD_SUBSCRIPTION_SUCCESS,
    ADD_SUBSCRIPTION_FAILURE,
    UPDATE_SUBSCRIPTION_REQUEST,
    UPDATE_SUBSCRIPTION_SUCCESS,
    UPDATE_SUBSCRIPTION_FAILURE,
} from '../actions/subscriptionActions';
import { ADD_ACTION, UPDATE_ACTION, VIEW_ACTION } from '../../utils/ActionTypes';

const SUBSCRIPTION_DATA = {
    subscriptionID: ' ',
    acctNbr: ' ',
    tenantID: ' ',
    createdDt: ' ',
    status: ' ',
    approvedBy: ' ',
    approvedDt: ' ',
    phase: ' ',
    trailDays: ' ',
    hasBillingSetup: ' ',
    effectiveDt: ' ',
    billPeriodUnit: ' ',
    billcycleDay: ' ',
    nextBillDt: ' ',
    invoiceType: ' ',
    balanceAmt: ' ',
    planCode: ' ',
    planDesc: ' ',
    startDt: ' ',
    endDt: ' ',
    contacts: ' ',
    paymentMethods: ' ',
    tenant: ' ',
};

// initial state
const initialState = {
    searchCriteria: null,
    subscriptions: [],
    subscription: null,
    subscriptionId: null,
    selectedSubscription: SUBSCRIPTION_DATA,
    mode: VIEW_ACTION,
    navigationData: null,
    pageable: null,
    loading: false,
    error: null,
};

const subscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUBSCRIPTION_REQUEST:
            return { ...state, loading: true, searchCriteria: action.payload, mode: VIEW_ACTION };
        case FETCH_SUBSCRIPTION_SUCCESS:
            return { ...state, loading: false, subscriptions: action.payload };
        case FETCH_SUBSCRIPTION_FAILURE:
            return { ...state, loading: false, error: action.payload };
        //select
        case SELECT_SUBSCRIPTION_REQUEST:
            return { ...state, loading: true, subscriptionId: action.payload, mode: VIEW_ACTION };
        case SELECT_SUBSCRIPTION_SUCCESS:
            return { ...state, loading: false, selectedSubscription: action.payload };
        case SELECT_SUBSCRIPTION_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ADD_SUBSCRIPTION_REQUEST:
            return { ...state, loading: true, subscription: action.payload, mode: ADD_ACTION };
        case ADD_SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                loading: false,
                subscription: action.payload.content,
                navigationData: action.payload.navigationData,
                pageable: action.payload.pageable,
            };
        case ADD_SUBSCRIPTION_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case UPDATE_SUBSCRIPTION_REQUEST:
            return { ...state, loading: true, selectedSubscription: action.payload, mode: UPDATE_ACTION };
        case UPDATE_SUBSCRIPTION_SUCCESS:
            return { ...state, loading: false, selectedSubscription: action.payload };
        case UPDATE_SUBSCRIPTION_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default subscriptionReducer;

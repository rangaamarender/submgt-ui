import {
    FETCH_PAYMENTMETHOD_REQUEST,
    FETCH_PAYMENTMETHOD_SUCCESS,
    FETCH_PAYMENTMETHOD_FAILURE,
    SELECT_PAYMENTMETHOD_REQUEST,
    SELECT_PAYMENTMETHOD_SUCCESS,
    SELECT_PAYMENTMETHOD_FAILURE,
    ADD_PAYMENTMETHOD_REQUEST,
    ADD_PAYMENTMETHOD_SUCCESS,
    ADD_PAYMENTMETHOD_FAILURE,
    UPDATE_PAYMENTMETHOD_REQUEST,
    UPDATE_PAYMENTMETHOD_SUCCESS,
    UPDATE_PAYMENTMETHOD_FAILURE,
    INIT_ADD_PAYMENTMETHOD_REQUEST,
    CANCEL_PAYMENTMETHOD_ACTION,
} from '../actions/paymentMethodActions';
import { ADD_ACTION, UPDATE_ACTION, VIEW_ACTION } from '../../utils/ActionTypes';

const CREDITCARD_DATA = {
    name: '',
    creditCardHolderName: '',
    creditCardType: '',
    creditCardNum: '',
    creditCardExpDate: '',
    creditCardExpMonth: '',
    creditCardExpYear: '',
    creditCardCvv: '',
};

const PAYMENTMETHOD_DATA = {
    gtwyCustomerPymntProfileID: ' ',
    gtwyCustomerProfileID: ' ',
    gtwyPymntProfileID: ' ',
    name: ' ',
    defaultPymntInd: ' ',
    status: ' ',
    last4Digits: ' ',
    expirationEncDt: ' ',
    cardType: ' ',
    pymntMethodID: ' ',
};

// initial state
const initialState = {
    searchCriteria: null,
    paymentMethods: [],
    paymentMethod: null,
    creditCard: CREDITCARD_DATA,
    paymentMethodId: null,
    subscriptionID: null,
    selectedPaymentMethod: PAYMENTMETHOD_DATA,
    mode: VIEW_ACTION,
    navigationData: null,
    pageable: null,
    loading: false,
    error: null,
};

const paymentMethodReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PAYMENTMETHOD_REQUEST:
            return {
                ...state,
                loading: true,
                searchCriteria: action.payload,
                mode: VIEW_ACTION,
            };
        case FETCH_PAYMENTMETHOD_SUCCESS:
            return {
                ...state,
                loading: false,
                paymentMethods: action.payload,
            };
        case FETCH_PAYMENTMETHOD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        //select
        case SELECT_PAYMENTMETHOD_REQUEST:
            return { ...state, loading: true, paymentMethodId: action.payload, mode: VIEW_ACTION };
        case SELECT_PAYMENTMETHOD_SUCCESS:
            return { ...state, loading: false, selectedPaymentMethod: action.payload };
        case SELECT_PAYMENTMETHOD_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case INIT_ADD_PAYMENTMETHOD_REQUEST:
            return {
                ...state,
                loading: true,
                subscriptionID: action.payload,
                mode: ADD_ACTION,
            };
        case ADD_PAYMENTMETHOD_REQUEST:
            return {
                ...state,
                loading: true,
                creditCard: action.payload.creditCard,
                subscriptionID: action.payload.subscriptionID,
            };
        case ADD_PAYMENTMETHOD_SUCCESS:
            return {
                ...state,
                loading: false,
                paymentMethod: action.payload.content,
            };
        case ADD_PAYMENTMETHOD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case UPDATE_PAYMENTMETHOD_REQUEST:
            return {
                ...state,
                loading: true,
                selectedPaymentMethod: action.payload,
                mode: UPDATE_ACTION,
            };
        case UPDATE_PAYMENTMETHOD_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedPaymentMethod: action.payload,
            };
        case UPDATE_PAYMENTMETHOD_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case CANCEL_PAYMENTMETHOD_ACTION:
            return { ...state, loading: false, mode: VIEW_ACTION };
        default:
            return state;
    }
};

export default paymentMethodReducer;

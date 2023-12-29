import {
    FETCH_CREDITCARD_REQUEST,
    FETCH_CREDITCARD_SUCCESS,
    FETCH_CREDITCARD_FAILURE,
    SELECT_CREDITCARD_REQUEST,
    SELECT_CREDITCARD_SUCCESS,
    SELECT_CREDITCARD_FAILURE,
    ADD_CREDITCARD_REQUEST,
    ADD_CREDITCARD_SUCCESS,
    ADD_CREDITCARD_FAILURE,
    UPDATE_CREDITCARD_REQUEST,
    UPDATE_CREDITCARD_SUCCESS,
    UPDATE_CREDITCARD_FAILURE,
} from '../actions/creditCardActions';
import { ADD_ACTION, UPDATE_ACTION, VIEW_ACTION } from '../../utils/ActionTypes';

const CREDITCARD_DATA = {
    name: ' ',
    creditCardHolderName: ' ',
    creditCardType: ' ',
    creditCardNum: ' ',
    creditCardExpDate: ' ',
    creditCardExpMonth: ' ',
    creditCardExpYear: ' ',
    creditCardCvv: ' ',
};

// initial state
const initialState = {
    searchCriteria: null,
    creditCards: [],
    creditCard: null,
    creditCardId: null,
    selectedCreditCard: CREDITCARD_DATA,
    mode: VIEW_ACTION,
    navigationData: null,
    pageable: null,
    loading: false,
    error: null,
};

const creditCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CREDITCARD_REQUEST:
            return { ...state, loading: true, searchCriteria: action.payload, mode: VIEW_ACTION };
        case FETCH_CREDITCARD_SUCCESS:
            return {
                ...state,
                loading: false,
                creditCards: action.payload.content,
                navigationData: action.payload.navigationData,
                pageable: action.payload.pageable,
            };
        case FETCH_CREDITCARD_FAILURE:
            return { ...state, loading: false, error: action.payload };
        //select
        case SELECT_CREDITCARD_REQUEST:
            return { ...state, loading: true, creditCardId: action.payload, mode: VIEW_ACTION };
        case SELECT_CREDITCARD_SUCCESS:
            return { ...state, loading: false, selectedCreditCard: action.payload };
        case SELECT_CREDITCARD_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ADD_CREDITCARD_REQUEST:
            return { ...state, loading: true, creditCard: action.payload, mode: ADD_ACTION };
        case ADD_CREDITCARD_SUCCESS:
            return {
                ...state,
                loading: false,
                creditCard: action.payload.content,
                navigationData: action.payload.navigationData,
                pageable: action.payload.pageable,
            };
        case ADD_CREDITCARD_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case UPDATE_CREDITCARD_REQUEST:
            return { ...state, loading: true, selectedCreditCard: action.payload, mode: UPDATE_ACTION };
        case UPDATE_CREDITCARD_SUCCESS:
            return { ...state, loading: false, selectedCreditCard: action.payload };
        case UPDATE_CREDITCARD_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default creditCardReducer;

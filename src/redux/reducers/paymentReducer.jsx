// paymentReducer.js

import { FETCH_PAYMENTS_REQUEST, FETCH_PAYMENTS_SUCCESS, FETCH_PAYMENTS_FAILURE } from '../actions/paymentActions';

const initialState = {
    payments: [],
    loading: false,
    error: null,
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PAYMENTS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_PAYMENTS_SUCCESS:
            return { ...state, loading: false, payments: action.payload };
        case FETCH_PAYMENTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default paymentReducer;

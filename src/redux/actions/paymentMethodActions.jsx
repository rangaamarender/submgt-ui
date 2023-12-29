//For FETCH
export const FETCH_PAYMENTMETHOD_REQUEST = 'FETCH_PAYMENTMETHOD_REQUEST';
export const FETCH_PAYMENTMETHOD_SUCCESS = 'FETCH_PAYMENTMETHOD_SUCCESS';
export const FETCH_PAYMENTMETHOD_FAILURE = 'FETCH_PAYMENTMETHOD_FAILURE';
//For SELECT
export const SELECT_PAYMENTMETHOD_REQUEST = 'SELECT_PAYMENTMETHOD_REQUEST';
export const SELECT_PAYMENTMETHOD_SUCCESS = 'SELECT_PAYMENTMETHOD_SUCCESS';
export const SELECT_PAYMENTMETHOD_FAILURE = 'SELECT_PAYMENTMETHOD_FAILURE';
//For ADD
export const INIT_ADD_PAYMENTMETHOD_REQUEST = 'INIT_ADD_PAYMENTMETHOD_REQUEST';
export const ADD_PAYMENTMETHOD_REQUEST = 'ADD_PAYMENTMETHOD_REQUEST';
export const ADD_PAYMENTMETHOD_SUCCESS = 'ADD_PAYMENTMETHOD_SUCCESS';
export const ADD_PAYMENTMETHOD_FAILURE = 'ADD_PAYMENTMETHOD_FAILURE';
//For UPDATE
export const UPDATE_PAYMENTMETHOD_REQUEST = 'UPDATE_PAYMENTMETHOD_REQUEST';
export const UPDATE_PAYMENTMETHOD_SUCCESS = 'UPDATE_PAYMENTMETHOD_SUCCESS';
export const UPDATE_PAYMENTMETHOD_FAILURE = 'UPDATE_PAYMENTMETHOD_FAILURE';
export const CANCEL_PAYMENTMETHOD_ACTION = 'CANCEL_PAYMENTMETHOD_ACTION';
//fetch
export const fetchPaymentMethodRequest = (searchCriteria) => ({
    type: FETCH_PAYMENTMETHOD_REQUEST,
    payload: searchCriteria,
});

export const fetchPaymentMethodSuccess = (paymentMethods) => ({
    type: FETCH_PAYMENTMETHOD_SUCCESS,
    payload: paymentMethods,
});

export const fetchPaymentMethodFailure = (error) => ({
    type: FETCH_PAYMENTMETHOD_FAILURE,
    payload: error,
});

//select
export const selectPaymentMethodRequest = (paymentMethodId) => ({
    type: SELECT_PAYMENTMETHOD_REQUEST,
    payload: paymentMethodId,
});

export const selectPaymentMethodSuccess = (paymentMethod) => ({
    type: SELECT_PAYMENTMETHOD_SUCCESS,
    payload: paymentMethod,
});

export const selectPaymentMethodFailure = (error) => ({
    type: SELECT_PAYMENTMETHOD_FAILURE,
    payload: error,
});
//add

export const initAddPaymentMethodRequest = (subscriptionID) => ({
    type: INIT_ADD_PAYMENTMETHOD_REQUEST,
    payload: subscriptionID,
});

export const addPaymentMethodRequest = (subscriptionID, creditCard) => ({
    type: ADD_PAYMENTMETHOD_REQUEST,
    payload: { creditCard, subscriptionID },
});

export const addPaymentMethodSuccess = () => ({
    type: ADD_PAYMENTMETHOD_SUCCESS,
});

export const addPaymentMethodFailure = (error) => ({
    type: ADD_PAYMENTMETHOD_FAILURE,
    payload: error,
});
//update
export const updatePaymentMethodRequest = (paymentMethod) => ({
    type: UPDATE_PAYMENTMETHOD_REQUEST,
    payload: paymentMethod,
});

export const updatePaymentMethodSuccess = () => ({
    type: UPDATE_PAYMENTMETHOD_SUCCESS,
});

export const updatePaymentMethodFailure = (error) => ({
    type: UPDATE_PAYMENTMETHOD_FAILURE,
    payload: error,
});

export const cancelPaymentMethodAction = () => ({
    type: CANCEL_PAYMENTMETHOD_ACTION,
});

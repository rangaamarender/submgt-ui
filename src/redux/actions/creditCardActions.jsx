//For FETCH
export const FETCH_CREDITCARD_REQUEST = 'FETCH_CREDITCARD_REQUEST';
export const FETCH_CREDITCARD_SUCCESS = 'FETCH_CREDITCARD_SUCCESS';
export const FETCH_CREDITCARD_FAILURE = 'FETCH_CREDITCARD_FAILURE';
//For SELECT
export const SELECT_CREDITCARD_REQUEST = 'SELECT_CREDITCARD_REQUEST';
export const SELECT_CREDITCARD_SUCCESS = 'SELECT_CREDITCARD_SUCCESS';
export const SELECT_CREDITCARD_FAILURE = 'SELECT_CREDITCARD_FAILURE';
//For ADD
export const ADD_CREDITCARD_REQUEST = 'ADD_CREDITCARD_REQUEST';
export const ADD_CREDITCARD_SUCCESS = 'ADD_CREDITCARD_SUCCESS';
export const ADD_CREDITCARD_FAILURE = 'ADD_CREDITCARD_FAILURE';
//For UPDATE
export const UPDATE_CREDITCARD_REQUEST = 'UPDATE_CREDITCARD_REQUEST';
export const UPDATE_CREDITCARD_SUCCESS = 'UPDATE_CREDITCARD_SUCCESS';
export const UPDATE_CREDITCARD_FAILURE = 'UPDATE_CREDITCARD_FAILURE';

//fetch
export const fetchCreditCardRequest = (searchCriteria) => ({
    type: FETCH_CREDITCARD_REQUEST,
    payload: searchCriteria,
});

export const fetchCreditCardSuccess = (creditCards) => ({
    type: FETCH_CREDITCARD_SUCCESS,
    payload: creditCards,
});

export const fetchCreditCardFailure = (error) => ({
    type: FETCH_CREDITCARD_FAILURE,
    payload: error,
});

//select
export const selectCreditCardRequest = (creditCardId) => ({
    type: SELECT_CREDITCARD_REQUEST,
    payload: creditCardId,
});

export const selectCreditCardSuccess = (creditCard) => ({
    type: SELECT_CREDITCARD_SUCCESS,
    payload: creditCard,
});

export const selectCreditCardFailure = (error) => ({
    type: SELECT_CREDITCARD_FAILURE,
    payload: error,
});
//add
export const addCreditCardRequest = (creditCard) => ({
    type: ADD_CREDITCARD_REQUEST,
    payload: creditCard,
});

export const addCreditCardSuccess = () => ({
    type: ADD_CREDITCARD_SUCCESS,
});

export const addCreditCardFailure = (error) => ({
    type: ADD_CREDITCARD_FAILURE,
    payload: error,
});
//update
export const updateCreditCardRequest = (creditCard) => ({
    type: UPDATE_CREDITCARD_REQUEST,
    payload: creditCard,
});

export const updateCreditCardSuccess = () => ({
    type: UPDATE_CREDITCARD_SUCCESS,
});

export const updateCreditCardFailure = (error) => ({
    type: UPDATE_CREDITCARD_FAILURE,
    payload: error,
});

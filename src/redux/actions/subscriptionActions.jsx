//For FETCH
export const FETCH_SUBSCRIPTION_REQUEST = 'FETCH_SUBSCRIPTION_REQUEST';
export const FETCH_SUBSCRIPTION_SUCCESS = 'FETCH_SUBSCRIPTION_SUCCESS';
export const FETCH_SUBSCRIPTION_FAILURE = 'FETCH_SUBSCRIPTION_FAILURE';
//For SELECT
export const SELECT_SUBSCRIPTION_REQUEST = 'SELECT_SUBSCRIPTION_REQUEST';
export const SELECT_SUBSCRIPTION_SUCCESS = 'SELECT_SUBSCRIPTION_SUCCESS';
export const SELECT_SUBSCRIPTION_FAILURE = 'SELECT_SUBSCRIPTION_FAILURE';
//For ADD
export const ADD_SUBSCRIPTION_REQUEST = 'ADD_SUBSCRIPTION_REQUEST';
export const ADD_SUBSCRIPTION_SUCCESS = 'ADD_SUBSCRIPTION_SUCCESS';
export const ADD_SUBSCRIPTION_FAILURE = 'ADD_SUBSCRIPTION_FAILURE';
//For UPDATE
export const UPDATE_SUBSCRIPTION_REQUEST = 'UPDATE_SUBSCRIPTION_REQUEST';
export const UPDATE_SUBSCRIPTION_SUCCESS = 'UPDATE_SUBSCRIPTION_SUCCESS';
export const UPDATE_SUBSCRIPTION_FAILURE = 'UPDATE_SUBSCRIPTION_FAILURE';

//fetch
export const fetchSubscriptionRequest = () => ({
    type: FETCH_SUBSCRIPTION_REQUEST,
});

export const fetchSubscriptionSuccess = (subscriptions) => ({
    type: FETCH_SUBSCRIPTION_SUCCESS,
    payload: subscriptions,
});

export const fetchSubscriptionFailure = (error) => ({
    type: FETCH_SUBSCRIPTION_FAILURE,
    payload: error,
});

//select
export const selectSubscriptionRequest = (subscriptionId) => ({
    type: SELECT_SUBSCRIPTION_REQUEST,
    payload: subscriptionId,
});

export const selectSubscriptionSuccess = (subscription) => ({
    type: SELECT_SUBSCRIPTION_SUCCESS,
    payload: subscription,
});

export const selectSubscriptionFailure = (error) => ({
    type: SELECT_SUBSCRIPTION_FAILURE,
    payload: error,
});
//add
export const addSubscriptionRequest = (subscription) => ({
    type: ADD_SUBSCRIPTION_REQUEST,
    payload: subscription,
});

export const addSubscriptionSuccess = () => ({
    type: ADD_SUBSCRIPTION_SUCCESS,
});

export const addSubscriptionFailure = (error) => ({
    type: ADD_SUBSCRIPTION_FAILURE,
    payload: error,
});
//update
export const updateSubscriptionRequest = (subscription) => ({
    type: UPDATE_SUBSCRIPTION_REQUEST,
    payload: subscription,
});

export const updateSubscriptionSuccess = () => ({
    type: UPDATE_SUBSCRIPTION_SUCCESS,
});

export const updateSubscriptionFailure = (error) => ({
    type: UPDATE_SUBSCRIPTION_FAILURE,
    payload: error,
});

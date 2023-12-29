export const FETCH_PAYMENTS_REQUEST = 'FETCH_PAYMENTS_REQUEST';
export const FETCH_PAYMENTS_SUCCESS = 'FETCH_PAYMENTS_SUCCESS';
export const FETCH_PAYMENTS_FAILURE = 'FETCH_PAYMENTS_FAILURE';

export const fetchPaymentsRequest = () => ({
    type: FETCH_PAYMENTS_REQUEST,
});

export const fetchPaymentsSuccess = (payments) => ({
    type: FETCH_PAYMENTS_SUCCESS,
    payload: payments,
});

export const fetchPaymentsFailure = (error) => ({
    type: FETCH_PAYMENTS_FAILURE,
    payload: error,
});

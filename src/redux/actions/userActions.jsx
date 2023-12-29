//For FETCH
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
//For SELECT
export const SELECT_USER_REQUEST = 'SELECT_USER_REQUEST';
export const SELECT_USER_SUCCESS = 'SELECT_USER_SUCCESS';
export const SELECT_USER_FAILURE = 'SELECT_USER_FAILURE';
//For ADD
export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';
//For UPDATE
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

//fetch
export const fetchUserRequest = (searchCriteria) => ({
    type: FETCH_USER_REQUEST,
    payload: searchCriteria,
});

export const fetchUserSuccess = (users) => ({
    type: FETCH_USER_SUCCESS,
    payload: users,
});

export const fetchUserFailure = (error) => ({
    type: FETCH_USER_FAILURE,
    payload: error,
});

//select
export const selectUserRequest = (userId) => ({
    type: SELECT_USER_REQUEST,
    payload: userId,
});

export const selectUserSuccess = (user) => ({
    type: SELECT_USER_SUCCESS,
    payload: user,
});

export const selectUserFailure = (error) => ({
    type: SELECT_USER_FAILURE,
    payload: error,
});
//add
export const addUserRequest = (user) => ({
    type: ADD_USER_REQUEST,
    payload: user,
});

export const addUserSuccess = () => ({
    type: ADD_USER_SUCCESS,
});

export const addUserFailure = (error) => ({
    type: ADD_USER_FAILURE,
    payload: error,
});
//update
export const updateUserRequest = (user) => ({
    type: UPDATE_USER_REQUEST,
    payload: user,
});

export const updateUserSuccess = () => ({
    type: UPDATE_USER_SUCCESS,
});

export const updateUserFailure = (error) => ({
    type: UPDATE_USER_FAILURE,
    payload: error,
});

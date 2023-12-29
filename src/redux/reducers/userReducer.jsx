import { ADD_ACTION, UPDATE_ACTION, VIEW_ACTION } from '../../utils/ActionTypes';
import {
    ADD_USER_FAILURE,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    SELECT_USER_FAILURE,
    SELECT_USER_REQUEST,
    SELECT_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
} from '../actions/userActions';
// const ROLE_DATA = {
//     tenantID: ' ',
//     createdBy: ' ',
//     createdDt: ' ',
//     updatedBy: ' ',
//     updatedDt: ' ',
//     roleID: ' ',
//     externalCode: ' ',
//     roleDesc: ' ',
//     roleCode: ' ',
//     roleName: ' ',
// };
const USER_DATA = {
    userID: ' ',
    createdBy: ' ',
    createdDt: ' ',
    updatedBy: ' ',
    updatedDt: ' ',
    emailID: ' ',
    externalCode: ' ',
    lastLoginDt: ' ',
    password: ' ',
    salt: ' ',
    status: ' ',
    roleID: ' ',
    username: ' ',
    userType: ' ',

    phoneNbr: ' ',
    photo: ' ',
};

// initial state
const initialState = {
    searchCriteria: null,
    users: [],
    user: null,
    userId: null,
    selectedUser: USER_DATA,
    mode: VIEW_ACTION,
    navigationData: null,
    pageable: null,
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, loading: true, searchCriteria: action.payload, mode: VIEW_ACTION };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload.content,
                navigationData: action.payload.navigationData,
                pageable: action.payload.pageable,
            };
        case FETCH_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        //select
        case SELECT_USER_REQUEST:
            return {
                ...state,
                loading: true,
                userId: action.payload,
                mode: VIEW_ACTION,
            };
        case SELECT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedUser: action.payload,
            };
        case SELECT_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_USER_REQUEST:
            return {
                ...state,
                loading: true,
                user: action.payload,
                mode: ADD_ACTION,
            };
        case ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.content,
                navigationData: action.payload.navigationData,
                pageable: action.payload.pageable,
            };
        case ADD_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                selectedUser: action.payload,
                mode: UPDATE_ACTION,
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedUser: action.payload,
            };
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;

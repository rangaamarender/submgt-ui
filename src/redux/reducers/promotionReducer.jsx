import {
	FETCH_PROMOTION_REQUEST, 
	FETCH_PROMOTION_SUCCESS,
	FETCH_PROMOTION_FAILURE,
	SELECT_PROMOTION_REQUEST, 
	SELECT_PROMOTION_SUCCESS,
	SELECT_PROMOTION_FAILURE,
	ADD_PROMOTION_REQUEST, 
	ADD_PROMOTION_SUCCESS,
	ADD_PROMOTION_FAILURE,
	UPDATE_PROMOTION_REQUEST, 
	UPDATE_PROMOTION_SUCCESS,
	UPDATE_PROMOTION_FAILURE,
} from "../actions/promotionActions";
import { ADD_ACTION, UPDATE_ACTION, VIEW_ACTION } from '../../utils/ActionTypes';

const PROMOTION_DATA={
 promotionID:' ',
 name:' ',
 description:' ',
 promotionType:' ',
 promotionAmount:' ',
 promotionStatus:' ',
 salesStartDate:' ',
 salesEndDate:' ',
 revenueID:' ',
};

// initial state 
const initialState = {
  searchCriteria:null,
  promotions: [],
  promotion:null,
  promotionId: null,
  selectedPromotion:PROMOTION_DATA,
  mode: VIEW_ACTION,
  navigationData: null,
  pageable: null,
  loading: false,
  error: null,
};

const promotionReducer = (state = initialState, action) => {
switch (action.type) {
	case FETCH_PROMOTION_REQUEST:
		return {...state,loading: true,searchCriteria:action.payload,mode:VIEW_ACTION};
	case FETCH_PROMOTION_SUCCESS:
	   return { ...state, loading: false, promotions: action.payload.content,navigationData:action.payload.navigationData,pageable:action.payload.pageable};
	case FETCH_PROMOTION_FAILURE:
		return {...state, loading: false, error: action.payload};
	//select
	case SELECT_PROMOTION_REQUEST:
		return {...state,loading: true,promotionId:action.payload,mode:VIEW_ACTION};
	case SELECT_PROMOTION_SUCCESS:
		return {...state,loading: false,selectedPromotion: action.payload};
	case SELECT_PROMOTION_FAILURE:
 		return {...state, loading: false, error: action.payload};
	case ADD_PROMOTION_REQUEST:
		return {...state,loading: true,promotion: action.payload,mode:ADD_ACTION};
	case ADD_PROMOTION_SUCCESS:
		return {...state,loading: false,promotion: action.payload.content,navigationData:action.payload.navigationData,pageable:action.payload.pageable};
	case ADD_PROMOTION_FAILURE:
		return {...state, loading: false, error: action.payload};
	case UPDATE_PROMOTION_REQUEST:
		return {...state,loading: true,selectedPromotion: action.payload,mode:UPDATE_ACTION};
	case UPDATE_PROMOTION_SUCCESS:
		return {...state,loading: false,selectedPromotion: action.payload};
	case UPDATE_PROMOTION_FAILURE:
		return {...state, loading: false, error: action.payload};
 	default:
      return state;
  }
};

export default promotionReducer;
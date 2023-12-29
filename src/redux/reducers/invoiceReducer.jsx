import {
	FETCH_INVOICE_REQUEST, 
	FETCH_INVOICE_SUCCESS,
	FETCH_INVOICE_FAILURE,
	SELECT_INVOICE_REQUEST, 
	SELECT_INVOICE_SUCCESS,
	SELECT_INVOICE_FAILURE,
	ADD_INVOICE_REQUEST, 
	ADD_INVOICE_SUCCESS,
	ADD_INVOICE_FAILURE,
	UPDATE_INVOICE_REQUEST, 
	UPDATE_INVOICE_SUCCESS,
	UPDATE_INVOICE_FAILURE,
} from "../actions/invoiceActions";
import { ADD_ACTION, UPDATE_ACTION, VIEW_ACTION } from '../../utils/ActionTypes';

const INVOICE_DATA={
 subInvoiceID:' ',
 invoiceAmt:' ',
 invoiceStatus:' ',
 invoiceDueDt:' ',
 subscriptionID:' ',
 discountAmt:' ',
 taxAmt:' ',
 invoiceDt:' ',
 updatedDt:' ',
 paymentStatus:' ',
 paymentDt:' ',
 balanceAmt:' ',
 invoiceItems:' ',
 subscription:' ',
};

// initial state 
const initialState = {
  searchCriteria:null,
  invoices: [],
  invoice:null,
  invoiceId: null,
  selectedInvoice:INVOICE_DATA,
  mode: VIEW_ACTION,
  navigationData: null,
  pageable: null,
  loading: false,
  error: null,
};

const invoiceReducer = (state = initialState, action) => {
switch (action.type) {
	case FETCH_INVOICE_REQUEST:
		return {...state,loading: true,searchCriteria:action.payload,mode:VIEW_ACTION};
	case FETCH_INVOICE_SUCCESS:
	   return { ...state, loading: false, invoices: action.payload.content,navigationData:action.payload.navigationData,pageable:action.payload.pageable};
	case FETCH_INVOICE_FAILURE:
		return {...state, loading: false, error: action.payload};
	//select
	case SELECT_INVOICE_REQUEST:
		return {...state,loading: true,invoiceId:action.payload,mode:VIEW_ACTION};
	case SELECT_INVOICE_SUCCESS:
		return {...state,loading: false,selectedInvoice: action.payload};
	case SELECT_INVOICE_FAILURE:
 		return {...state, loading: false, error: action.payload};
	case ADD_INVOICE_REQUEST:
		return {...state,loading: true,invoice: action.payload,mode:ADD_ACTION};
	case ADD_INVOICE_SUCCESS:
		return {...state,loading: false,invoice: action.payload.content,navigationData:action.payload.navigationData,pageable:action.payload.pageable};
	case ADD_INVOICE_FAILURE:
		return {...state, loading: false, error: action.payload};
	case UPDATE_INVOICE_REQUEST:
		return {...state,loading: true,selectedInvoice: action.payload,mode:UPDATE_ACTION};
	case UPDATE_INVOICE_SUCCESS:
		return {...state,loading: false,selectedInvoice: action.payload};
	case UPDATE_INVOICE_FAILURE:
		return {...state, loading: false, error: action.payload};
 	default:
      return state;
  }
};

export default invoiceReducer;
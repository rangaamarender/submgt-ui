//For FETCH
export const FETCH_INVOICE_REQUEST = "FETCH_INVOICE_REQUEST";
export const FETCH_INVOICE_SUCCESS  = "FETCH_INVOICE_SUCCESS";
export const FETCH_INVOICE_FAILURE   = "FETCH_INVOICE_FAILURE";
//For SELECT
export const SELECT_INVOICE_REQUEST = "SELECT_INVOICE_REQUEST";
export const SELECT_INVOICE_SUCCESS  = "SELECT_INVOICE_SUCCESS";
export const SELECT_INVOICE_FAILURE   = "SELECT_INVOICE_FAILURE";
//For ADD
export const ADD_INVOICE_REQUEST = "ADD_INVOICE_REQUEST";
export const ADD_INVOICE_SUCCESS  = "ADD_INVOICE_SUCCESS";
export const ADD_INVOICE_FAILURE   = "ADD_INVOICE_FAILURE";
//For UPDATE
export const UPDATE_INVOICE_REQUEST = "UPDATE_INVOICE_REQUEST";
export const UPDATE_INVOICE_SUCCESS  = "UPDATE_INVOICE_SUCCESS";
export const UPDATE_INVOICE_FAILURE   = "UPDATE_INVOICE_FAILURE";

//fetch
export const fetchInvoiceRequest = (searchCriteria) => ({
  type: FETCH_INVOICE_REQUEST,
  payload:searchCriteria,
});

export const fetchInvoiceSuccess = (invoices) => ({
  type: FETCH_INVOICE_SUCCESS,
  payload: invoices,
});

export const fetchInvoiceFailure = (error) => ({
  type: FETCH_INVOICE_FAILURE,
  payload: error,
});

//select
export const selectInvoiceRequest = (invoiceId) => ({
  type: SELECT_INVOICE_REQUEST,
  payload: invoiceId,
});

export const selectInvoiceSuccess = (invoice) => ({
  type: SELECT_INVOICE_SUCCESS,
  payload: invoice,
});

export const selectInvoiceFailure = (error) => ({
  type: SELECT_INVOICE_FAILURE,
  payload: error,
});
//add
export const addInvoiceRequest = (invoice) => ({
  type: ADD_INVOICE_REQUEST,
  payload: invoice,
});

export const addInvoiceSuccess = () => ({
  type: ADD_INVOICE_SUCCESS,
});

export const addInvoiceFailure = (error) => ({
  type: ADD_INVOICE_FAILURE,
  payload: error,
});
//update
export const updateInvoiceRequest = (invoice) => ({
  type: UPDATE_INVOICE_REQUEST,
  payload: invoice,
});

export const updateInvoiceSuccess = () => ({
  type: UPDATE_INVOICE_SUCCESS,
});

export const updateInvoiceFailure = (error) => ({
  type: UPDATE_INVOICE_FAILURE,
  payload: error,
});


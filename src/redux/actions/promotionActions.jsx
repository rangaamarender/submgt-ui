//For FETCH
export const FETCH_PROMOTION_REQUEST = "FETCH_PROMOTION_REQUEST";
export const FETCH_PROMOTION_SUCCESS  = "FETCH_PROMOTION_SUCCESS";
export const FETCH_PROMOTION_FAILURE   = "FETCH_PROMOTION_FAILURE";
//For SELECT
export const SELECT_PROMOTION_REQUEST = "SELECT_PROMOTION_REQUEST";
export const SELECT_PROMOTION_SUCCESS  = "SELECT_PROMOTION_SUCCESS";
export const SELECT_PROMOTION_FAILURE   = "SELECT_PROMOTION_FAILURE";
//For ADD
export const ADD_PROMOTION_REQUEST = "ADD_PROMOTION_REQUEST";
export const ADD_PROMOTION_SUCCESS  = "ADD_PROMOTION_SUCCESS";
export const ADD_PROMOTION_FAILURE   = "ADD_PROMOTION_FAILURE";
//For UPDATE
export const UPDATE_PROMOTION_REQUEST = "UPDATE_PROMOTION_REQUEST";
export const UPDATE_PROMOTION_SUCCESS  = "UPDATE_PROMOTION_SUCCESS";
export const UPDATE_PROMOTION_FAILURE   = "UPDATE_PROMOTION_FAILURE";

//fetch
export const fetchPromotionRequest = (searchCriteria) => ({
  type: FETCH_PROMOTION_REQUEST,
  payload:searchCriteria,
});

export const fetchPromotionSuccess = (promotions) => ({
  type: FETCH_PROMOTION_SUCCESS,
  payload: promotions,
});

export const fetchPromotionFailure = (error) => ({
  type: FETCH_PROMOTION_FAILURE,
  payload: error,
});

//select
export const selectPromotionRequest = (promotionId) => ({
  type: SELECT_PROMOTION_REQUEST,
  payload: promotionId,
});

export const selectPromotionSuccess = (promotion) => ({
  type: SELECT_PROMOTION_SUCCESS,
  payload: promotion,
});

export const selectPromotionFailure = (error) => ({
  type: SELECT_PROMOTION_FAILURE,
  payload: error,
});
//add
export const addPromotionRequest = (promotion) => ({
  type: ADD_PROMOTION_REQUEST,
  payload: promotion,
});

export const addPromotionSuccess = () => ({
  type: ADD_PROMOTION_SUCCESS,
});

export const addPromotionFailure = (error) => ({
  type: ADD_PROMOTION_FAILURE,
  payload: error,
});
//update
export const updatePromotionRequest = (promotion) => ({
  type: UPDATE_PROMOTION_REQUEST,
  payload: promotion,
});

export const updatePromotionSuccess = () => ({
  type: UPDATE_PROMOTION_SUCCESS,
});

export const updatePromotionFailure = (error) => ({
  type: UPDATE_PROMOTION_FAILURE,
  payload: error,
});


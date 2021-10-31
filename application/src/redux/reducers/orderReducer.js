import { FETCH_ORDER_SUCCESS, FETCH_ORDER_FAILURE } from "../actions/types";

const INITIAL_STATE = {
  orders: [],
  error: "",
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      };
    case FETCH_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;

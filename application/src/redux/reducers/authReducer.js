import { LOGIN, LOGOUT } from "../actions/types";

const INITIAL_STATE = { email: null, token: null };

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
      };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

export default authReducer;

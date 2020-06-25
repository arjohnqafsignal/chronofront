import {
  FORGET_PASSWORD,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS
} from "./actionTypes";

const initialState = {
  forgetSuccessMsg: null,
  forgetError: null,
  resetPassword: null,
  resetPasswordError: null,
  resetPasswordSuccess: null
};

const forgetPassword = (state = initialState, action) => {
  switch (action.type) {
    case FORGET_PASSWORD:
      state = {
        ...state,
        forgetSuccessMsg: null,
        forgetError: null,
        resetPassword: null,
        resetPasswordError: null,
        resetPasswordSuccess: null
      };
      break;
    case FORGET_PASSWORD_SUCCESS:
      state = {
        ...state,
        forgetSuccessMsg: action.payload.status,
        forgetError: null,
        resetPassword: null,
        resetPasswordError: null,
        resetPasswordSuccess: null
      };
      break;
    case FORGET_PASSWORD_ERROR:
      state = { 
        ...state, 
        forgetSuccessMsg: null,
        forgetError: action.payload,
        resetPassword: null,
        resetPasswordError: null,
        resetPasswordSuccess: null
      };
      break;
    case RESET_PASSWORD:
      state = { 
        ...state, 
        forgetSuccessMsg: null,
        forgetError: null,
        forgetError: null,
        resetPassword: action.payload,
        resetPasswordError: null,
        resetPasswordSuccess: null
      };
      break;
    case RESET_PASSWORD_ERROR:
      state = { 
        ...state, 
        forgetError: null,
        resetPassword: null,
        resetPasswordError: action.payload,
        resetPasswordSuccess: null
      };
      break;
    case RESET_PASSWORD_SUCCESS:
        state = { 
          ...state, 
          forgetError: null,
          resetPassword: null,
          resetPasswordError: null,
          resetPasswordSuccess: action.payload
        };
        break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default forgetPassword;

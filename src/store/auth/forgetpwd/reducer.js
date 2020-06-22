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
  passwords: null,
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
        passwords: null,
        resetPasswordError: null,
        resetPasswordSuccess: null
      };
      break;
    case FORGET_PASSWORD_SUCCESS:
      state = {
        ...state,
        forgetSuccessMsg: action.payload.status,
        passwords: null,
        resetPasswordError: null,
        resetPasswordSuccess: null
      };
      break;
    case FORGET_PASSWORD_ERROR:
      state = { 
        ...state, 
        forgetError: action.payload,
        passwords: null,
        resetPasswordError: null,
        resetPasswordSuccess: null
      };
      break;
    case RESET_PASSWORD:
      state = { 
        ...state, 
        forgetError: null,
        passwords: action.payload,
        resetPasswordError: null,
        resetPasswordSuccess: null
      };
    case RESET_PASSWORD_ERROR:
      state = { 
        ...state, 
        forgetError: null,
        passwords: null,
        resetPasswordError: action.payload,
        resetPasswordSuccess: null
      };
      break;
    case RESET_PASSWORD_SUCCESS:
        state = { 
          ...state, 
          forgetError: null,
          passwords: null,
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

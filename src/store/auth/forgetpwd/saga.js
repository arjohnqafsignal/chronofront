import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { FORGET_PASSWORD, RESET_PASSWORD} from "./actionTypes";
import { userForgetPasswordSuccess, userForgetPasswordError, userResetPasswordError, userResetPasswordSuccess } from "./actions";

import { forgotPassword, resetPassword } from '../../../services/auth'

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* forgetUser({ payload: { user } }) {
  try {
    const response = yield call(forgotPassword, {email: user.email});
    yield put(userForgetPasswordSuccess(response));
  } catch (error) {
    yield put(userForgetPasswordError(error));
  }
}
function* resetUser( { payload } ) {
  try {
    const response = yield call(resetPassword, {
      email: payload.email,
      token: payload.token,
      password: payload.password,
      password_confirmation: payload.password_confirmation
    });
    yield put(userResetPasswordSuccess(response));
  } catch (error) {
    yield put(userResetPasswordError(error));
  }
}

export function* watchUserPasswordForget() {
  yield takeEvery(FORGET_PASSWORD, forgetUser);
}

export function* watchUserPasswordReset() {
  yield takeEvery(RESET_PASSWORD, resetUser);
}

function* forgetPasswordSaga() {
  yield all([fork(watchUserPasswordForget), fork(watchUserPasswordReset)]);
}

export default forgetPasswordSaga;

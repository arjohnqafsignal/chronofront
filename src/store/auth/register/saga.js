import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

//Account Redux states
import { REGISTER_USER } from './actionTypes';
import { registerUserSuccessful, registerUserFailed } from './actions';

import { register } from '../../../services/auth'
// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user } }) {
    try {

        const response = yield call(register, {
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            company_name: user.company_name,
            password: user.password,
            password_confirmation: user.password

        });
        yield put(registerUserSuccessful("Success! Please check you email."));

    } catch (error) {
        yield put(registerUserFailed(error));
    }
}

export function* watchUserRegister() {
    yield takeEvery(REGISTER_USER, registerUser);
}

function* accountSaga() {
    yield all([fork(watchUserRegister)]);
}

export default accountSaga;
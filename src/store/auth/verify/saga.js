import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

//Account Redux states
import { VERIFY_USER } from './actionTypes';
import { verifyUserSuccessful, verifyUserFailed } from './actions';

import { verify } from '../../../services/auth'

function* verifyUser({ payload }) {
    try {
        console.log(payload);
        const response = yield call(verify, {
            query: `${payload.userId}?expires=${payload.expire}&signature=${payload.signature}`
        });
        yield put(verifyUserSuccessful("Account verified successfully!"));

    } catch (error) {
        yield put(verifyUserFailed(error));
    }

    payload.history.push('/login');

}

export function* watchUserVerify() {
    yield takeEvery(VERIFY_USER, verifyUser);
}

function* verifySaga() {
    yield all([fork(watchUserVerify)]);
}

export default verifySaga;
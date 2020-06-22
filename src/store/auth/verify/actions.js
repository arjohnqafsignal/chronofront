import { VERIFY_USER, VERIFY_USER_SUCCESSFUL, VERIFY_USER_FAILED } from './actionTypes';

export const verifyUser = (data) => {
    return {
        type: VERIFY_USER,
        payload: data
    }
}

export const verifyUserSuccessful = (message) => {
    return {
        type: VERIFY_USER_SUCCESSFUL,
        payload: message
    }
}

export const verifyUserFailed = (error) => {
    return {
        type: VERIFY_USER_FAILED,
        payload: error
    }
}

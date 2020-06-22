import { VERIFY_USER, VERIFY_USER_SUCCESSFUL, VERIFY_USER_FAILED } from './actionTypes';

const initialState = {
    verificationError: null, loading: false, verificationSuccess: null, data: null
}

const verify = (state = initialState, action) => {
    switch (action.type) {
        case VERIFY_USER:
            state = {
                ...state,
                data: action.payload,
                loading: true,
                verificationError: null,
                verificationSuccess: null
            }
            break;
        case VERIFY_USER_SUCCESSFUL:
            state = {
                ...state,
                data: null,
                loading: false,
                verificationError: null,
                verificationSuccess: action.payload
            }
            break;
        case VERIFY_USER_FAILED:
            state = {
                ...state,
                data: null,
                loading: false,
                verificationError: action.payload,
                verificationSuccess: null
            }
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default verify;
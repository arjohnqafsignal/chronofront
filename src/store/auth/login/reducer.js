import { LOGIN_USER, LOGIN_SUCCESS, LOGOUT_USER, LOGOUT_USER_SUCCESS, API_ERROR } from './actionTypes';

const initialState = {
    error: null,
    loading: false,
    logoutUserSuccess: null
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            state = {
                ...state,
                loading: true,
                error: null,
                logoutUserSuccess: null
            }
            break;
        case LOGIN_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                logoutUserSuccess: null
            }
            break;
        case LOGOUT_USER:
            state = { 
                ...state,
                error: null,
                logoutUserSuccess: null
             };
            break;
        case LOGOUT_USER_SUCCESS:
            state = { 
                ...state,
                error: null,
                logoutUserSuccess: action.payload
            };
            break;
        case API_ERROR:
            state = { 
                ...state, 
                error: action.payload,
                loading: false,
                logoutUserSuccess: null
             };
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default login;
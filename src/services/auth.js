import axios from 'axios';
const auth = axios.create({
    baseURL: process.env.REACT_APP_BACKEND
  });
const register = (data) => {
    console.log(data);
    return auth.post('/register', data).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        var message;
        console.log(err);
        if (err.response && err.response.status ) {
            console.log(err.response);
            switch (err.response.status) {
                case 404: message = "Sorry! the path could not be found"; break;
                case 500: message = "Sorry! something went wrong, please contact our support team"; break;
                case 422: message = err.response.data.errors.email; break;
                case 401: message = "Invalid credentials"; break;
                default: message = err[1]; break;
            }
        }
        throw message;
    });

}

const login = (data) => {
    return auth.post('/login', data).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        var message;
        console.log(err);
        if (err.response && err.response.status ) {
            console.log(err.response);
            switch (err.response.status) {
                case 404: message = "Sorry! the path could not be found"; break;
                case 500: message = "Sorry! something went wrong, please contact our support team"; break;
                case 422: message = err.response.data.email; break;
                case 403: message = err.response.data.errors.verification; break;
                case 401: message = "Invalid credentials"; break;
                default: message = err[1]; break;
            }
        }
        throw message;
    });

}

const verify = (data) => {
    return auth.post(`/verification/verify/${data.query}`).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        var message;
        if (err.response && err.response.status ) {
            console.log(err.response);
            if (err.response.status >= 200 || err.response.status <= 299)
            message = "Invalid verification link!"; 
        }
        throw message;
    });
}


const forgotPassword = (data) => {
    return auth.post(`/password/email`, data).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        var message;
        if (err.response && err.response.status ) {
            console.log(err.response);
            if (err.response.status >= 200 || err.response.status <= 299)
            message = err.response.data.email; 
        }
        throw message;
    });
}

const resetPassword = (data) => {
    return auth.post(`/password/reset`, data).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        var message;
        if (err.response && err.response.status ) {
            console.log(err.response);
            if (err.response.status >= 200 || err.response.status <= 299)
            message = err.response.data.email; 
        }
        throw message;
    });
}
export { register, login, verify, forgotPassword, resetPassword }
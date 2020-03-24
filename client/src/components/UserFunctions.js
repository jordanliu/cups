import axios from 'axios';

export const register = async user => {
    return axios
        .post('api/auth/register', {
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            phone: user.phone,
            password: user.password,
            confirm: user.confirm,
        })
        .then(res => {
            return {
                success: true,
                data: res,
            };
            // return res;
        })
        .catch(err => {
            return {
                success: false,
                data: null,
                errorMesssages: err.response.data,
            };
            // return err;
        });
};

export const login = async user => {
    return axios
        .post('api/auth/login', {
            email: user.email,
            password: user.password,
        })
        .then(res => {
            return {
                success: true,
                data: res,
            };
        })
        .catch(err => {
            return {
                success: false,
                data: null,
                errorMesssages: err.response.data,
            };
        });
};

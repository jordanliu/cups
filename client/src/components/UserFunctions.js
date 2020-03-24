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
            return res;
        })
        .catch(err => {
            return err;
        });
};

export const login = async user => {
    return axios
        .post('api/auth/login', {
            email: user.email,
            password: user.password,
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
};

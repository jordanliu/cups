import axios from 'axios'

export const register = async newUser => {
    return axios
        .post('api/auth/register', {
            fname: newUser.fname,
            lname: newUser.lname,
            email: newUser.email,
            phone: newUser.phone,
            password: newUser.password,
            confirm: newUser.confirm,
        })
        .then(res=>{
            console.log('Registered!')
        })
    
}

export const login = async user =>{
    try {
        const res = await axios
            .post('api/auth/login', {
                email: user.email,
                password: user.password
            })
        localStorage.setItem('usertoken', res.data)
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import './Register.css';
import { Link } from 'react-router-dom';
const layout = {
    labelCol:{ span : 8,},
    wrapperCol:{ span : 16, },    
};
const tailLayout = {
    wrapperCol : {
        offset : 8,
        span : 16,
    },
};

const Register = () => {
    const onFinish = value => {
        console.log('Success:', value);
    }
    const onFinishFailed = value =>{
        console.log('Failed:', value);
    }
    return (        
        <div>
            <h1 className="register-title">CUPS</h1>            
            <div className = "register-wrapper">  
                <h2 className = "registration">Registration Form</h2>            
                    <form>
                        <label for = "fname">First Name: </label>
                        <Input placeholder = "First Name" />
                        <br />
                        <label for = "lname">Last Name: </label>
                        <Input placeholder = "Last Name" />
                        <br />
                        <label for = "email">Email Address: </label>
                        <Input placeholder = "your-email@email.com" />
                        <br />
                        <label for = "password">Password: </label>
                        <Input placeholder = "Password" type = "password" />

                        <Link to="/menu">
                        <Button type="primary">Submit</Button>
                        </Link>
                    </form>
            </div>
        </div>  
        
    );
};

export default Register;

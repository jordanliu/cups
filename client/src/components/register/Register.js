import React, { Component } from "react";
//import { Link } from "react-router-dom";
import './Register.css';
//import { GlobalContext } from '../../../context/GlobalState';
import { register } from '../../components/UserFunctions';
import {    
    Form,
    Button,    
    Input,    
    Upload,    
} from 'antd';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            fname: "",
            lname: "",
            email: "",
            phone: "",
            password: "",
            confirm: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = e =>{
        this.setState ({[e.target.id]: e.target.value});
    };
    

    onSubmit = e => {
        e.preventDefault()
        const user = {
            fname: this.state.fname,
            lname: this.statelfname,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            confirm: this.state.confirm
        };

        register(user).then(res => {        
            this.props.history.push(`/login`)        
    })
}   
    
    render(){
        const { errors } = this.state;

        return(
            <div>
             <h1 className="register-title">CUPS</h1>
             <div className="register-wrapper">
                 <h2>Registration Form</h2>
                 <Form
                    //{...formItemLayout}
                    name="registeration-form"
                    layout="vertical"
                    scrollToFirstError
                    noValidate
                    onSubmit = { this.onSubmit }
                >
                    <Form.Item
                        name="first name"
                        label="First Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        onChange = { this.onChange }
                        value = { this.state.fname }
                        error = { errors.fname }
                    >
                        <Input placeholder="First Name" />
                    </Form.Item>

                    <Form.Item
                        name="last name"
                        label="Last Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        onChange = { this.onChange }
                        value = { this.state.lname }
                        error = { errors.lname }
                    >
                        <Input placeholder="Last Name" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                        onChange = { this.onChange }
                        value = { this.state.email }
                        error = { errors.email }
                    >
                        <Input placeholder="email@cups.com" />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                        onChange = { this.onChange }
                        value = { this.state.phone }
                        error = { errors.phone }
                    >
                        <Input placeholder="Phone Number" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                        onChange = { this.onChange }
                        value = { this.state.password }
                        error = { errors.password }
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (
                                        !value ||
                                        getFieldValue('password') === value
                                    ) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(
                                        'The two passwords that you entered do not match!'
                                    );
                                },
                            }),
                        ]}
                        onChange = { this.onChange }
                        value = { this.state.confirm }
                        error = { errors.confirm }
                    >
                        <Input.Password placeholder="Confirm Password" />
                    </Form.Item>

                    <div className="register-add-upload">
                        <Form.Item>
                            <Upload >
                                <Button>Upload Photo</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item>
                            <Upload>
                                <Button>Upload Audio</Button>
                            </Upload>
                        </Form.Item>
                    </div>

                    <Form.Item>
                        <Button type="submit" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
        );
    }
}
export default Register;
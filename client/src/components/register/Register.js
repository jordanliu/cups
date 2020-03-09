import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Tooltip, Select, Row, Col, Checkbox, AutoComplete, InputNumber, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem'; 
import './Register.css';
import { Link } from 'react-router-dom';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };  

const Register = () => {    

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    return ( 
        <div>   
            <h1 className="register-title">CUPS</h1>   
            <div className = "register-wrapper">
                <h2>Registration Form</h2>
                <Form
                    {...formItemLayout}                
                    name="registeration-form"                
                    initialValues={{                   
                        prefix: '876',
                    }}
                    scrollToFirstError
                    >

                    <Form.Item
                        name={['user', 'fname']}
                        label="First Name"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>  

                    <Form.Item
                        name={['user', 'lname']}
                        label="Last Name"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                    >
                        <Input />
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
                    >
                        <Input placeholder = "cupofupliftingcoffee@cups.com"/>
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
                    >
                        <Input.Password />
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
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
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
                    >
                        <Input />
                    </Form.Item>                                
                    
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                        Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>  
        </div>         
    );
};

export default Register;

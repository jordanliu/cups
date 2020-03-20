import React, { useState } from 'react';
import { Form, Input, Button, Upload, Icon } from 'antd';
import './Register.css';
import { Link } from 'react-router-dom';

const formItemLayout = null;

const Register = props => {
    const [photo, setPhoto] = useState('url');
    return (
        <div>
            <h1 className="register-title">CUPS</h1>
            <div className="register-wrapper">
                <h2>Registration Form</h2>
                <Form
                    {...formItemLayout}
                    name="registeration-form"
                    layout="vertical"
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
                        <Input placeholder="First Name" />
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
                    >
                        <Input.Password placeholder="Confirm Password" />
                    </Form.Item>

                    <div className="register-add-upload">              
                                                 
                        <Form.Item >
                            <Upload {...props}>
                                <Button>
                                     <Icon type="upload" /> Upload Photo
                                </Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item>
                            <Upload {...props}>
                                <Button>
                                    <Icon type="upload" /> Upload ASL
                                </Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item>
                            <Upload {...props}>
                                <Button>
                                    <Icon type="upload" /> Upload Audio
                                </Button>
                            </Upload>
                        </Form.Item>                                                     
                   </div>                  

                    <Form.Item>
                        <Link to="/">
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Register;

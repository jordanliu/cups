import React from 'react';
import './Register.css';
import { useHistory } from 'react-router-dom';
import { register } from '../../components/UserFunctions';
import { Form, Button, Input, Upload, message } from 'antd';

const Register = () => {
    const [form] = Form.useForm();
    const history = useHistory();
    const onFinish = values => {
        form.validateFields().catch(() => {
            message.error('Error, please try again later!');
        });

        register(values).then(res => {
            if (res.status === 200) {
                message.success({ content: 'Registered', duration: 2 });
                return history.push('/menu');
            }
        });
    };

    return (
        <div>
            <h1 className="register-title">CUPS</h1>
            <div className="register-wrapper">
                <h2>Registration Form</h2>
                <Form
                    name="registeration-form"
                    layout="vertical"
                    scrollToFirstError
                    noValidate
                    form={form}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="fname"
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
                        name="lname"
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
                        <Form.Item>
                            <Upload>
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
};

export default Register;

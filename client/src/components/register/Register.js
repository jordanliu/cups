import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import './Register.css';

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
            <h1 className="login-title">CUPS</h1>            
            <div className = "register-wrapper">  
            <h2 className = "registration">Registration Form</h2>            
                <Form
                    {...layout}
                    name = "basic"
                    initialValues = {{
                        remember: true,
                    }}
                    onFinish = { onFinish }
                    onFinishFailed = { onFinishFailed }
                >          
                    <Form.Item
                        label = "Username"
                        name = "username"
                        rules = {[
                        {
                            required : true,
                            message : 'Please input your name!',
                        },
                    ]}         
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label = "Password"
                        name = "password"
                        rules = {[
                        {
                            required : true,
                            message : 'Please input your password!',
                        },
                    ]}         
                    >
                        <Input.Password />
                    </Form.Item>
                    <div>
                        <Form.Item {...tailLayout}>
                            <Button type = "primary" htmlType = "submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>  
        
    );
};

export default Register;

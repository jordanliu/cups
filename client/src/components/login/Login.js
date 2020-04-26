import React, { useContext } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';
import { login } from '../../components/UserFunctions';
import { GlobalContext } from '../../context/GlobalState';
import { Form, Button, Input, message } from 'antd';

const layout = {
    labelCol: {
        span: 16,
    },
    wrapperCol: {
        span: 24,
    },
};

const Login = () => {
    const [form] = Form.useForm();
    const history = useHistory();
    const { order, addOrderItems } = useContext(GlobalContext);

    const orderAmount = order.map((order) => order.cost);
    const orderTotal = orderAmount
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const cart = {
        items: order,
        totalCost: orderTotal,
    };
    console.log(JSON.stringify(cart));

    const handleConfirm = () => {
        addOrderItems(JSON.stringify(cart));
    };

    const onFinish = (values) => {
        form.validateFields().catch(() => {
            message.error('Error, please try again later!');
        });

        login(values).then((res) => {
            if (res.success === false) {
                message.error(res.errorMesssages.message);
            }

            if (res.success === true) {
                handleConfirm();
                message.success({ content: 'Logged in', duration: 2 });
                return history.push('/order/confirmed');
            }
        });
    };

    return (
        <div>
            <h1 className="login-title">CUPS</h1>
            <div className="login-wrapper">
                <h2>Login</h2>
                <Form
                    {...layout}
                    name="login-form"
                    layout="vertical"
                    scrollToFirstError
                    noValidate
                    form={form}
                    onFinish={onFinish}
                >
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
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="submit"
                            htmlType="submit"
                            className="login-submit"
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;

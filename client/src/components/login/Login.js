import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
import CryptoJS from 'crypto-js';
import { useHistory } from 'react-router-dom';
import { login, photo } from '../../components/UserFunctions';
import { GlobalContext } from '../../context/GlobalState';
import { Form, Button, Input, message, Upload } from 'antd';

const layout = {
    labelCol: {
        span: 16,
    },
    wrapperCol: {
        span: 24,
    },
};

const Login = () => {
    const [form, photoForm] = Form.useForm();
    const [photoMD5, setPhotoMD5] = useState('');
    const [defaultFileList, setDefaultFileList] = useState([]);
    const history = useHistory();
    var resData;

    const { order, addOrderItems } = useContext(GlobalContext);

    const orderAmount = order.map((order) => order.cost);
    const orderTotal = orderAmount
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    useEffect(() => {
        // Update the document title using the browser API

        console.log(photoMD5);
    }, [photoMD5]);

    const cart = {
        items: order,
        totalCost: orderTotal,
    };

    const uploadImage = async (options) => {
        const { onSuccess, onError, file } = options;

        const fmData = new FormData();
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
        };
        fmData.append('file', file);
        try {
            const res = await axios.post('/api/upload', fmData, config);

            message.success(`${file.name} file uploaded successfully`);
            onSuccess('Ok');
            resData = res.data.file;
        } catch (err) {
            console.log('Error: ', err);
            message.error(`${file.name}  file upload failed.`);
            onError({ err });
        }

        var reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onloadend = () => {
            setPhotoMD5(CryptoJS.MD5(reader.result).toString());
        };

        console.log(resData);
    };

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

    const onFinishPhoto = () => {
        var values = {
            photoMD5: photoMD5,
        };

        console.log('values', values);
        // form.validateFields().catch(() => {
        //     message.error('Error, please try again later!');
        // });

        photo(values).then((res) => {
            if (res.success === false) {
                message.error(res.errorMesssages.photoMD5);
            }

            if (res.success === true) {
                handleConfirm();
                message.success({ content: 'Logged in', duration: 2 });
                return history.push('/order/confirmed');
            }
        });
    };

    const handleOnChange = ({ file, fileList, values }) => {
        message.loading('Action in progress..', 2.5);
        onFinishPhoto();
        setDefaultFileList(fileList);
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

                <div className="login-alt">
                    <p>or login with one of the following: </p>
                    <div className="login-add-upload">
                        <Form.Item>
                            <Upload
                                accept="image/*"
                                name="photo"
                                customRequest={uploadImage}
                                onChange={handleOnChange}
                                defaultFileList={defaultFileList}
                            >
                                <Button>Login with Photo</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item>
                            <Upload accept="audio/*" name="audio">
                                <Button>Login with Audio</Button>
                            </Upload>
                        </Form.Item>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import CryptoJS from 'crypto-js';
import { useHistory } from 'react-router-dom';
import { register } from '../../components/UserFunctions';
import { Form, Button, Input, Upload, message } from 'antd';

const layout = {
    labelCol: {
        span: 16,
    },
    wrapperCol: {
        span: 24,
    },
};

const Register = () => {
    const [form] = Form.useForm();
    const [photo, setPhoto] = useState('');
    const [photoMD5, setPhotoMD5] = useState('');
    const [audio, setAudio] = useState('');
    const [audioMD5, setAudioMD5] = useState('');
    const [defaultFileList, setDefaultFileList] = useState([]);
    const history = useHistory();

    var resData;

    const uploadImage = async (options) => {
        const { onSuccess, onError, file } = options;

        const fmData = new FormData();
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
        };
        fmData.append('file', file);
        try {
            const res = await axios.post('/api/upload', fmData, config);

            onSuccess('Ok');
            message.success(`${file.name} file uploaded successfully`);
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
        setPhoto(resData);
    };

    const uploadAudio = async (options) => {
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
            setAudioMD5(CryptoJS.MD5(reader.result).toString());
        };
        setAudio(resData);
    };

    const handleOnChange = ({ file, fileList, event }) => {
        setDefaultFileList(fileList);
    };

    const onFinish = () => {
        form.validateFields()
            .then((values) => {
                values.photo = photo;
                values.audio = audio;
                values.photoMD5 = photoMD5;
                values.audioMD5 = audioMD5;

                console.log(values);
                register(values).then((res) => {
                    if (res.success === false) {
                        message.error(
                            res.errorMesssages.password ||
                                res.errorMesssages.message ||
                                res.errorMesssages.phone
                        );
                    }

                    if (res.success === true) {
                        message.success({ content: 'Registered', duration: 2 });
                        return history.push('/menu');
                    }
                });
            })
            .catch(() => {
                message.error('Error, please try again later!');
            });
    };

    return (
        <div>
            <h1 className="register-title">CUPS</h1>
            <div className="register-wrapper">
                <h2>Create a new account</h2>
                <Form
                    {...layout}
                    name="registration-form"
                    layout="vertical"
                    scrollToFirstError
                    noValidate
                    form={form}
                    onFinish={onFinish}
                    initialValues={{
                        phone: '+876',
                    }}
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
                            <Upload
                                accept="image/*"
                                name="photo"
                                customRequest={uploadImage}
                                onChange={handleOnChange}
                                defaultFileList={defaultFileList}
                            >
                                <Button>Upload Photo</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item>
                            <Upload
                                accept="audio/*"
                                name="audio"
                                customRequest={uploadAudio}
                                onChange={handleOnChange}
                                defaultFileList={defaultFileList}
                            >
                                <Button>Upload Audio</Button>
                            </Upload>
                        </Form.Item>
                    </div>

                    <Form.Item className="register-submit">
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

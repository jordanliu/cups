import React, { useState, useContext } from 'react';
import axios from 'axios';
import {
    Drawer,
    Form,
    Button,
    Col,
    Row,
    Input,
    Select,
    Upload,
    message,
} from 'antd';

import { GlobalContext } from '../../../context/GlobalState';

const { Option } = Select;

const options = [
    {
        value: 'Beverage',
    },
    {
        value: 'Snack',
    },
    {
        value: 'Daily Surprise',
    },
];

const MenuAdd = ({ visible, toggleClose }) => {
    const [form] = Form.useForm();
    const [photo, setPhoto] = useState('');
    const [aslPhoto, setAslPhoto] = useState('');
    const [audio, setAudio] = useState('');
    const [defaultFileList, setDefaultFileList] = useState([]);
    const { addMenuItem } = useContext(GlobalContext);

    var resData;

    const uploadImage = async options => {
        const { onSuccess, onError, file } = options;

        const fmData = new FormData();
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
        };
        fmData.append('file', file);
        try {
            const res = await axios.post(
                'http://localhost:5000/api/upload',
                fmData,
                config
            );

            onSuccess('Ok');
            message.success(`${file.name} file uploaded successfully`);
            resData = res.data.file;
        } catch (err) {
            console.log('Error: ', err);
            message.error(`${file.name}  file upload failed.`);
            onError({ err });
        }
        setPhoto(resData);
    };

    const uploadAslImage = async options => {
        const { onSuccess, onError, file } = options;

        const fmData = new FormData();
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
        };
        fmData.append('file', file);
        console.log(file);
        console.log(fmData);
        try {
            const res = await axios.post(
                'http://localhost:5000/api/upload',
                fmData,
                config
            );

            onSuccess('Ok');
            message.success(`${file.name} file uploaded successfully`);
            resData = res.data.file;
        } catch (err) {
            console.log('Error: ', err);
            message.error(`${file.name}  file upload failed.`);
            onError({ err });
        }
        setAslPhoto(resData);
    };

    const uploadAudio = async options => {
        const { onSuccess, onError, file } = options;

        const fmData = new FormData();
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
        };
        fmData.append('file', file);
        console.log(file);
        console.log(fmData);
        try {
            const res = await axios.post(
                'http://localhost:5000/api/upload',
                fmData,
                config
            );

            message.success(`${file.name} file uploaded successfully`);
            onSuccess('Ok');
            resData = res.data.file;
        } catch (err) {
            console.log('Error: ', err);
            message.error(`${file.name}  file upload failed.`);
            onError({ err });
        }
        setAudio(resData);
    };

    const handleOnChange = ({ file, fileList, event }) => {
        setDefaultFileList(fileList);
    };

    const handleOnSubmit = () => {
        form.validateFields()
            .then(values => {
                form.resetFields();
                values.photo = photo;
                values.aslPhoto = aslPhoto;
                values.audio = audio;
                console.log(values);
                addMenuItem(values);
                toggleClose();
                message.success({ content: 'Item Added', duration: 2 });
            })
            .catch(info => {
                console.log('Validate Failed:', info);
                message.error('Error, please try again later');
            });
    };
    return (
        <Drawer
            title="Create a new menu item"
            width={720}
            onClose={toggleClose}
            visible={visible}
            destroyOnClose={true}
        >
            <Form
                form={form}
                name="add-menu-item"
                onFinish={handleOnSubmit}
                layout="vertical"
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter item name',
                                },
                            ]}
                        >
                            <Input placeholder="Please enter item name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="cost"
                            label="Cost"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter cost',
                                },
                            ]}
                        >
                            <Input
                                type="number"
                                style={{ width: '100%' }}
                                placeholder="Please enter cost"
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="stockQuantity"
                            label="Stock Quantity"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter stock quantity',
                                },
                            ]}
                        >
                            <Input
                                type="number"
                                style={{ width: '100%' }}
                                placeholder="Please enter stock quantity"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="category"
                            label="Category"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select a category',
                                },
                            ]}
                        >
                            <Select
                                style={{ width: 200 }}
                                placeholder="Category"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {options.map(o => (
                                    <Option key={o.value} value={o.value}>
                                        {o.value}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="description"
                            label="Description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter item description',
                                },
                            ]}
                        >
                            <Input.TextArea
                                rows={4}
                                placeholder="Please enter item description"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item
                            name="photo"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please upload an image',
                                },
                            ]}
                        >
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
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name="aslPhoto"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please upload an ASL image',
                                },
                            ]}
                        >
                            <Upload
                                accept="image/*"
                                name="aslPhoto"
                                customRequest={uploadAslImage}
                                onChange={handleOnChange}
                                defaultFileList={defaultFileList}
                            >
                                <Button>Upload ASL</Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            name="audio"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please upload audio',
                                },
                            ]}
                        >
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
                    </Col>
                </Row>
                <Form.Item
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button onClick={toggleClose} style={{ marginRight: 8 }}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Add Item
                    </Button>
                </Form.Item>
            </Form>
        </Drawer>
    );
};

export default MenuAdd;

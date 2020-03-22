import React, { useState, useContext } from 'react';
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

const MenuAdd1 = ({ visible, toggleClose }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState(options[0].value);
    const [description, setDescription] = useState('');
    const [stockQuantity, setstockQuantity] = useState(0);
    const [cost, setCost] = useState(0);
    const [photo, setPhoto] = useState('url');
    const { addMenuItem } = useContext(GlobalContext);

    const props = {
        name: 'photo',
        multiple: false,
        action: 'http://localhost:6000/api/photo',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }

            if (status === 'done') {
                message.success(
                    `${info.file.name} file uploaded successfully.`
                );
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const handleOnSubmit = () => {
        const newMenuItem = {
            name,
            cost,
            description,
            category,
            photo,
            stockQuantity,
        };

        try {
            addMenuItem(newMenuItem);
            toggleClose();
            message.success({ content: 'Added!', duration: 2 });
            window.location.reload();
        } catch (err) {
            console.log(err.message);
            message.error({ content: err.message, duration: 2 });
        }
        // eslint-disable-next-line
    };

    return (
        <Drawer
            title="Create a new menu item"
            width={720}
            onClose={toggleClose}
            visible={visible}
        >
            <Form
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
                            <Input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Please enter item name"
                            />
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
                                value={cost}
                                type="number"
                                style={{ width: '100%' }}
                                onChange={e => setCost(e.target.value)}
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
                                value={stockQuantity}
                                type="number"
                                style={{ width: '100%' }}
                                onChange={e => setstockQuantity(e.target.value)}
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
                                onChange={value => setCategory(value)}
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
                                value={description}
                                rows={4}
                                onChange={e => setDescription(e.target.value)}
                                placeholder="Please enter item description"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item>
                            <Upload {...props}>
                                <Button>Upload Photo</Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item>
                            <Upload>
                                <Button>Upload ASL</Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item>
                            <Upload>
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

export default MenuAdd1;

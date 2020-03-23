import React from 'react';
import { Modal, Form, Input, Select, message } from 'antd';

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

const MenuUpdate = ({ visible, onCreate, onCancel, record }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            visible={visible}
            title="Edit a menu item"
            okText="Edit"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
                    .then(values => {
                        form.resetFields();
                        onCreate(values);
                        message.success({ content: 'Edited!', duration: 2 });
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                        message.error('Error, please try again later!');
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    name: record.name,
                    cost: record.cost,
                    description: record.description,
                    category: record.category,
                    stockQuantity: record.stockQuantity,
                }}
            >
                <Form.Item name="name" label="Name">
                    <Input />
                </Form.Item>
                <Form.Item name="cost" label="Cost">
                    <Input />
                </Form.Item>
                <Form.Item name="stockQuantity" label="Stock Quantity">
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input type="textarea" />
                </Form.Item>
                <Form.Item name="category" label="Category">
                    <Select
                        style={{ width: 200 }}
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
            </Form>
        </Modal>
    );
};

export default MenuUpdate;

import React, { useState, useContext } from 'react';
import { Layout, Form, Select, Button, Input, Upload, Icon } from 'antd';
import './MenuAdd.css';
import PortalNav from '../../portalNav/PortalNav';
import { GlobalContext } from '../../../context/GlobalState';

const { Content } = Layout;
const { Option } = Select;
const FormItem = Form.Item;

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

const MenuAdd = props => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState(options[0].value);
    const [description, setDescription] = useState('');
    const [stockQuantity, setstockQuantity] = useState(0);
    const [cost, setCost] = useState(0);
    const [photo, setPhoto] = useState('url');
    const { addMenuItem } = useContext(GlobalContext);

    const handleOnSubmit = e => {
        e.preventDefault();

        setPhoto('url');
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
        } catch (err) {
            console.log(err.message);
        }
        // eslint-disable-next-line
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content
                    style={{ margin: '16px 16px', align: 'middle' }}
                    className="menu-add-wrapper"
                >
                    <h1>Add Item</h1>
                    <Form className="add-item-form">
                        <FormItem>
                            <Input
                                style={{ width: 200 }}
                                id="name"
                                placeholder="Item Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <Input.TextArea
                                style={{ width: 200 }}
                                id="description"
                                placeholder="Item Description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <Select
                                style={{ width: 200 }}
                                placeholder="Category"
                                optionFilterProp="children"
                                onChange={value => setCategory(value)}
                                filterOption={(input, option) =>
                                    option.props.children
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
                        </FormItem>
                        <FormItem>
                            <Input
                                type="number"
                                style={{ width: 200 }}
                                id="stockQuantity"
                                placeholder="Stock Quantity"
                                onChange={e => setstockQuantity(e.target.value)}
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                style={{ width: 200 }}
                                id="cost"
                                placeholder="Item Cost"
                                onChange={e => setCost(e.target.value)}
                            />
                        </FormItem>
                        <div className="menu-add-upload">
                            <FormItem>
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload" /> Upload Photo
                                    </Button>
                                </Upload>
                            </FormItem>
                            <FormItem>
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload" /> Upload ASL
                                    </Button>
                                </Upload>
                            </FormItem>
                            <FormItem>
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload" /> Upload Audio
                                    </Button>
                                </Upload>
                            </FormItem>
                        </div>
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="sumbit-new-item"
                            >
                                Add Item
                            </Button>
                        </FormItem>
                    </Form>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MenuAdd;

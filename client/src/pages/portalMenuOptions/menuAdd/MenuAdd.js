import React from 'react';
import { Layout, Form, Select, Button, Input, Upload, Icon } from 'antd';
import './MenuAdd.css';
import PortalNav from '../../portalNav/PortalNav';

const { Content } = Layout;
const { Option } = Select;
const FormItem = Form.Item;

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

const MenuAdd = props => {
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
                                id="item-name"
                                placeholder="Item Name"
                            />
                        </FormItem>
                        <FormItem>
                            <Select
                                style={{ width: 200 }}
                                placeholder="Category"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                filterOption={(input, option) =>
                                    option.props.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="beverage">Beverage</Option>
                                <Option value="snack">Snack</Option>
                                <Option value="daily-surprise">
                                    Daily Surprise
                                </Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <Input
                                type="number"
                                style={{ width: 200 }}
                                id="stock-quantity"
                                placeholder="Stock Quantity"
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                style={{ width: 200 }}
                                id="cost"
                                placeholder="Item Cost"
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

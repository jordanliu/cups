import React from 'react';
import { Form, Button, Input, Layout } from 'antd';
import './MenuUpdate.css';
import PortalNav from '../../portalNav/PortalNav';

const { Content } = Layout;

const MenuUpdate = () => {
    return (
        <Layout style={{ align: 'middle', minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }}>
                    <h1>Update Item</h1>

                    <Form>
                        <Form.Item>
                            <Input
                                style={{ width: 200 }}
                                id="itemName"
                                placeholder="Item Name"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                type="number"
                                style={{ width: 200 }}
                                id="stockQuantity"
                                placeholder="Updated Stock Quantity"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Update Stock Quantity
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MenuUpdate;

import React from 'react';
import { Form, Button, Input, Layout } from 'antd';
import './MenuRemove.css';
import PortalNav from '../../portalNav/PortalNav';

const { Content } = Layout;

const MenuRemove = () => {
    return (
        <Layout style={{ align: 'middle', minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content className="remove-item-wrapper">
                    <h1>Remove Item</h1>

                    <Form>
                        <Form.Item>
                            <Input
                                type="number"
                                style={{ width: 200 }}
                                id="itemID"
                                placeholder="Item ID"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="remove-item-button"
                            >
                                Remove Item
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MenuRemove;

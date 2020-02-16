import React from 'react';
import { Layout, Form, Button } from 'antd';
import './MenuView.css';
import PortalNav from '../../portalNav/PortalNav';

const { Content } = Layout;

const MenuView = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ align: 'middle', margin: '16px 16px' }}>
                    <h1>Menu View </h1>
                    <Form>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Cancel Order
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MenuView;

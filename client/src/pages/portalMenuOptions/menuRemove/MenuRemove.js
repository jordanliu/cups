import React from 'react';
import { Layout } from 'antd';
import './MenuRemove.css';
import PortalNav from '../../portalNav/PortalNav';

const { Content } = Layout;

const MenuRemove = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }}>Menu Remove</Content>
            </Layout>
        </Layout>
    );
};

export default MenuRemove;

import React from 'react';
import { Layout } from 'antd';
import './MenuView.css';
import PortalNav from '../../portalNav/PortalNav';

const { Content } = Layout;

const MenuView = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }}>Menu View</Content>
            </Layout>
        </Layout>
    );
};

export default MenuView;

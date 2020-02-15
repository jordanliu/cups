import React from 'react';
import { Layout } from 'antd';
import './MenuAdd.css';
import PortalNav from '../../portalNav/PortalNav';

const { Content } = Layout;

const MenuAdd = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }}>Menu Add</Content>
            </Layout>
        </Layout>
    );
};

export default MenuAdd;

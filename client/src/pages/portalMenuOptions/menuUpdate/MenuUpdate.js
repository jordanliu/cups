import React from 'react';
import { Layout } from 'antd';
import './MenuUpdate.css';
import PortalNav from '../../portalNav/PortalNav';

const { Content } = Layout;

const MenuUpdate = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }}>Menu Update</Content>
            </Layout>
        </Layout>
    );
};

export default MenuUpdate;

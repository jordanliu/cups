import React from 'react';
import PortalNav from '../portalNav/PortalNav';
import { Layout } from 'antd';
const { Content } = Layout;
const Portal = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }}>
                    <div>You're on home</div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Portal;

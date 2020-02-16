import React from 'react';
import PortalNav from '../portalNav/PortalNav';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import './PortalMenu.css';
const { Content } = Layout;

const PortalMenu = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }} className="links">
                    <Link to="/portal-menu/add">Add Menu Item</Link>
                    <Link to="/portal-menu/view">View Menu</Link>
                    <Link to="/portal-menu/update">Update Menu</Link>
                    <Link to="/portal-menu/remove">Remove Item</Link>
                </Content>
            </Layout>
        </Layout>
    );
};

export default PortalMenu;

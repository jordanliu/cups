import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { HomeOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import './PortalNav.css';
const { Sider } = Layout;

const PortalNav = withRouter(props => {
    const { location } = props;
    return (
        <Sider>
            <div className="logo">cups</div>
            <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
                <Menu.Item key="/portal">
                    <Link to="/portal">
                        <HomeOutlined />
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="/portal/menu">
                    <Link to="/portal/menu">
                        <MenuOutlined />
                        Menu
                    </Link>
                </Menu.Item>
                <Menu.Item key="9">
                    <UserOutlined />
                    <span>Customers</span>
                </Menu.Item>
            </Menu>
        </Sider>
    );
});

export default PortalNav;

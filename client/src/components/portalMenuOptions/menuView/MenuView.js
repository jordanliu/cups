import React, { useContext } from 'react';
import { Layout, Menu, Icon, Table } from 'antd';
import './MenuView.css';
import PortalNav from '../../portalNav/PortalNav';
import { GlobalContext } from '../../../context/GlobalState';

const { SubMenu } = Menu;
const { Content } = Layout;
const columns = [
    {
        title: 'Item Name',
        dataIndex: 'title',
    },
    {
        title: 'Item Price',
        dataIndex: 'price',
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
];

const MenuView = () => {
    const { menuItems } = useContext(GlobalContext);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }}>
                    <h1>Menu View</h1>
                    <div>
                        <Table
                            columns={columns}
                            dataSource={menuItems}
                            size="middle"
                            rowKey={menuItems => menuItems.id}
                        />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MenuView;

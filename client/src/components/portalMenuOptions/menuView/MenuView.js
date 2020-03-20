import React, { useContext, useEffect } from 'react';
import { Layout, Table, Button } from 'antd';
import './MenuView.css';
import PortalNav from '../../portalNav/PortalNav';
import Loader from '../../loader/Loader';
import { GlobalContext } from '../../../context/GlobalState';

const { Content } = Layout;

const columns = [
    {
        title: 'Item Name',
        dataIndex: 'name',
    },
    {
        title: 'Price (in $)',
        dataIndex: 'cost',
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
    {
        title: 'Stock Quantity',
        dataIndex: 'stockQuantity',
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => (
            <span>
                <a href="/" style={{ marginRight: 16 }}>
                    Edit
                </a>
                <a href="/">Delete</a>
            </span>
        ),
    },
];

const MenuView = () => {
    const { menuItems, getMenuItems, loading } = useContext(GlobalContext);

    useEffect(() => {
        getMenuItems();
        // eslint-disable-next-line
    }, []);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }}>
                    <div>
                        {loading ? <Loader /> : null}
                        <Button type="primary" style={{ marginBottom: 16 }}>
                            Add an item
                        </Button>
                        <Table
                            columns={columns}
                            dataSource={menuItems}
                            size="middle"
                            rowKey={menuItems => menuItems._id}
                        />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MenuView;

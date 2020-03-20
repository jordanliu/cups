import React, { useContext, useEffect } from 'react';
import { Layout, Table, Button, Popconfirm } from 'antd';
import './PortalMenu.css';
import PortalNav from '../portalNav/PortalNav';
import Loader from '../loader/Loader';
import { GlobalContext } from '../../context/GlobalState';

const { Content } = Layout;

const columns = [
    {
        title: 'Item Name',
        dataIndex: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'cost',
        render: text => <span>${text}</span>,
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
    {
        title: 'Quantity',
        dataIndex: 'stockQuantity',
    },

    {
        title: 'Photo',
        dataIndex: 'photo',
    },
    {
        title: 'ASL',
        dataIndex: 'photo',
    },

    {
        title: 'Audio',
        dataIndex: 'photo',
    },
    {
        title: 'Actions',
        dataIndex: '',
        key: 'x',
        render: () => (
            <span>
                <a href="/" style={{ marginRight: 16 }}>
                    Edit
                </a>
                <Popconfirm
                    title="Sure you want to delete this item?"
                    onConfirm={console.log('deleted')}
                >
                    <a href="/">Delete</a>
                </Popconfirm>
            </span>
        ),
    },
];

const PortalMenu = () => {
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
                        <Button
                            type="primary"
                            style={{ marginBottom: 16 }}
                            href="/portal-menu/add"
                        >
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

export default PortalMenu;

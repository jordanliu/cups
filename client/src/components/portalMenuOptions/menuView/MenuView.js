import React, { useContext, useEffect } from 'react';
import { Layout, Table } from 'antd';
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
                    <h1>Menu View</h1>
                    <div>
                        {loading ? <Loader /> : null}
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

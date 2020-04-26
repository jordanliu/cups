import React, { useContext, useEffect } from 'react';
import { Layout, Table, Skeleton } from 'antd';
import moment from 'moment';
import './PortalOrder.css';
import PortalNav from '../portalNav/PortalNav';
import { GlobalContext } from '../../context/GlobalState';

const { Content } = Layout;

const PortalOrder = () => {
    const { orderItems, getOrderItems, loading } = useContext(GlobalContext);

    useEffect(() => {
        getOrderItems();
        // eslint-disable-next-line
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Date Created',
            dataIndex: 'created',
            render: (created) => {
                return <span>{moment(created).format('LLL')}</span>;
            },
        },
        {
            title: 'Total Cost',
            dataIndex: 'totalCost',
            render: (totalCost) => {
                return <span>${totalCost}</span>;
            },
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }}>
                    {loading ? <Skeleton active /> : null}

                    {!loading && (
                        <div>
                            <Table
                                pagination={{ pageSize: 15 }}
                                columns={columns}
                                dataSource={orderItems}
                                size="middle"
                                rowKey={(orderItems) => orderItems._id}
                            />
                        </div>
                    )}
                </Content>
            </Layout>
        </Layout>
    );
};

export default PortalOrder;

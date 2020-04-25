import React, { useContext, useEffect } from 'react';
import { Layout, Table, Skeleton } from 'antd';
import './PortalCustomer.css';
import PortalNav from '../portalNav/PortalNav';
import { GlobalContext } from '../../context/GlobalState';

const { Content } = Layout;

const PortalMenu = () => {
    const { customers, getCustomers, loading } = useContext(GlobalContext);

    useEffect(() => {
        getCustomers();
        // eslint-disable-next-line
    }, []);

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'fname',
        },
        {
            title: 'Last Name',
            dataIndex: 'lname',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            render: (balance) => <span>${balance}</span>,
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
                                dataSource={customers}
                                size="middle"
                                rowKey={(customers) => customers._id}
                            />
                        </div>
                    )}
                </Content>
            </Layout>
        </Layout>
    );
};

export default PortalMenu;

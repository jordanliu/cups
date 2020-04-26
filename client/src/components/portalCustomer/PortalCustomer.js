import React, { useContext, useEffect } from 'react';
import { Layout, Table, Skeleton } from 'antd';
import moment from 'moment';
import './PortalCustomer.css';
import PortalNav from '../portalNav/PortalNav';
import { GlobalContext } from '../../context/GlobalState';

const { Content } = Layout;

const PortalMenu = () => {
    const { customers, getCustomers, loading } = useContext(GlobalContext);
    const API_URL = process.env.REACT_APP_API_URL;

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
        {
            title: 'Photo',
            dataIndex: 'photo',
            render: (photo) => (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={API_URL + photo}
                >
                    View Photo
                </a>
            ),
        },
        {
            title: 'Audio',
            dataIndex: 'audio',
            render: (audio) => (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={API_URL + audio}
                >
                    View Audio
                </a>
            ),
        },
        {
            title: 'Created',
            dataIndex: 'date',
            render: (date) => <span>{moment(date).format('lll')}</span>,
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

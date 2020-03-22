import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Layout, Table, Button, Popconfirm, Skeleton, message } from 'antd';
import './PortalMenu.css';
import PortalNav from '../portalNav/PortalNav';
import { PlusOutlined } from '@ant-design/icons';
import { GlobalContext } from '../../context/GlobalState';

import MenuAdd from '../portalMenuOptions/menuAdd/MenuAdd';

const { Content } = Layout;

const PortalMenu = () => {
    const { menuItems, getMenuItems, deleteMenuItem, loading } = useContext(
        GlobalContext
    );
    const [visible, setVisible] = useState(false);

    const handleDelete = record => {
        try {
            message.success({ content: 'Item deleted', duration: 2 });
            deleteMenuItem(record._id);
        } catch (err) {
            console.log(err);
            message.error({
                content: 'Error occurred, please try again later',
                duration: 2,
            });
        }
    };

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = useCallback(
        event => {
            setVisible(!visible);
        },
        [visible]
    );
    useEffect(() => {
        getMenuItems();
        // eslint-disable-next-line
    }, []);

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
            dataIndex: 'url',
        },

        {
            title: 'Audio',
            dataIndex: 'url1',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (_, record) => {
                return (
                    <span>
                        <a
                            href="/"
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Edit
                        </a>
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => handleDelete(record)}
                        >
                            <a href="/">Delete</a>
                        </Popconfirm>
                    </span>
                );
            },
        },
    ];

    /*
    <Popconfirm
                    title="Sure to delete?"
                    onConfirm={() => console.log(record)}
                >
                    <a href="/">Edit</a>
                </Popconfirm>
    */
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }}>
                    {loading ? <Skeleton active /> : null}

                    {!loading && (
                        <div>
                            <Button
                                type="primary"
                                style={{ marginBottom: 16 }}
                                onClick={showDrawer}
                            >
                                <PlusOutlined /> Add an item
                            </Button>

                            <MenuAdd visible={visible} toggleClose={onClose} />
                            <Table
                                columns={columns}
                                dataSource={menuItems}
                                size="middle"
                                rowKey={menuItems => menuItems._id}
                            />
                        </div>
                    )}
                </Content>
            </Layout>
        </Layout>
    );
};

export default PortalMenu;

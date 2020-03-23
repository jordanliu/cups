import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Layout, Table, Button, Popconfirm, Skeleton, message } from 'antd';
import './PortalMenu.css';
import PortalNav from '../portalNav/PortalNav';
import { PlusOutlined } from '@ant-design/icons';
import { GlobalContext } from '../../context/GlobalState';

import MenuAdd from '../portalMenuOptions/menuAdd/MenuAdd';
import MenuUpdate from '../portalMenuOptions/menuUpdate/MenuUpdate';

const { Content } = Layout;

const PortalMenu = () => {
    const {
        menuItems,
        getMenuItems,
        deleteMenuItem,
        editMenuItem,
        loading,
    } = useContext(GlobalContext);
    const [visibleDrawer, setVisibleDrawer] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const [record, setRecord] = useState([]);

    const onCreate = values => {
        editMenuItem(record._id, values);
        setVisibleModal(false);
    };

    const showModal = () => {
        setVisibleModal(true);
    };
    const showDrawer = () => {
        setVisibleDrawer(true);
    };

    const onClose = useCallback(
        event => {
            setVisibleDrawer(!visibleDrawer);
        },
        [visibleDrawer]
    );

    useEffect(() => {
        getMenuItems();
        // eslint-disable-next-line
    }, []);
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

    const handleUpdate = record => {
        setRecord(record);
        showModal();
    };

    const columns = [
        {
            title: 'Item Name',
            dataIndex: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'category',
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
                        <span
                            className="hyperlink"
                            onClick={() => handleUpdate(record)}
                        >
                            Edit
                        </span>
                        <span> | </span>
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => handleDelete(record)}
                        >
                            <span className="hyperlink">Delete</span>
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
                            <MenuUpdate
                                visible={visibleModal}
                                onCreate={onCreate}
                                record={record}
                                onCancel={() => {
                                    setVisibleModal(false);
                                }}
                            />
                            <MenuAdd
                                visible={visibleDrawer}
                                toggleClose={onClose}
                            />
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

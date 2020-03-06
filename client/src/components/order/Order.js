import React from 'react';
import './Order.css';
import { Link, useHistory } from 'react-router-dom';
import { List, Avatar, Button, Modal } from 'antd';

const { confirm } = Modal;

const data = [
    {
        title: 'order 1',
    },
    {
        title: 'order 2',
    },
    {
        title: 'order 3',
    },
    {
        title: 'order 4',
    },
];

const Order = () => {
    let history = useHistory();
    function showCancelConfirm() {
        function handleOk() {
            return history.push('/');
        }

        confirm({
            title: 'Are you sure you want to cancel this order?',
            content:
                'If yes, you will be redirected to the homepage and your order will be cancelled.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                handleOk();
            },
            onCancel() {},
        });
    }

    return (
        <div className="order-wrapper">
            <h2>Order Details</h2>
            <div className="order-lists">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                'Quantity: 1',
                                <a key="1" href="localhost:3000/order">
                                    Edit
                                </a>,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={
                                    <a href="localhost:3000/order">
                                        {item.title}
                                    </a>
                                }
                                description="Order description?"
                            />
                        </List.Item>
                    )}
                />
                <div className="order-details">
                    <h3>Total: $6000</h3>
                </div>
            </div>

            <div className="order-cta">
                <Button onClick={showCancelConfirm}>Cancel Order</Button>
                <Link to="/order-confirmed">
                    <Button>Confirm Order</Button>
                </Link>
            </div>
        </div>
    );
};

export default Order;

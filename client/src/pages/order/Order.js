import React from 'react';
import './Order.css';
import { List, Avatar, Button } from 'antd';

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
                <Button>Cancel Order</Button>
                <Button>Confirm Order</Button>
            </div>
        </div>
    );
};

export default Order;

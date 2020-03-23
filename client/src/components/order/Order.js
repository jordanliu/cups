import React, { useContext } from 'react';
import './Order.css';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import { List, Avatar, Button, Modal } from 'antd';

const { confirm } = Modal;

const Order = () => {
    const { order } = useContext(GlobalContext);
    const orderAmount = order.map(order => order.cost);
    const orderTotal = orderAmount
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const cart = {
        name: 'name',
        date: 'date',
        items: [order],
    };
    console.log(cart);
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
                    dataSource={order}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <span>Quantity: </span>,
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
                                        {item.name}
                                    </a>
                                }
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
                <div className="order-details">
                    <h3>Total: ${orderTotal}</h3>
                </div>
            </div>

            <div className="order-cta">
                <Button onClick={showCancelConfirm}>Cancel Order</Button>
                <Link to="/login">
                    <Button>Confirm Order</Button>
                </Link>
            </div>
        </div>
    );
};

export default Order;

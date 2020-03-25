import React, { useState, useContext } from 'react';
import { Card, Col } from 'antd';
import { GlobalContext } from '../../context/GlobalState';
import './MenuCard.css';

const { Meta } = Card;

const MenuCard = item => {
    const { addOrder, order, deleteOrder } = useContext(GlobalContext);
    const API_URL = process.env.REACT_APP_API_URL;

    const [iconType, setIconType] = useState('Add');

    const handleClick = e => {
        e.preventDefault();
        setIconType(iconType === 'Add' ? 'Remove' : 'Add');

        if (iconType === 'Remove') {
            deleteOrder(order);
        }

        if (iconType === 'Add') {
            addOrder(item.menu);
        }
    };

    // const handleRemove = (order, item) => {
    //     console.log('removed');
    //     console.log('item', item);
    //     order.filter(order => order._id !== item._id);
    // };
    return (
        <Col span={6}>
            <Card
                onClick={handleClick}
                hoverable
                bordered={true}
                className="menu-card"
                cover={
                    <img
                        className="menu-image"
                        alt="Item"
                        src={API_URL + item.menu.photo}
                    />
                }
                actions={[
                    <span>
                        <strong>${item.menu.cost}</strong>
                    </span>,
                    <span>{iconType}</span>,
                ]}
            >
                <Meta
                    title={item.menu.name}
                    description={<span>{item.menu.description}</span>}
                />
            </Card>
        </Col>
    );
};

export default MenuCard;

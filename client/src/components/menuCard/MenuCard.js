import React, { useState, useContext } from 'react';
import { Card, Col } from 'antd';
import { GlobalContext } from '../../context/GlobalState';
import './MenuCard.css';

const { Meta } = Card;

const MenuCard = item => {
    const { addOrder } = useContext(GlobalContext);
    const API_URL = process.env.REACT_APP_API_URL;

    const [iconType, setIconType] = useState('Add');

    function handleClick(e) {
        e.preventDefault();
        setIconType(iconType === 'Add' ? 'Remove' : 'Add');
        addOrder(item.menu);
        console.log(item.menu._id);
    }

    return (
        <Col span={4} className="menu-card">
            <Card
                onClick={handleClick}
                hoverable
                bordered={true}
                cover={<img alt="Item" src={API_URL + item.menu.photo} />}
                actions={[<span>{iconType}</span>]}
            >
                <Meta
                    title={item.menu.title}
                    description={
                        <span>
                            ${item.menu.cost} - {item.menu.description}
                        </span>
                    }
                />
            </Card>
        </Col>
    );
};

export default MenuCard;

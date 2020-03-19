import React, { useState, useContext } from 'react';
import { Card, Col, Icon } from 'antd';
import { GlobalContext } from '../../context/GlobalState';
import './MenuCard.css';

const { Meta } = Card;

const MenuCard = item => {
    const { addOrder } = useContext(GlobalContext);

    const [iconType, setIconType] = useState('plus');

    function handleClick(e) {
        e.preventDefault();
        setIconType(iconType === 'plus' ? 'close' : 'plus');
        addOrder(item.menu);
        console.log(item.menu._id);
    }

    return (
        <Col span={4} className="menu-card">
            <Card
                onClick={handleClick}
                hoverable
                bordered={true}
                cover={<img alt="Item" src={item.menu.image} />}
                actions={[<Icon type={iconType} />]}
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

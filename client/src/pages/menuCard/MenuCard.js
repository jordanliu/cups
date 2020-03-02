import React from 'react';
import { Card, Col, Icon } from 'antd';
import './MenuCard.css';

const { Meta } = Card;

const MenuCard = item => {
    return (
        <Col span={4} className="menu-card">
            <Card
                hoverable
                bordered={true}
                cover={<img alt="Item" src={item.menu.image} />}
                actions={[<Icon type="plus" />]}
            >
                <Meta
                    title={item.menu.title}
                    description={
                        <span>
                            ${item.menu.price} - {item.menu.description}
                        </span>
                    }
                />
            </Card>
        </Col>
    );
};

export default MenuCard;

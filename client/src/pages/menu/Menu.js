import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Button } from 'antd';

const Menu = () => {
    return (
        <div className="menu-wrapper">
            <Row
                type="flex"
                justify="space-around"
                align="middle"
                className="menu-header"
            >
                <Col span={2}>
                    <h1>Menu</h1>
                </Col>
                <Col span={2}>
                    <Button>Search</Button>
                </Col>
            </Row>
            <div>
                <Row type="flex" justify="space-around" align="middle">
                    <Col span={4}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card title="Card title" bordered={true}>
                            Card content
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="menu-details">
                <Row type="flex" justify="space-around" align="middle">
                    <Col span={4}>
                        <h4>Items added</h4>
                    </Col>
                    <Col span={4}>
                        <Link to="/order">
                            <Button>View Order</Button>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <h4>$500</h4>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Menu;

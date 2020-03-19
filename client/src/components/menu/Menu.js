import React, { useContext, useEffect } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'antd';
import MenuCard from '../menuCard/MenuCard';
import { GlobalContext } from '../../context/GlobalState';

const Menu = () => {
    const { menuItems, getMenuItems } = useContext(GlobalContext);
    const { order } = useContext(GlobalContext);

    useEffect(() => {
        getMenuItems();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const orderAmount = order.map(order => order.cost);
    const orderTotal = orderAmount
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const orderCount = order.length;

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
                    <Link to="/search">
                        <Button>Search</Button>
                    </Link>
                </Col>
            </Row>
            <div>
                <Row type="flex" justify="space-around" align="middle">
                    {menuItems.map(item => (
                        <MenuCard menu={item} key={item._id} />
                    ))}
                </Row>
            </div>
            <div className="menu-details">
                <Row type="flex" justify="space-around" align="middle">
                    <Col span={4}>
                        <h4>{orderCount} items added</h4>
                    </Col>
                    <Col span={4}>
                        <Link to="/order">
                            <Button>View Order</Button>
                        </Link>
                    </Col>
                    <Col span={4}>
                        <h4>${orderTotal}</h4>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Menu;

import React, { useContext, useEffect } from 'react';
import './Menu.css';
import { Link, useHistory } from 'react-router-dom';
import { Col, Row, Button, message } from 'antd';
import Loader from '../loader/Loader';
import MenuCard from '../menuCard/MenuCard';
import { SearchOutlined } from '@ant-design/icons';
import { GlobalContext } from '../../context/GlobalState';

const Menu = () => {
    const history = useHistory();
    const { menuItems, getMenuItems, loading } = useContext(GlobalContext);
    const { order } = useContext(GlobalContext);

    useEffect(() => {
        getMenuItems();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const orderAmount = order.map((order) => order.cost);
    const orderTotal = orderAmount
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const orderCount = order.length;

    const handleOrder = () => {
        if (order.length === 0) {
            message.error('Please select a menu item');
        } else {
            history.push('/order');
        }
    };

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
                        <Button>
                            <SearchOutlined key="search" />
                            Search
                        </Button>
                    </Link>
                </Col>
            </Row>
            <div>
                <Row
                    // type="block"
                    // justify="space-between"
                    // align="middle"
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                >
                    {loading ? <Loader /> : null}
                    {menuItems.map((item) => (
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
                        <Button onClick={handleOrder}>View Order</Button>
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

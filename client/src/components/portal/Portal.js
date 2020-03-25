import React, { useContext, useEffect } from 'react';
import PortalNav from '../portalNav/PortalNav';
import { Layout, Row, Col, Statistic } from 'antd';
import { GlobalContext } from '../../context/GlobalState';
import Chart from '../chart/Chart';

const { Content } = Layout;
const Portal = () => {
    const { orderItems, getOrderItems } = useContext(GlobalContext);

    useEffect(() => {
        getOrderItems();
        // eslint-disable-next-line
    }, []);

    const totalOrderItems = orderItems.length;
    const orderAmount = orderItems.map(order => order.totalCost);
    const totalOrderSales = orderAmount
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }}>
                    <div>
                        <Row>
                            <Col flex="1 1 200px">
                                <Row gutter={5}>
                                    <Col span={9}>
                                        <Statistic
                                            title="Total Orders"
                                            value={totalOrderItems}
                                        />
                                    </Col>
                                    <Col span={9}>
                                        <Statistic
                                            title="Total Sales (JMD)"
                                            value={totalOrderSales}
                                            prefix={'$'}
                                            precision={2}
                                        />
                                    </Col>
                                </Row>
                                <div style={{ marginTop: '50px' }}>
                                    <h1>Latest News</h1>
                                    Cups is a local coffee shop that provides a
                                    relaxing getaway in the middle of the city
                                    for the disabled community. They are also a
                                    wonderful example of a Social Enterprise
                                    Boost Initiative similar to DeafCan coffee.
                                    Kat, the manager, has been encouraged by her
                                    mentor to establish another store at 95
                                    Moolean Avenue in the heart of Montego Bay.
                                </div>
                            </Col>
                            <Col flex="0 1 300px">
                                <Chart />
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Portal;

import React from 'react';
import PortalNav from '../portalNav/PortalNav';
import { Layout, Row, Col, Statistic } from 'antd';
import Chart from '../chart/Chart';

const { Content } = Layout;
const Portal = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }}>
                    <div>
                        <Row>
                            <Col flex="1 1 200px">
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Statistic
                                            title="Active Users"
                                            value={112893}
                                        />
                                    </Col>
                                    <Col span={12}>
                                        <Statistic
                                            title="Account Balance (CNY)"
                                            value={112893}
                                            precision={2}
                                        />
                                    </Col>
                                </Row>
                                <div style={{ marginTop: '50px' }}>
                                    <h1>Latest News</h1>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nulla bibendum risus quis
                                    sapien pulvinar suscipit. Interdum et
                                    malesuada fames ac ante ipsum primis in
                                    faucibus. Nunc tincidunt dignissim erat nec
                                    hendrerit. Pellentesque rhoncus mollis
                                    efficitur. Praesent posuere mi in libero
                                    tempus sodales. In aliquet sit amet sem at
                                    consectetur. Vestibulum bibendum efficitur
                                    convallis. Duis eros metus, commodo bibendum
                                    volutpat ut, posuere sed odio. Sed iaculis
                                    varius venenatis
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

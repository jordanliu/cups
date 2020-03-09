import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

const Home = () => {
    return (
        <div>
            <Row>
                <Col span={14} push={10} className="home-right"></Col>
                <Col span={10} pull={14} className="home-left">
                    <div>
                        <h1>CUPS</h1>
                        <h3>Select an option below to start ordering!</h3>
                        <Link to="/menu">
                            <button>ORDER</button>
                        </Link>
                        <Link to="/register">
                            <button>REGISTER</button>
                        </Link>
                        <h3 className="home-footer">
                            Need assistance? Ask an employee for help
                        </h3>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'antd';
import './Search.css';

const Search = () => {
    return (
        <div className="search-wrapper">
            <Row
                type="flex"
                justify="space-around"
                align="middle"
                className="search-header"
            >
                <Col span={2}>
                    <h1>Search</h1>
                </Col>
                <Col span={2}>
                    <Link to="/menu">
                        <Button>Go Back</Button>
                    </Link>
                </Col>
            </Row>
            <div>
                <Row
                    type="flex"
                    justify="space-around"
                    align="middle"
                    className="search-details"
                >
                    <Link to="/search/name">
                        <Button size="large" block>
                                Search by name
                        </Button>
                    </Link>                      
                    
                    <Button size="large" block>
                        Search by image
                    </Button>
                    <Button size="large" block>
                        Search by audio
                    </Button>
                </Row>
            </div>
        </div>
    );
};



export default Search;

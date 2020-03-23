import React from 'react';
import { Link } from 'react-router-dom';
import './OrderComplete.css';
import { Result, Button } from 'antd';

const OrderComplete = () => {
    return (
        <div className="orderComplete">
            <Result
                status="success"
                title="Order #: 201712881"
                subTitle="Order complete, thank you for making it CUPS!"
                extra={[
                    <Link to="/" key={1}>
                        <Button type="primary" key="console">
                            Continue
                        </Button>
                    </Link>,
                    <Button key="buy">Order Again</Button>,
                ]}
            />
        </div>
    );
};

export default OrderComplete;

import React from 'react';
import { Link } from 'react-router-dom';
import './OrderComplete.css';
import { Result, Button } from 'antd';

const OrderComplete = () => {
    return (
        <div className="orderComplete">
            <Result
                status="success"
                title="Order Complete"
                subTitle="Order complete, your name will be called when your order is ready, thank you for making it CUPS! "
                extra={[
                    <Link to="/" key={1}>
                        <Button type="primary" key="console">
                            Continue
                        </Button>
                    </Link>,
                    <Link to="/menu" key={2}>
                        <Button key="buy">Order Again</Button>,
                    </Link>,
                ]}
            />
        </div>
    );
};

export default OrderComplete;

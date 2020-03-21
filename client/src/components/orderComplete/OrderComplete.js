import React from 'react';
import { Link } from 'react-router-dom';
import './OrderComplete.css';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { Button } from 'antd';

const OrderComplete = () => {
    return (
        <div className="orderComplete">
            <h3 className="orderComplete-title">Order Complete</h3>
            <h4 className="orderComplete-num">Order #0000000</h4>
            <CheckCircleTwoTone
                twoToneColor="#52c41a"
                style={{ fontSize: '100px', display: 'block' }}
            />
            <Link to="/">
                <Button>Continue</Button>
            </Link>
            <h5 className=" orderComplete-footer">THANK YOU FOR ORDERING!</h5>
        </div>
    );
};

export default OrderComplete;

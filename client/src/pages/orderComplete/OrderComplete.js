import React from 'react';
import './OrderComplete.css';
import { Button } from 'antd';

const OrderComplete = () => {
    return (
        <div className="orderComplete">
            <h3 className="orderComplete-title"> Order Complete </h3>
            <h4 className="orderComplete-num">Order #0000000 </h4>

            <Button>Confirm Order </Button>
            <h5 className=" orderComplete-footer">THANK YOU !</h5>
        </div>
    );
};

export default OrderComplete;

import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import './Login.css';

const Login = () => {
    return (
        <div>
            <h1 className="login-title">CUPS</h1>
            <div className="login-wrapper">
                <h2>Log in</h2>
                <form>
                    <Input placeholder="Digital ID" />
                    <Link to="/order-confirmed">
                        <Button type="primary">Login</Button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;

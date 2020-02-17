import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            You are on home, click here to <Link to="/login">login</Link>
        </div>
    );
};

export default Home;

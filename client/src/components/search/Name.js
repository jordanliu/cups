import React, { useContext, useEffect } from 'react';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'antd';
import './Name.css';
import Loader from '../loader/Loader';
import MenuCard from '../menuCard/MenuCard';
import { GlobalContext } from '../../context/GlobalState';

const { Search } = Input;

// const people = [
//     "bread",
//     "cat",
//     "corona",
//     "pineapples",
//     "searchMe",
//     "deh ya",
//     "wohoo"
//   ];

const Name = () => {
    const { menuItems, getMenuItems, loading } = useContext(GlobalContext);
    const itemName = menuItems.map(menuItems => menuItems.name);

    useEffect(() => {
        getMenuItems();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    React.useEffect(() => {
        const final = itemName.filter(names =>
            names.toLowerCase().includes(searchTerm)
        );
        setSearchResults(final);
    }, [searchTerm]);

    console.log('searchResults', searchResults);
    console.log('searchTerm', searchTerm);

    // React.useEffect(() => {
    //     const results = people.filter(person =>
    //       person.toLowerCase().includes(searchTerm)
    //     );
    //     setSearchResults(results);
    //   }, [searchTerm]);

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
                    <Link to="/search">
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
                    <Search
                        placeholder="Enter Item Name"
                        onSearch={value => console.log(value)}
                        style={{ width: 400 }}
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </Row>
                <br />
                <Row>
                    {searchResults.map(p => (
                        <MenuCard menu={p} key={p._id} />
                    ))}
                </Row>
                {/* <ul>
                    {searchResults.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>     */}
            </div>
        </div>
    );
};

export default Name;

import React, { useContext, useState } from 'react';
import { Form, Button, Input, Layout, message } from 'antd';
import './MenuRemove.css';
import PortalNav from '../../portalNav/PortalNav';
import { GlobalContext } from '../../../context/GlobalState';

const { Content } = Layout;

const MenuRemove = () => {
    const [ID, setID] = useState();
    const { deleteMenu } = useContext(GlobalContext);

    const handleOnSubmit = e => {
        e.preventDefault();
        !ID
            ? message.error('Enter a value')
            : message.success('Action completed');
        deleteMenu(parseInt(ID));
    };

    return (
        <Layout style={{ align: 'middle', minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content className="remove-item-wrapper">
                    <h1>Remove Item</h1>

                    <Form onSubmit={handleOnSubmit}>
                        <Form.Item>
                            <Input
                                type="number"
                                style={{ width: 200 }}
                                id="itemID"
                                placeholder="Item ID"
                                onChange={event => setID(event.target.value)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="remove-item-button"
                            >
                                Remove Item
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MenuRemove;

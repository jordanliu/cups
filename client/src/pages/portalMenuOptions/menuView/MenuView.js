import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Icon } from 'antd';
import './MenuView.css';
import PortalNav from '../../portalNav/PortalNav';


const { SubMenu } = Menu;
const { Content } = Layout;

// const list = [{
//     snackName: 'Honey Bun',
//     snackType: 'bun',
// },
// {
//     bevName: 'Pepsi',
//     bevType: 'soda',
// }
// ]

const MenuView = () => {
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <PortalNav />
            <Layout>
                <Content style={{ margin: '16px 16px' }}><h1>Menu View</h1>
                <Menu mode = "horizontal">
                    <Menu.Item key = "coffee">
                    <Icon type="crown" />
                        Today's Special
                    </Menu.Item>                    
                    <Menu.Item key="trending" disabled>
                    <Icon type="fire" />
                    Trending
                    </Menu.Item>      
                    <SubMenu
                    title = {
                        <span>
                            <Icon type = "coffee" />
                            All Items
                        </span>
                    }                    
                    >
                        <Menu.ItemGroup title = "Beverage">
                            <Menu.Item key = "something1">Something 1</Menu.Item>
                            <Menu.Item key = "something2">Something 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title = "Snack">
                            <Menu.Item key = "something3">Something 3</Menu.Item>
                            <Menu.Item key = "something4">Something 4</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title = "Bread">
                            <Menu.Item key = "something3">Something 5</Menu.Item>
                            <Menu.Item key = "something4">Something 6</Menu.Item>
                        </Menu.ItemGroup>                     

                    </SubMenu>          
                </Menu>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MenuView;

import React, { useContext } from 'react';
//import ReactDOM from 'react-dom';
import { Layout, Menu, Icon } from 'antd';
import { Table } from 'antd';
import './MenuView.css';
import PortalNav from '../../portalNav/PortalNav';
import { GlobalContext } from '../../../context/GlobalState';


const { SubMenu } = Menu;
const { Content } = Layout;
const columns = [
    {
        title : 'Item Name',
        dataIndex : 'title',
    },
    {
        title : 'Item Price',
        dataIndex : 'price',
    },
    {
        title : 'Description',
        dataIndex : 'description',
    },
];

//const data = [];


const MenuView = () => {
    const {menuItems} = useContext(GlobalContext);        
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
               {/* {menuItems.map(item=>(
               <a key = {item.id}>{item.title}</a>
               ))}                */}
               <div>
                   <Table columns = {columns} dataSource = {menuItems} size = "middle"/>
               </div>

                </Content>
            </Layout>
        </Layout>
    );
};

export default MenuView;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Portal from './pages/portal/Portal';
import Login from './pages/login/Login';
import PortalMenu from './pages/portalMenu/PortalMenu';
import MenuAdd from './pages/portalMenuOptions/menuAdd/MenuAdd';
import MenuRemove from './pages/portalMenuOptions/menuRemove/MenuRemove';
import MenuUpdate from './pages/portalMenuOptions/menuUpdate/MenuUpdate';
import MenuView from './pages/portalMenuOptions/menuView/MenuView';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/portal" exact component={Portal}></Route>
                    <Route
                        path="/portal-menu"
                        exact
                        component={PortalMenu}
                    ></Route>
                    <Route path="/portal-menu/add" component={MenuAdd}></Route>
                    <Route
                        path="/portal-menu/view"
                        component={MenuView}
                    ></Route>
                    <Route
                        path="/portal-menu/remove"
                        component={MenuRemove}
                    ></Route>
                    <Route
                        path="/portal-menu/update"
                        component={MenuUpdate}
                    ></Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;

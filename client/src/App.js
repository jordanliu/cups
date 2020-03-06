import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import Loader from './pages/loader/Loader';

const Portal = lazy(() => import('./pages/portal/Portal'));
const Login = lazy(() => import('./pages/login/Login'));
const Home = lazy(() => import('./pages/home/Home'));
const PortalMenu = lazy(() => import('./pages/portalMenu/PortalMenu'));
const MenuAdd = lazy(() => import('./pages/portalMenuOptions/menuAdd/MenuAdd'));
const MenuRemove = lazy(() =>
    import('./pages/portalMenuOptions/menuRemove/MenuRemove')
);
const MenuUpdate = lazy(() =>
    import('./pages/portalMenuOptions/menuUpdate/MenuUpdate')
);
const MenuView = lazy(() =>
    import('./pages/portalMenuOptions/menuView/MenuView')
);
const Menu = lazy(() => import('./pages/menu/Menu'));
const Order = lazy(() => import('./pages/order/Order'));
const OrderComplete = lazy(() => import('./pages/orderComplete/OrderComplete'));

const App = () => {
    return (
        <GlobalProvider>
            <Suspense fallback={<Loader />}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/menu" exact component={Menu}></Route>
                        <Route path="/portal" exact component={Portal}></Route>
                        <Route path="/order" exact component={Order}></Route>
                        <Route
                            path="/order-confirmed"
                            component={OrderComplete}
                        ></Route>

                        <Route
                            path="/portal-menu"
                            exact
                            component={PortalMenu}
                        ></Route>
                        <Route
                            path="/portal-menu/add"
                            component={MenuAdd}
                        ></Route>
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
                </Router>
            </Suspense>
        </GlobalProvider>
    );
};

export default App;

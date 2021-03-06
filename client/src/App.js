import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import Loader from './components/loader/Loader';

const Portal = lazy(() => import('./components/portal/Portal'));
const Login = lazy(() => import('./components/login/Login'));
const Home = lazy(() => import('./components/home/Home'));
const PortalCustomer = lazy(() =>
    import('./components/portalCustomer/PortalCustomer')
);
const PortalOrder = lazy(() => import('./components/portalOrder/PortalOrder'));
const PortalMenu = lazy(() => import('./components/portalMenu/PortalMenu'));
const MenuAdd = lazy(() =>
    import('./components/portalMenuOptions/menuAdd/MenuAdd')
);

const MenuUpdate = lazy(() =>
    import('./components/portalMenuOptions/menuUpdate/MenuUpdate')
);

const Menu = lazy(() => import('./components/menu/Menu'));
const Order = lazy(() => import('./components/order/Order'));
const OrderComplete = lazy(() =>
    import('./components/orderComplete/OrderComplete')
);

const Register = lazy(() => import('./components/register/Register'));
const Search = lazy(() => import('./components/search/Search'));
const Name = lazy(() => import('./components/search/Name'));

const App = () => {
    return (
        <GlobalProvider>
            <Suspense fallback={<Loader />}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/search" exact component={Search} />
                        <Route path="/search/name" exact component={Name} />
                        <Route path="/menu" exact component={Menu} />
                        <Route path="/portal" exact component={Portal} />
                        <Route path="/order" exact component={Order} />
                        <Route
                            path="/order/confirmed"
                            component={OrderComplete}
                        />

                        <Route
                            path="/portal/menu"
                            exact
                            component={PortalMenu}
                        />
                        <Route
                            path="/portal/customers"
                            exact
                            component={PortalCustomer}
                        />
                        <Route
                            path="/portal/orders"
                            exact
                            component={PortalOrder}
                        />
                        <Route path="/portal/menu/add" component={MenuAdd} />

                        <Route
                            path="/portal/menu/update"
                            component={MenuUpdate}
                        />
                    </Switch>
                </Router>
            </Suspense>
        </GlobalProvider>
    );
};

export default App;

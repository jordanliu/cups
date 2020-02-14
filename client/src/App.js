import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Portal from './pages/portal/Portal';
import Login from './pages/login/Login';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Login />
                    </Route>
                    <Route path="/portal">
                        <Portal />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;

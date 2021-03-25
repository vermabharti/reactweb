import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom'; 
import Dashboard from './dashboard';
import Login from './login';

const Routes = () => (
    <Router>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
    </Router>
);

export default Routes;
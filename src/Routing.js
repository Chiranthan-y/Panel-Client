import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Cart from './Screens/Cart';
import Home from './Screens/Home';
import Login from './Screens/Login';
import PageNotFound from './Screens/PageNotFound';
import Register from './Screens/Register';
import UserDashboard from './Screens/UserDashboard';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import AdminDashboard from './Screens/Admin/AdminDashboard';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />

        <PrivateRoute exact path='/dashboard' component={UserDashboard} />
        <PrivateRoute exact path='/cart' component={Cart} />
        <AdminRoute path='/admin' component={AdminDashboard} />

        <Route exact path='*' component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routing;

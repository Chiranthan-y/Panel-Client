import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminCategories from './AdminCategories';
import AdminOrders from './AdminOrders';
import AdminProducts from './AdminProducts';
import AdminUsers from './AdminUsers';
import AdminAddMedicine from './AdminAddMedicine';

const DashBordRoute = () => {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${url}/product`} component={AdminProducts} />
      <Route path={`${url}/add-product`} component={AdminAddMedicine} />
      <Route path={`${url}/order`} component={AdminOrders} />

      <Route path={`${url}/category`} component={AdminCategories} />
      <Route path={`${url}/user`} component={AdminUsers} />
    </Switch>
  );
};

export default DashBordRoute;

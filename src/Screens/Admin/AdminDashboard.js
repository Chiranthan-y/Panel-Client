import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Base from '../../Components/Base';
import DashBordRoute from './DashBordRoute';

const AdminDashboard = () => {
  const { path, url } = useRouteMatch();
  return (
    <Base title='Admin Dashboard'>
      <div className='flex flex-wrap justify-around px-10'>
        <div className='flex flex-col  justify-centrt gap-4'>
          <Link to={`${url}/product`}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Manage Products
            </button>
          </Link>
          <Link to={`${url}/add-product`}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Add Products
            </button>
          </Link>
          <Link to={`${url}/order`}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Manage Orders
            </button>
          </Link>
          <Link to={`${url}/category`}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Manage Categories
            </button>
          </Link>
          <Link to={`${url}/company`}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Manage Company
            </button>
          </Link>
          <Link to={`${url}/user`}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Manage Users
            </button>
          </Link>
        </div>
        <div className='flex flex-col'>
          <DashBordRoute />
        </div>
      </div>
    </Base>
  );
};

export default AdminDashboard;

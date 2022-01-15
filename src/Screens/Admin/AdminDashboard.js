import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Base from '../../Components/Base';
import DashBordRoute from './DashBordRoute';

const AdminDashboard = () => {
  const { path, url } = useRouteMatch();
  return (
    <Base>
      <div className='flex flex-wrap justify-around px-10'>
        <div className='flex flex-col  justify-centrt gap-4'>
          <h1 className='text-2xl text-gray-800'>Admin Dashboard</h1>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link to={`${url}/product`}>Manage Products</Link>
          </button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link to={`${url}/add-product`}>Add Products</Link>
          </button>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link to={`${url}/order`}>Manage Orders</Link>
          </button>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link to={`${url}/category`}>Manage Categories</Link>
          </button>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link to={`${url}/user`}>Manage Users</Link>
          </button>
        </div>
        <div className='flex flex-col'>
          <DashBordRoute />
        </div>
      </div>
    </Base>
  );
};

export default AdminDashboard;

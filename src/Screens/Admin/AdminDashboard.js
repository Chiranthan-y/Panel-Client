import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Base from '../../Components/Base';
import DashBordRoute from './DashBordRoute';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const { path, url } = useRouteMatch();
  const auth = useSelector((state) => state.auth);
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
        <div className='bg-cyan-200 shadow-md rounded-xl px-8 pt-6 pb-8 m-10  flex flex-col gap-6'>
          <lable className='text-2xl font-bold text-center'>
            Username: @{auth.user.username}
          </lable>
          <lable className='text-2xl font-bold text-center'>
            Type: {auth.user.customerType}
          </lable>
          <label className='text-2xl font-bold text-center'>Role: Admin</label>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>
            Change password
          </button>
        </div>
      </div>
    </Base>
  );
};

export default AdminDashboard;

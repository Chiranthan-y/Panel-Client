import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../Redux/Actions/auth';

import { useSelector, useDispatch } from 'react-redux';
const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const dashboard = auth?.user?.role === 1 ? 'admin' : 'dashboard';

  return (
    <header className='flex items-center justify-between flex-wrap bg-sky-500 p-2'>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          <Link to='/'>
            <a className='text-base block mt-4 lg:inline-block lg:mt-0 text-white mr-4'>
              Home
            </a>
          </Link>

          {auth?.isAuthenticated ? (
            <>
              <Link to='/cart'>
                <a className='text-base block mt-4 lg:inline-block lg:mt-0 text-white  mr-4'>
                  Cart
                </a>
              </Link>
              <Link to={`/${dashboard}`}>
                <a className='text-base block mt-4 lg:inline-block lg:mt-0 text-red-500 font-bold mr-4'>
                  @{auth?.user.username}
                </a>
              </Link>
              <a
                className='text-base block mt-4 lg:inline-block lg:mt-0 text-orange-500 mr-4 cursor-pointer'
                onClick={() => {
                  dispatch(logout());
                }}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to='/login'>
                <a className='text-base block mt-4 lg:inline-block lg:mt-0 text-white mr-4'>
                  Login
                </a>
              </Link>

              <Link to='/register'>
                <a className='text-base block mt-4 lg:inline-block lg:mt-0 text-white mr-4'>
                  Register
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

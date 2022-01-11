import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Header = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (auth.user) {
      setUserName(auth.user.name);
    }
  }, [userName]);

  const auth = useSelector((state) => state.auth);

  return (
    <header className='flex items-center justify-between flex-wrap bg-gray-800 p-6'>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          <Link to='/'>
            <a className='text-xl block mt-4 lg:inline-block lg:mt-0 text-white hover:scale-110 mr-4'>
              Home
            </a>
          </Link>
          {auth.isAuthenticated ? (
            <Link>
              <a className='text-xl block mt-4 lg:inline-block lg:mt-0 text-white hover:scale-110 mr-4'>
                {userName}
              </a>
            </Link>
          ) : (
            <Link to='/login'>
              <a className='text-xl block mt-4 lg:inline-block lg:mt-0 text-white hover:scale-110 mr-4'>
                Login
              </a>
            </Link>
          )}

          <Link to='/register'>
            <a className='text-xl block mt-4 lg:inline-block lg:mt-0 text-white hover:scale-110'>
              Register
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

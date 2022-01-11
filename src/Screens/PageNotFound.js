import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='flex-col justify-evenly items-center m-10'>
      <h1 className='text-8xl font-extrabold'>404!</h1>
      <h1 className='text-5xl font-bold'>Page not found</h1>
      <Link to='/'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-5'>
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;

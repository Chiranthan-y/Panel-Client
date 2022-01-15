import React from 'react';

const SearchBar = () => {
  return (
    <div className='flex items-center justify-between p-3'>
      <div className='flex items-center flex-wrap'>
        <h1 className='text-lg font-extrabold text-red-500 text-center '>
          Pharmacy Online
        </h1>
      </div>

      <input
        className='w-full p-2 border-2 border-red-400 rounded-l-xl focus:outline-none focus:border-red-400'
        type='text'
        placeholder='Search'
      />
      {/* search button */}
      <button className='bg-red-400 py-2.5 px-5 rounded-r-xl'>
        <svg
          className='w-6 h-6'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;

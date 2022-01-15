import React from 'react';

const CategoryBar = () => {
  return (
    <div className='flex flex-wrap items-center justify-center bg-sky-500 p-2'>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <span className='text-sm cursor-pointer'>All</span>
        </div>
        <div className='flex items-center ml-6 cursor-pointer'>
          <span className='text-sm'>Skin care</span>
        </div>
        <div className='flex items-center ml-6 cursor-pointer'>
          <span className='text-sm'>Diabaties</span>
        </div>
        <div className='flex items-center ml-6 cursor-pointer'>
          <span className='text-sm'>Child care</span>
        </div>
        <div className='flex items-center ml-6 cursor-pointer'>
          <span className='text-sm'>Hair care</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;

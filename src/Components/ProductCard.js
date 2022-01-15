import React from 'react';
import axios from '../Utils/axios';

const ProductCard = ({ data }) => {
  return (
    <div className='max-w-sm bg-sky-200 rounded-lg border border-gray-200 shadow-m'>
      <a href='#'>
        <img
          className='rounded-t-lg'
          src={`${axios.defaults.baseURL}/medicine/${data.id}/photo`}
          alt='image'
        />
      </a>
      <div className='p-3'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
            ${data.price}
          </h5>
        </a>
        <a href='#'>
          <h5 className='mb-1 text-2xl font-bold tracking-tight text-gray-700'>
            {data.name}
          </h5>
        </a>
        <a href='#'>
          <h5 className='mb-1 text-sm font-bold tracking-tight text-gray-700'>
            offer: {data.offer}%
          </h5>
        </a>
        <p className='mb-1 font-normal text-gray-600'>{data.description}</p>
        <div className='flex flex-wrap justify-start mt-5'>
          <button className='bg-red-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../Utils/axios';
import { addItemToCart, removeProduct } from '../Utils/cart';

const ProductCard = ({ data, cart = false }) => {
  const cartButton = () => (
    <>
      {cart ? (
        <button
          onClick={() => {
            removeProduct(data._id);
          }}
          className='bg-red-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'>
          Remove from cart
        </button>
      ) : (
        <button
          onClick={() => {
            addItemToCart(data);
          }}
          className='bg-red-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'>
          Add to Cart
        </button>
      )}
    </>
  );

  return (
    <div className='max-w-xs bg-sky-200 rounded-lg border border-gray-200 shadow-lg'>
      <a href='#'>
        <img
          className='rounded-t-lg'
          src={`${axios.defaults.baseURL}/medicine/${data._id}/photo`}
          alt='image'
        />
      </a>
      <div className='p-3'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
            {data.name}
          </h5>
        </a>
        <a href='#'>
          <h5 className='mb-1 text-2xl font-bold tracking-tight text-gray-700'>
            ${data.price}
          </h5>
        </a>
        <a href='#'>
          <h5 className='mb-1 text-sm font-bold tracking-tight text-gray-600'>
            offer: {data.offer}%
          </h5>
        </a>
        <p className='mb-1 font-normal text-gray-600'>{data.description}</p>
        <div className='flex flex-wrap justify-start mt-5'>
          <Link to='/cart'>{cartButton()}</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

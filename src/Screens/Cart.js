import React, { useEffect, useState } from 'react';
import Base from '../Components/Base';
import ProductCard from '../Components/ProductCard';
import { loadProduct } from '../Utils/cart';

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(loadProduct());
  }, [data]);

  const gettotal = () => {
    let total = 0;
    if (data) {
      data.map((product) => {
        total += product.price * product.count;
      });
      return total;
    } else return 0;
  };

  return (
    <Base title='Cart page'>
      <div className='flex flex-wrap justify-around px-5'>
        <div className='flex flex-wrap justify-center gap-4 max-w-2xl'>
          {data ? (
            data.map((product) => (
              <div key={product._id}>
                <ProductCard data={product} cart={true} />
              </div>
            ))
          ) : (
            <h1>Add product to cart</h1>
          )}
        </div>
      </div>
      <div>
        <h1 className='text-2xl text-center p-3'> Payment</h1>
        <p className='text-lg font-bold p-2'>total ${gettotal()}</p>
        <button className='bg-red-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'>
          Checkout
        </button>
      </div>
    </Base>
  );
};

export default Cart;

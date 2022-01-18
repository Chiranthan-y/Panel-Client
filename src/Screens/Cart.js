import React, { useEffect, useState } from 'react';
import Base from '../Components/Base';
import ProductCard from '../Components/ProductCard';
import { loadProduct } from '../Utils/cart';
import Payments from '../Components/Payments';

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(loadProduct());
  }, [data.length]);

  const gettotal = () => {
    let total = 0;
    data.map((item) => {
      total += item.price;
    });
    return total;
  };

  return (
    <Base title='Cart page'>
      <div className='flex flex-wrap justify-between px-5'>
        <div className='flex flex-wrap justify-center gap-4 max-w-2xl'>
          {data ? (
            data.map((product) => (
              <div key={`${product._id}${Math.random()}`}>
                <ProductCard data={product} cart={true} />
              </div>
            ))
          ) : (
            <h1>Add product to cart</h1>
          )}
        </div>
      </div>
      <div className='flex justify-center'>
        <p className='text-lg font-bold p-2'>total ${gettotal()}</p>
        <Payments />
      </div>
    </Base>
  );
};

export default Cart;

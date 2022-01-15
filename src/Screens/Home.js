import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { get_all_medicine } from './../Redux/Actions/medicine';

import ProductCard from '../Components/ProductCard';
import Base from './../Components/Base';
const Home = () => {
  const dispatch = useDispatch();
  const { medicineList } = useSelector((state) => state.medicine);
  useEffect(() => {
    dispatch(get_all_medicine());
  }, [dispatch]);

  console.log(medicineList[0]);

  return (
    <Base title='Home'>
      <div className='flex flex-wrap gap-2 p-3'>
        {medicineList.map((medicine) => (
          <ProductCard key={medicine.id} data={medicine} />
        ))}
      </div>
    </Base>
  );
};

export default Home;

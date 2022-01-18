import React, { useEffect } from 'react';
import Base from '../Components/Base';

import { useDispatch, useSelector } from 'react-redux';
import { get_medi } from '../Redux/Actions/medicine';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ProductCard from '../Components/ProductCard';

const Category = () => {
  const { medicineList } = useSelector((state) => state.medicine);

  const dispatch = useDispatch();

  const { categoryId } = useParams();
  useEffect(() => {
    dispatch(get_medi(categoryId));
  }, []);

  return (
    <Base>
      <div className='flex flex-wrap gap-2 p-3'>
        {medicineList ? (
          medicineList.map((medicine) => (
            <div key={medicine._id}>
              <ProductCard key={medicine.id} data={medicine} />
            </div>
          ))
        ) : (
          <h1>server not connected</h1>
        )}
        {}
      </div>
    </Base>
  );
};

export default Category;

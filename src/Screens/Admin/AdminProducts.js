import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  get_all_medicine,
  delete_medicine,
} from './../../Redux/Actions/medicine';
const AdminProducts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.medicine);

  useEffect(() => {
    dispatch(get_all_medicine());
  }, [data.medicineList.length]);

  return (
    <>
      <h1 className='p-2 text-3xl align-middle ml-20'>Manage Products</h1>
      <div className='p-5 overflow-y-scroll max-w-4xl max-h-96 mt-10 shadow-slate-700 drop-shadow-xl'>
        <div className='flex flex-col flex-wrap gap-5'>
          {data.medicineList.map((item) => (
            <div
              key={item.id}
              className='p-3 rounded bg-blue-500 shadow-lg flex justify-between gap-7 items-center'>
              <h1 className='text-xl'>{item.name}</h1>
              <button
                className='bg-red-500 px-5 py-2 rounded-lg text-white font-bold'
                onClick={() => {
                  dispatch(delete_medicine(item));
                }}>
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminProducts;

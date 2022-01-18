import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  get_category,
  create_category,
  delete_category,
} from './../../Redux/Actions/category';

const AdminCategories = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category);

  const [name, setName] = useState('');

  useEffect(() => {
    dispatch(get_category());
  }, []);

  return (
    <div>
      <div className='flex flex-wrap justify-center gap-5'>
        <h1 className='p-2 text-3xl align-middle ml-20'>Add category</h1>
        <input
          placeholder='add category'
          type='text'
          className='shadow appearance-none border rounded-xl w-full py-2 px-3 text-grey-darker'
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className='bg-red-500 px-5 py-2 rounded-lg text-white font-bold'
          onClick={() => {
            dispatch(create_category(name));
          }}>
          Add
        </button>
      </div>
      <h1 className='p-2 text-3xl align-middle ml-20'>Manage Categories</h1>
      <div className='p-5 overflow-y-scroll max-w-4xl max-h-96 mt-10 shadow-slate-700 drop-shadow-xl'>
        <div className='flex flex-col flex-wrap gap-5'>
          {data.category.map((item) => (
            <div
              key={item.id}
              className='p-3 rounded bg-blue-500 shadow-lg flex justify-between gap-7 items-center'>
              <h1 className='text-xl'>{item.name}</h1>
              <button
                className='bg-red-500 px-5 py-2 rounded-lg text-white font-bold'
                onClick={() => {
                  dispatch(delete_category(item._id));
                }}>
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;

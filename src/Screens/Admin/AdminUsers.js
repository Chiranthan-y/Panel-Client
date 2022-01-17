import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AdminUsers = () => (
  <div className='p-5 overflow-y-scroll max-w-4xl max-h-96 mt-10 shadow-slate-700 drop-shadow-xl'>
    <div className='flex flex-col flex-wrap gap-5'>
      {data.category.map((item) => (
        <div
          key={item.id}
          className='p-3 rounded bg-blue-500 shadow-lg flex justify-between gap-7 items-center'>
          <h1 className='text-xl'>{item.name}</h1>
          <button className='bg-red-500 px-5 py-2 rounded-lg text-white font-bold'>
            delete
          </button>
          <button className='bg-green-500 px-5 py-2 rounded-lg text-white font-bold'>
            update
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default AdminUsers;

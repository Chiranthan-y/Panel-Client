import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  create_company,
  get_company,
  delete_company,
} from '../../Redux/Actions/company';

const AdminManageCompany = () => {
  const [data, setData] = useState({
    name: '',
    location: '',
    brand: '',
  });

  const getData = useSelector((state) => state.company);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_company());
  }, []);

  return (
    <div>
      <div className='flex flex-wrap justify-center gap-5'>
        <h1 className='p-2 text-3xl align-middle ml-20'>Add companies</h1>
        <input
          placeholder='Name of company'
          type='text'
          className='shadow appearance-none border rounded-xl w-full py-2 px-3 text-grey-darker'
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          placeholder='location of company'
          type='text'
          className='shadow appearance-none border rounded-xl w-full py-2 px-3 text-grey-darker'
          onChange={(e) => setData({ ...data, location: e.target.value })}
        />
        <input
          placeholder='Brand Name'
          type='text'
          className='shadow appearance-none border rounded-xl w-full py-2 px-3 text-grey-darker'
          onChange={(e) => setData({ ...data, brand: e.target.value })}
        />
        <button
          className='bg-red-500 px-5 py-2 rounded-lg text-white font-bold'
          onClick={() => {
            dispatch(create_company(data));
          }}>
          Add
        </button>
      </div>
      <h1 className='p-2 text-3xl align-middle ml-20'>Manage Campany</h1>
      <div className='p-5 overflow-y-scroll max-w-4xl max-h-96 mt-10 shadow-slate-700 drop-shadow-xl'>
        <div className='flex flex-col flex-wrap gap-5'>
          {getData.company.map((item) => (
            <div
              key={item.id}
              className='p-3 rounded bg-blue-500 shadow-lg flex justify-between gap-7 items-center'>
              <h1 className='text-xl'>{item.name}</h1>
              <button
                className='bg-red-500 px-5 py-2 rounded-lg text-white font-bold'
                onClick={() => {
                  dispatch(delete_company(item._id));
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

export default AdminManageCompany;

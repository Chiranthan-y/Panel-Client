import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_category } from '../../Redux/Actions/category';
import { get_company } from '../../Redux/Actions/company';
import { create_medicine } from './../../Redux/Actions/medicine';

const AdminAddMedicine = () => {
  const dispatch = useDispatch();
  const categorydata = useSelector((state) => state.category);
  const companydata = useSelector((state) => state.company);

  const [data, setData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    company: '',
    offer: '',
    image: '',
  });

  const handleClick = () => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('category', data.category);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('company', data.company);
    formData.append('offer', data.offer);
    formData.append('photo', data.image);
    dispatch(create_medicine(formData));
    //clear all fields
  };

  useEffect(() => {
    dispatch(get_category());
    dispatch(get_company());
  }, [dispatch]);

  const lable = 'block text-grey-darker text-sm font-bold mb-2';
  const input_cls =
    'shadow appearance-none border rounded-xl w-full py-2 px-3 text-grey-darker';

  return (
    <div className='bg-cyan-200 shadow-md rounded-xl px-8 pt-6 pb-8 m-4 flex flex-col'>
      <form>
        <div className='mb-3'>
          <label className={lable}>Medicine Name</label>
          <input
            className={input_cls}
            type='text'
            placeholder='Name'
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className='mb-3'>
          <label className={lable}>Medicine Description</label>
          <input
            className={input_cls}
            type='text'
            placeholder='Description'
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
        <div className='mb-3'>
          <label className={lable}>Company</label>
          <select
            className={input_cls}
            onChange={(e) => setData({ ...data, company: e.target.value })}>
            {companydata.company.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-3'>
          <label className={lable}>category</label>
          <select
            className={input_cls}
            placeholder='category'
            onChange={(e) => setData({ ...data, category: e.target.value })}>
            {categorydata.category.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-3'>
          <label className={lable}>Price</label>
          <input
            className={input_cls}
            type='number'
            placeholder='Price'
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </div>
        <div className='mb-3'>
          <label className={lable}>Offer</label>
          <input
            className={input_cls}
            type='number'
            placeholder='Offer'
            onChange={(e) => setData({ ...data, offer: e.target.value })}
          />
        </div>
        <div className='mb-3'>
          <label className={lable}>Photo</label>
          <input
            className={input_cls}
            type='file'
            placeholder='Choose a file'
            onChange={(e) => e.target.files[0]}
          />
        </div>

        <div className='flex items-center justify-between'>
          <button
            className='bg-rose-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-xl'
            type='submit'
            onClick={handleClick}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddMedicine;

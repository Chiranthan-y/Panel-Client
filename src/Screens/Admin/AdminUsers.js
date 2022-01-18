import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_user, delete_user } from './../../Redux/Actions/user';

const AdminUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(get_all_user());
  }, []);

  return (
    <>
      <h1 className='p-2 text-3xl align-middle ml-20'>Manage Users here!</h1>
      <div className='p-5 overflow-y-scroll max-w-4xl max-h-96 mt-10 shadow-slate-700 drop-shadow-xl'>
        <div className='flex flex-col flex-wrap gap-5'>
          {data.users.map((item) => (
            <div
              key={item._id}
              className='p-3 rounded bg-blue-500 shadow-lg flex justify-between gap-7 items-center'>
              <h1 className='text-xl'>{item.username}</h1>
              <button
                className='bg-red-500 px-5 py-2 rounded-lg text-white font-bold'
                onClick={() => {
                  dispatch(delete_user(item._id));
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

export default AdminUsers;

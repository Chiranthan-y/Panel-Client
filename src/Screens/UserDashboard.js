import React from 'react';
import Base from '../Components/Base';
import { useDispatch, useSelector } from 'react-redux';

const UserDashboard = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <Base title='User Dashboard'>
      <div className='bg-cyan-200 shadow-md rounded-xl px-8 pt-6 pb-8 m-10  flex flex-col gap-6'>
        <lable className='text-2xl font-bold text-center'>
          Username: @{auth.user.username}
        </lable>
        <lable className='text-2xl font-bold text-center'>
          Type: {auth.user.customerType}
        </lable>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>
          Change password
        </button>
      </div>
    </Base>
  );
};
export default UserDashboard;

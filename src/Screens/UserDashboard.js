import React from 'react';
import Base from '../Components/Base';
import { useDispatch, useSelector } from 'react-redux';

const UserDashboard = () => {
  return (
    <Base title='User Dashboard'>
      <div className='bg-cyan-200 shadow-md rounded-xl px-8 pt-6 pb-8 m-10  flex flex-col'></div>
    </Base>
  );
};
export default UserDashboard;

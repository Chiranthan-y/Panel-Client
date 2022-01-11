import React, { useState } from 'react';
import Base from '../Components/Base';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './../Redux/Actions/auth';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
    <Base title={'Login'}>
      <div className='bg-cyan-200 shadow-md rounded-xl px-8 pt-6 pb-8 m-10  flex flex-col'>
        <div className='mb-4'>
          <label className='block text-grey-darker text-sm font-bold mb-2'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded-xl w-full py-2 px-3 text-grey-darker'
            type='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-grey-darker text-sm font-bold mb-2'
            for='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border border-red rounded-xl w-full py-2 px-3 text-grey-darker mb-3'
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className='text-red text-xs italic'>Please choose a password.</p>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-rose-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-xl'
            type='button'
            onClick={handleLogin}>
            Login
          </button>
          <a className='inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker'>
            Forgot Password?
          </a>
        </div>
      </div>
    </Base>
  );
};

export default Login;

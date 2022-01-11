import React from 'react';
import Base from '../Components/Base';

const Register = () => {
  return (
    <Base title='Register'>
      <div className='bg-cyan-200 shadow-md rounded-xl px-8 pt-6 pb-8 m-10  flex flex-col'>
        <div className='mb-4'>
          <label className='block text-grey-darker text-sm font-bold mb-2'>
            Name
          </label>
          <input
            className='shadow appearance-none border rounded-xl w-full py-2 px-3 text-grey-darker'
            type='text'
            placeholder='Name'
          />

          <label className='block text-grey-darker text-sm font-bold mb-2'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded-xl w-full py-2 px-3 text-grey-darker'
            type='text'
            placeholder='Email'
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
          />
          <p className='text-red text-xs italic'>Please choose a password.</p>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-rose-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-xl'
            type='button'>
            Register
          </button>
          <a className='inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker'>
            Already have account?
          </a>
        </div>
      </div>
    </Base>
  );
};

export default Register;

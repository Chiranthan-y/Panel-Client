import React, { useState } from 'react';
import Base from '../Components/Base';
import { useDispatch } from 'react-redux';
import { register } from '../Redux/Actions/auth';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = () => {
    dispatch(register({ username, password }));
    history.push('/login');
  };

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
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-grey-darker text-sm font-bold mb-2'
            htmlFor='password'>
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
            onClick={handleRegister}
            type='button'>
            Register
          </button>
          <Link to='/login'>
            <a className='inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker'>
              Already have account?
            </a>
          </Link>
        </div>
      </div>
    </Base>
  );
};

export default Register;

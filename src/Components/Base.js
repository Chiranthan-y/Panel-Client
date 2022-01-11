import React from 'react';
import Header from './Header';

const Base = ({ title, children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center m-8'>
        <h1 className='text-3xl font-extrabold'>{title}</h1>
      </div>
      <main className='flex-grow'>{children}</main>
      <footer className='flex items-center justify-center bg-gray-800 p-6'>
        <span className='text-sm text-white'>
          © {new Date().getFullYear()}, Developed
          {` `}
          <a>Chiranthan Y</a>
        </span>
      </footer>
    </div>
  );
};

export default Base;

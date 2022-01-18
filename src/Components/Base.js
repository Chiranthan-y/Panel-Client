import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import CategoryBar from './CategoryBar';

import { useLocation } from 'react-router-dom';

const Base = ({ title, children }) => {
  const flage = useLocation().pathname === '/' || '/category';

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      {flage ? (
        <>
          <SearchBar />
          <CategoryBar />
        </>
      ) : null}

      <div className='flex items-center justify-center m-8'>
        <h1 className='text-3xl font-extrabold'>{title}</h1>
      </div>
      <main className='flex-grow'>{children}</main>
      <footer className='flex items-center justify-center bg-gray-800 p-6'>
        <span className='text-sm text-white'>
          © {new Date().getFullYear()}, Developed by
          <a>Chiranthan Y</a>
        </span>
      </footer>
    </div>
  );
};

export default Base;

import React from 'react';
import { Listbox } from '@headlessui/react';

const DropDownButton = ({ title }) => {
  return (
    <select className='bg-blue-500  text-white font-bold py-2 px-4 rounded-md '>
      <option>{(title, '1')}</option>
      <option>{(title, '2')}</option>
      <option>{(title, '3')}</option>
    </select>
  );
};

export default DropDownButton;

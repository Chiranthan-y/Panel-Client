import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_category } from './../Redux/Actions/category';
const CategoryBar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(get_category());
  }, [dispatch]);

  return (
    <div className='flex flex-wrap items-center justify-center bg-sky-500 p-2 gap-5'>
      {data ? (
        data.category.map((item) => (
          <div className='flex items-center'>
            <Link to={`/category/${item._id}`}>
              <span key={item._id} className='text-sm cursor-pointer'>
                {item.name}
              </span>
            </Link>
          </div>
        ))
      ) : (
        <>Server not connected</>
      )}
    </div>
  );
};

export default CategoryBar;

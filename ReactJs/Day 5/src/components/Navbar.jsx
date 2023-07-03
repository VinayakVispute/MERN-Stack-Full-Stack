import React from 'react';

const Navbar = () => {

  return (
    <nav className='py-4'
      style={{
        '--tw-bg-opacity': 1,
        backgroundColor: 'rgb(34 34 59/var(--tw-bg-opacity))',
      }}
    >
      <h1 className='text-3xl text-white font-bold text-center'>Top Courses</h1>
    </nav>
  );
};

export default Navbar;

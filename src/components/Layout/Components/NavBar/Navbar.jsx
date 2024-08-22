import React from 'react';
import Logo from './img/Logo.png';
import Profile from './img/profile.png';
import DarkmodeBtn from './Components/DarkmodeBtn';

function Navbar() {
  return (
    <div className='w-full h-16 dark:bg-blue-dark bg-whitee shadow dark:shadow-none flex justify-between items-center px-3'>

      <div className='w-11'>
        <img src={Logo} alt="Logo" />
      </div>

      <div className='flex gap-2'>
        <div>
          <DarkmodeBtn />
        </div>
        <div className='w-11'>
          <img src={Profile} alt="profile" className='rounded-full' />
        </div>
      </div>

    </div>
  );
}

export default Navbar;

import React from 'react';
import Navbar from './Components/NavBar/Navbar';

function Layout() {
  return (
    <div className='w-full h-[100vh] bg-purple-50 dark:bg-primary-dark text-text-color'>
      <Navbar />
    </div>
  );
}

export default Layout;

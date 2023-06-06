/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  const sidebarStyle = {
    width: isOpen ? '200px' : '40px', // Adjust the width when open or closed
    transition: 'width 0.2s ease-in-out',
    backgroundColor: isOpen ? 'black' : 'transparent', // Set the background color to red when open, transparent when closed
  };

  const getContent = () => {
    if (!isOpen) {
      return (
<div className='bg-black text-white flex flex-col w-[40px] h-[100vh] justify-around items-start' onClick={handleSidebarToggle}>
  <div className=' h-0 mb-[-40px]'>
  <div className='transform -rotate-90 origin-top-left text-[12px] uppercase'>Products</div>
  </div>
  <div className='h-0 mb-[-10px]'>
  <div className='transform -rotate-90 origin-top-left text-[12px] uppercase'>Solutions</div>
  </div>
  <div className=' mb-[-50px]'>
  <div className='transform -rotate-90 origin-top-left text-[12px] uppercase '>Documentation</div>
  </div>
  <div className='h-0 mb-[-30px]'>
  <div className='transform -rotate-90 origin-top-left text-[12px]  w-[120px] uppercase'>Electronic signature</div>
  </div>
  <div className=' h-0 mb-[-30px]'>
    <div className='transform -rotate-90 origin-top-left w-[100px] text-[12px] uppercase'>Industries</div>
  </div>
  <div className=' h-0  mb-[-30px]'>
    <div className='transform -rotate-90 origin-top-left  mb-0 w-[100px] text-[12px] uppercase'>Aes 256-bit encryption</div>
  </div>
  <div className='h-0  mb-[-60px]'>
    <div  className='transform -rotate-90 origin-top-left mb-0 w-[60px] text-[12px] uppercase' >Pricing</div>
  </div>        
</div>

      );
    }

    return null;
  };

  return (
    <div>
      {/* <button onClick={handleSidebarToggle}>Toggle Sidebar</button> */}
      <Drawer
        open={isOpen}
        onClose={handleOverlayClick}
        direction="left"
        style={sidebarStyle}
      >
        <div className='h-[100vh]'>
        <img src='/assets/SideBarLogo.png' alt=''  className='w-[90%] mt-5'/>
            Sidebar Content</div>
      </Drawer>
      {getContent()}
    </div>
  );
};

export default Sidebar;

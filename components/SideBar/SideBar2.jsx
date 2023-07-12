/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import Products from './Products';
import Solutions from './Solutions';
import Documentation from './Documentation';
import ESignature from './ESignature';
import Industries from './Industries';
import Encryption from './Encryption';
import Pricing from './Pricing';

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const { sidebarstate } = useSelector((state) => state.custom);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null)

  const sidebaropen = () => {
    dispatch({ type: "sidebaropen" });
};
const sidebaroff = () => {
    dispatch({ type: "sidebaroff" });
};

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
    sidebaropen();
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
    sidebaroff();
  };

  const handleSidebarItemClick = (route) => {
    router.push(route);
    setIsOpen(false);
  };

  const sidebarStyle = {
    width: isOpen ? '300px' : '40px', // Adjust the width when open or closed
    transition: 'width 0.2s ease-in-out',
    backgroundColor: isOpen ? 'black' : 'transparent', // Set the background color to red when open, transparent when closed
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const getContent = () => {
    if (!isOpen) {
      return (
<div className='bg-black text-white flex flex-col min-h-screen w-[40px] justify-start items-start overflow-y-hidden' onClick={handleSidebarToggle}>

<div className='h-[90px] 2xl:h-[110px]  w-full  flex flex-col justify-center items-center mt-1 hover:text-golden cursor-pointer ' onClick={() => handleTabClick('products')}>
<div className='transform -rotate-90 origin-center text-[11px] uppercase tracking-[2px] w-[70px] '>    Products</div>
  </div>

  <div className='h-[90px]  2xl:h-[110px]  w-full  flex flex-col justify-center items-center 2xl:mt-2 hover:text-golden cursor-pointer '  onClick={() => handleTabClick('solutions')}>
<div className='transform -rotate-90 origin-center text-[11px] uppercase w-[90px]  2xl:w-[110px]  border-r-2 border-golden  2xl:px-2 tracking-[2px] '>   Solutions</div>
  </div>
    <div className='h-[110px]  2xl:h-[160px]  w-full  flex flex-col justify-center items-center 2xl:mt-2 mt-5 hover:text-golden cursor-pointer'  onClick={() => handleTabClick('documentation')}>
<div className='transform -rotate-90 origin-center text-[11px] uppercase  border-r-2 border-golden px-1 2xl:px-3 tracking-[2px] '> Documentation</div>
  </div>
  <div className='h-[155px]  2xl:h-[197px]  w-full  flex flex-col justify-center items-center 2xl:mt-4 mt-6 hover:text-golden cursor-pointer'  onClick={() => handleTabClick('electronic-signature')}>
<div className='transform -rotate-90 origin-center text-[11px] uppercase 2xl:w-[197px] w-[175px]  border-r-2 border-golden   tracking-[2px]  '  >Electronic   signature</div>
  </div>
  <div className='h-[130px]  2xl:h-[170px]  w-full  flex flex-col justify-center items-center  hover:text-golden cursor-pointer'  onClick={() => handleTabClick('industries')}>
<div className=' 2xl:w-[120px] w-[90px] transform -rotate-90 origin-center text-[11px] uppercase  border-r-2 border-golden px-0  2xl:px-4 tracking-[2px]'>   Industries</div>
  </div>
  <div className='h-[130px] 2xl:h-36  w-full  flex flex-col justify-center items-center  2xl:mt-2 mt-4 hover:text-golden cursor-pointer'  onClick={() => handleTabClick('encryption')}>
<div className='transform -rotate-90 origin-center text-[11px] uppercase w-[190px]  2xl:w-[207px] border-r-2 border-golden  tracking-[2px]  '>   Aes 256-bit encryption</div>
  </div>
  <div className='h-[80px] 2xl:h-[100px] w-full  flex flex-col justify-center items-center  mt-10 hover:text-golden cursor-pointer'  onClick={() => handleTabClick('pricing')}>
<div className='transform -rotate-90 origin-center text-[11px] uppercase border-r-2 border-golden  pr-2 tracking-[2px]'>  Pricing</div>
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
  <div >


      {/* Render different content based on the selected tab */}
      {(() => {
        switch (selectedTab) {
          case 'products':
            return (
                <Products/>
            );
          case 'solutions':
            return (
                <Solutions/>
            );
          case 'documentation':
            return (
                <Documentation/>
            );
          case 'electronic-signature':
            return (
                <ESignature/>
            );
          case 'industries':
            return (
                <Industries/>
            );
          case 'encryption':
            return (
                <Encryption/>
            );
          case 'pricing':
            return (
                <Pricing/>
            );
          default:
            return null;
        }
      })()}
      

  </div>
  {/* Rest of the JSX */}
</Drawer>

      {getContent()}
    </div>
  );
};

export default Sidebar;

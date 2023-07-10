/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const { sidebarstate } = useSelector((state) => state.custom);
  const [isOpen, setIsOpen] = useState(false);


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
    width: isOpen ? '262px' : '40px', // Adjust the width when open or closed
    transition: 'width 0.2s ease-in-out',
    backgroundColor: isOpen ? 'black' : 'transparent', // Set the background color to red when open, transparent when closed
  };

  const getContent = () => {
    if (!isOpen) {
      return (
<div className='bg-black text-white flex flex-col min-h-screen w-[40px] justify-start items-start overflow-y-hidden' onClick={handleSidebarToggle}>

<div className='h-[90px] 2xl:h-[110px]  w-full  flex flex-col justify-center items-center mt-1 '>
<div className='transform -rotate-90 origin-center text-[11px] uppercase tracking-[2px] w-[70px] '>    Products</div>
  </div>

  <div className='h-[90px]  2xl:h-[110px]  w-full  flex flex-col justify-center items-center 2xl:mt-2 '>
<div className='transform -rotate-90 origin-center text-[11px] uppercase w-[90px]  2xl:w-[110px]  border-r-2 border-golden  2xl:px-2 tracking-[2px] '>   Solutions</div>
  </div>
    <div className='h-[110px]  2xl:h-[160px]  w-full  flex flex-col justify-center items-center 2xl:mt-2 mt-5'>
<div className='transform -rotate-90 origin-center text-[11px] uppercase  border-r-2 border-golden px-1 2xl:px-3 tracking-[2px] '> Documentation</div>
  </div>
  <div className='h-[155px]  2xl:h-[197px]  w-full  flex flex-col justify-center items-center 2xl:mt-4 mt-6'>
<div className='transform -rotate-90 origin-center text-[11px] uppercase 2xl:w-[197px] w-[175px]  border-r-2 border-golden   tracking-[2px]  '  >Electronic   signature</div>
  </div>
  <div className='h-[130px]  2xl:h-[170px]  w-full  flex flex-col justify-center items-center '>
<div className=' 2xl:w-[120px] w-[90px] transform -rotate-90 origin-center text-[11px] uppercase  border-r-2 border-golden px-0  2xl:px-4 tracking-[2px]'>   Industries</div>
  </div>
  <div className='h-[130px] 2xl:h-36  w-full  flex flex-col justify-center items-center  2xl:mt-2 mt-4 '>
<div className='transform -rotate-90 origin-center text-[11px] uppercase w-[190px]  2xl:w-[207px] border-r-2 border-golden  tracking-[2px]  '>   Aes 256-bit encryption</div>
  </div>
  <div className='h-[80px] 2xl:h-[100px] w-full  flex flex-col justify-center items-center  mt-10'>
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
        <div className='h-[100vh] flex flex-col items-start ml-2 overflow-y-scroll'>
          <div className='flex flex-col'>
        {/* <img src='/assets/SideBarLogo.png' alt=''  className=' w-[183px] mt-2 2xl:mt-8 '/> */
        }
        <div className='flex items-end'>
        <div className=' h-[130px] w-[25px]  flex flex-col justify-center items-center  '>
<div className='transform -rotate-90 origin-center text-[14px] font-semibold uppercase border-l-2 border-[#BE9F56]  pl-2 pr-4 tracking-[3px] text-white'>products</div>
  </div>
        <img src='/assets/PoweredbyZiDocWB.svg' alt='' className='w-[129px] mb-2 ml-7'/>
        </div>
        {/* <img src='/assets/Products.png' alt=''  className=' w-[238px] mt-2'/> */}
        <div className='uppercase tracking-[5px] text-[38px] 2xl:mt-2 text-[#333333]'>products</div>
        </div>
            <div className='mt-4 mr-3'>
            <div className='w-full uppercase text-[10px] text-white font-normal text-right tracking-[2px] cursor-pointer' onClick={() => handleSidebarItemClick('/signatures')}> signatures</div>
            <div >
            <div className='w-full uppercase text-[10px] text-white font-light text-left tracking-[2px] cursor-pointer my-2 2xl:m3-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/signatures')}>electronic signature</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px] my-1'> Worlds most secure way to sign and send</div>
            </div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-light text-left tracking-[2px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/ewitness')}> e-witness</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px] my-1'>witness and sign confidential and high value agreements/contracts</div>
            </div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-light text-left tracking-[2px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/identityverification')}> identify verification</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px] my-1'>working seamlessly with aes 256 bit encryption and zimo meet</div>
            </div>

            <div className='w-full uppercase text-[10px] text-white font-normal text-right tracking-[2px] cursor-pointer my-2 2xl:mt-3' onClick={() => handleSidebarItemClick('/contracts')}> contracts</div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-light text-right tracking-[1px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/contractagreement')}> contract/agreement management</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-right tracking-[2px] my-1'>organised, automated document work flows</div>
            </div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-light text-left tracking-[2px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/documentgeneration')}> document generation</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px] my-1'>generate documents seamlessly through your dedicated portal</div>
            </div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-light text-left tracking-[2px] cursor-ponter my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/datasecurity')}> data security</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[1.5px] leading-4'>all signatures, contracts, agreements, documents and witness statements kept under aes 256-bit encryption for the duration of your membership</div>
            </div>

            <div className='w-full uppercase text-[10px] text-white font-light text-right tracking-[2px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/history')}> history</div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-light text-left tracking-[2px] cursor-pointer my-2 2xl:my-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/docsafe')}> doc.safe</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px] my-1'> search, view, download and share every single signature, contract, agreement, and document from your portal</div>
            </div>

            <div className='w-full uppercase text-[10px] text-white font-light text-right tracking-[2px] cursor-pointer my-1' onClick={() => handleSidebarItemClick('/more')}> more</div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-light text-left tracking-[2px] cursor-pointer' onClick={() => handleSidebarItemClick('/payment')}> payements </div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px] my-1'> agree, sign and make payment(s) in a single click</div>
            </div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-light text-left tracking-[2px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/clickwraps')}> clickwraps </div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px] my-1'> capture consent with a single click</div>
            </div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-light text-left tracking-[2px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/webforms')}> web forms </div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px] my-1'> incorporate data collection and speed  up signing</div>
            </div>

            <div className='w-full uppercase text-[10px] text-white font-light text-right tracking-[2px] flex flex-row justify-end  cursor-pointer mt-6' onClick={() => handleSidebarItemClick('/allproducts')}> all products <img src='/assets/SideBarRightArrow.png' alt='' className='ml-5' /> </div>


            </div>
            
            Sidebar Content</div>
      </Drawer>
      {getContent()}
    </div>
  );
};

export default Sidebar;

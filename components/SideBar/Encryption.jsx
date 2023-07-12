/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Encryption = () => {
  return (
    <div>

<div className='h-[100vh] bg-blue-400 flex flex-col items-start ml-2 overflow-y-scroll'>
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
            <div className='mt-4 mr-2'>
            <div className='w-full uppercase text-[10px] text-white font-normal text-right tracking-[2px] cursor-pointer' onClick={() => handleSidebarItemClick('/signatures')}> signatures</div>
            <div className=' pl-[2px]'>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px] cursor-pointer my-2 2xl:m3-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/signatures')}>AES Encryption</div>
              <div className='w-full uppercase text-[9px] text-white font-semibold text-left tracking-[2px] my-1 opacity-40'> Worlds most secure way to sign <br/> and send</div>
            </div>

            </div>
            
            Sidebar Content</div>

            
    </div>
  )
}

export default Encryption
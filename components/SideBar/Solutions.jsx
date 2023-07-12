/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Solutions = () => {
  return (
    <div>

<div className='h-[100vh] bg-pink-700 flex flex-col items-start ml-2 overflow-y-scroll'>
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
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px] cursor-pointer my-2 2xl:m3-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/signatures')}>electronic signature</div>
              <div className='w-full uppercase text-[9px] text-white font-semibold text-left tracking-[2px] my-1 opacity-40'> Worlds most secure way to sign <br/> and send</div>
            </div>
            <div className=' pl-[2px]'>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/ewitness')}> e-witness</div>
              <div className='w-full uppercase text-[9px] text-white font-semibold text-left tracking-[2px] my-1 opacity-40'>witness & sign confidential and<br/> high value agreements/contracts</div>
            </div>
            <div className=' pl-[2px]'>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/identityverification')}> identify verification</div>
              <div className='w-full uppercase text-[9px] text-white font-semibold text-left tracking-[2px] my-1 opacity-40'>working seamlessly with aes <br/> 256 bit encryption and zimo meet</div>
            </div>

            <div className='w-full mr-1 uppercase text-[10px] text-white font-normal text-right tracking-[2px] cursor-pointer my-2 2xl:mt-3' onClick={() => handleSidebarItemClick('/contracts')}> contracts</div>
            <div className=' mr-3'>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-right tracking-[2px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/contractagreement')}> contract/agreement management</div>
              <div className='w-full pr-6 uppercase text-[9px] text-white font-semibold text-right tracking-[2px] my-1 opacity-40'>organised, automated document work flows</div>
            </div>
            <div className=' pl-[2px]'>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/documentgeneration')}> document generation</div>
              <div className='w-full uppercase text-[9px] text-white font-semibold text-left tracking-[2px] my-1 opacity-40'>generate documents seamlessly through your dedicated portal</div>
            </div>
            <div className=' pl-[2px]'>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px] cursor-ponter my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/datasecurity')}> data security</div>
              <div className='w-full uppercase text-[9px] text-white  font-semibold text-left tracking-[2px] leading-4 opacity-40'>all signatures, contracts, agreements, documents and witness statements kept under aes 256-bit encryption for the duration of your membership</div>
            </div>

            <div className='w-full uppercase text-[10px] text-white font-semibold text-right tracking-[2px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/history')}> history</div>
            <div className=' pl-[2px]'>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px] cursor-pointer my-2 2xl:my-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/docsafe')}> doc.safe</div>
              <div className='w-full uppercase text-[9px] text-white  font-semibold text-left tracking-[2px] my-1 opacity-40'> search, view, download and share every single signature, contract, agreement, and document from your portal</div>
            </div>

            <div className='w-full uppercase text-[10px] text-white font-semibold text-right tracking-[2px] cursor-pointer my-1' onClick={() => handleSidebarItemClick('/more')}> more</div>
            <div className=' pl-[2px]'>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px] cursor-pointer' onClick={() => handleSidebarItemClick('/payment')}> payments </div>
              <div className='w-full uppercase text-[9px] text-white  font-semibold text-left tracking-[2px] my-1 opacity-40'> agree, sign and make payment(s) in a single click</div>
            </div>
            <div className=' pl-[2px]'>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/clickwraps')}> clickwraps </div>
              <div className='w-full uppercase text-[9px] text-white  font-semibold text-left tracking-[2px] my-1 opacity-40'> capture consent with a single click</div>
            </div>
            <div className=' pl-[2px]'>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px] cursor-pointer my-2 2xl:mt-3 2xl:mb-2' onClick={() => handleSidebarItemClick('/webforms')}> web forms </div>
              <div className='w-full uppercase text-[9px] text-white font-semibold text-left tracking-[2px] my-1 opacity-40'> incorporate data collection and <br/> speed  up signing</div>
            </div>

            <div className='w-full uppercase text-[10px] text-white font-semibold text-right tracking-[2px] flex flex-row justify-end  cursor-pointer mt-6' onClick={() => handleSidebarItemClick('/allproducts')}> all products <img src='/assets/SideBarRightArrow.png' alt='' className='ml-5' /> </div>


            </div>
            
            Sidebar Content</div>

            
    </div>
  )
}

export default Solutions
/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import ClockComponent from '../LocAndClock/ClockComponent'
import SideBar from '../SideBar/SideBar'
// import SideBar1 from '../SideBar/SideBarProduct'

// import  FaTachometerAlt from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { useSelector } from "react-redux";
import TryForFree from './TryForFree';
// import SideBarSol from '../SideBar/SideBarSol';
// import SideBarDoc from '../SideBar/SideBarDoc';
// import SideBarES from '../SideBar/SideBarES';
// import SideBarIndustry from '../SideBar/SideBarIndustry';
// import SideBarEncrypt from '../SideBar/SideBarEncrypt';
// import SideBarPricing from '../SideBar/SideBarPricing';
import SideBar2 from '../SideBar/SideBar2';

const Page1 = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { sidebarstate } = useSelector((state) => state.custom);

    
    const handleCollapsedChange = () => {
      setCollapsed(!collapsed);
    };
  

    
  return (
    <div className='flex flex-row  min-h-screen overflow-y-hidden'>
      <div className='relative h-full'>
      <div className=' absolute top-0 left-0'><SideBar2/>  </div>
      {/* <div className=' absolute top-0 left-0'><SideBar1/> </div>
       <div className='absolute top-[20px] 2xl:top-[13px] left-0'> <SideBarSol/> </div>
       <div className=' absolute top-[185px] 2xl:top-[232px] left-0'><SideBarDoc/> </div>
       <div className=' absolute top-[325px] 2xl:top-[410px] left-0'><SideBarES/> </div>
       <div className=' absolute top-[512px] 2xl:top-[633px] left-0'><SideBarIndustry/> </div>
       <div className=' absolute top-[609px] 2xl:top-[760px] left-0'><SideBarEncrypt/> </div> 
       <div className=' absolute top-[814px] 2xl:top-[980px] left-0'><SideBarPricing/> </div>  */}
        </div>
    <div className=' w-full flex flex-col justify-start '>
        

    <div className='flex flex-col w-full justify-start items-end mt-2 '>
      <div className='flex flex-row w-full  justify-between items-center mt- 2xl:mt-10 '>
        <div className='flex  justify-between items-center  flex-1  '><div className='relative ml-0 md:ml-5'> <img src='/assets/ZIDOC_Logo_Black_CMYK.svg' alt='' className='2xl:w-[129px] lg:w-[100px] w-[50px] ml-8 '/><img src='/assets/SecurityLockB.svg' alt='' className='w-[5px] absolute right-0 top-[-10px]'/> </div> </div>
        <div className='flex flex-col justify-center items-center flex-1 absolute ml-20 md:ml-0 right-[350px] xl:right-[610px] lg:right-[500px]  2xl:right-[820px]'> <img src='/assets/ZigBlack.svg' alt='' className=' 2xl:w-[204px] lg:w-[190px] w-[120px] mr-5 ' /></div>
        <div className='flex flex-col justify-between items-end mt-3 mr-10 flex-1 '>
          <div className='flex flex-row justify-center items-center'><div className='mr-2 2xl:mr-8'><ClockComponent /> </div> 
            <div><img src='/assets/ZIMOUserIconB.svg' alt=''className='w-[25px] h-[25px]' /> </div> </div> 
        </div>
      </div>
      <div className='flex justify-end items-center mt-3 '>
        <div className=' flex-col flex items-end mr-10 '><img src='/assets/PoweredbyZIMOAIB.png' alt='' className='w-[183px] ' />
        <div className='h-[20px]'>{sidebarstate === 'off' && <TryForFree/>} </div> </div>
      </div>
      
    </div>
        
        <div className=' w-full flex flex-row justify-end items-center '>
            <div className=''> 
            <div className='flex justify-end relative 2xl:w-[541px] w-[460px] mt-11 ml-20 sm:ml-0'><img src='/assets/SidePic2.png' alt='' className=' w-full h-full rounded-tl-2xl rounded-bl-2xl mt-5' />
            <img src='/assets/SidePicSign.png' alt='' className='absolute right-4 top-10 md:w-[90%] w-[80%]'/>
            </div>
            </div>
           
        </div>  
    </div>
    </div>
  )
}

export default Page1
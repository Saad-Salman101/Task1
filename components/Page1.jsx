/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import ClockComponent from './ClockComponent'
import SideBar from './SideBar'
import DrawerSideBar from './DrawerSideBar'
import Mysidebar from './Mysidebar'
// import  FaTachometerAlt from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { useSelector } from "react-redux";

const Page1 = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { sidebarstate } = useSelector((state) => state.custom);

    
    const handleCollapsedChange = () => {
      setCollapsed(!collapsed);
    };
  

    
  return (
    <div className='flex flex-row  min-h-screen overflow-y-hidden'>
        <SideBar onClick={() => console.log("hello")} />

    <div className=' w-full flex flex-col justify-start'>
        

    <div className='flex flex-col w-full justify-start items-end mt-2 '>
      <div className='flex flex-row w-full  justify-between items-center mt- 2xl:mt-14 '>
        <div className='flex flex-col justify-start items-start ml-0 md:ml-5 flex-1  '><div> <img src='/assets/ZIDOC_Logo_Black_CMYK.svg' alt='' className='2xl:w-[129px] w-[100px] ml-4'/> </div>  </div>
        <div className='flex flex-col justify-center items-center flex-1 '> <img src='/assets/ZigBlack.svg' alt='' className=' 2xl:w-[240px] w-[200px] mr-5 ' /></div>
        <div className='flex flex-col justify-between items-end mt-3 mr-10 flex-1'>
          <div className='flex flex-row justify-center items-center'><div className='mr-2 2xl:mr-8'><ClockComponent /> </div> 
            <div><img src='/assets/ZIMOUserIconB.svg' alt=''className='w-[25px] h-[25px]' /> </div> </div> 
        </div>
      </div>
      <div className='flex justify-end items-center mt-5 '>
        <div className=' flex-col flex items-end mr-10 '><img src='/assets/PoweredbyZIMOAIB.png' alt='' className='w-[183px] ' />
        <div>{sidebarstate === 'off' && <img src='/assets/TryForFree.png' alt='' className='mt-5 w-[123px]' />} </div> </div>
      </div>
    </div>
        
        <div className=' w-full flex flex-row justify-end items-center '>
            
            <div className='flex justify-end relative 2xl:h-[846px]  2xl: w-[441px] h-[700px] mt-5'><img src='/assets/MAli-EXAMPLE.png' alt='' className=' w-full h-full rounded-2xl' />
            <img src='/assets/SidePicSign.png' alt='' className='absolute right-7 top-2 md:w-[90%] w-[80%]'/>
            </div>
            
           
        </div>  
    </div>
    </div>
  )
}

export default Page1
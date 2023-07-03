/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import ClockComponent from './ClockComponent'
import SideBar from './SideBar'
import DrawerSideBar from './DrawerSideBar'
import Mysidebar from './Mysidebar'
// import  FaTachometerAlt from 'react-icons/fa';
import image from '../public/assets/ZimoAi.png'
import { FaBars } from 'react-icons/fa';
import { useSelector } from "react-redux";

const Page1 = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { sidebarstate } = useSelector((state) => state.custom);

    
    const handleCollapsedChange = () => {
      setCollapsed(!collapsed);
    };
  

    
  return (
    <div className='flex flex-row  '>
        <SideBar onClick={() => console.log("hello")} />

    <div className=' w-full flex flex-col justify-start'>
        

    <div className='flex flex-col w-full h-[30vh] justify-start items-end  '>
      <div className='flex flex-row w-full h-[15vh] justify-between items-center'>
        <div className='flex flex-col justify-start items-start ml-0 md:ml-5 flex-1  '><div> <img src='/assets/ZimoDoc.png' alt='' className='w-[129px]'/> </div>  </div>
        <div className='flex flex-col justify-center items-center flex-1 '> <img src='/assets/Logo.png' alt='' className=' md:w-[240px] mr-5 ' /></div>
        <div className='flex flex-col justify-between items-end mt-3 mr-0 md:mr-10 flex-1 '>
          <div className='flex flex-row justify-center items-center  '><ClockComponent/> 
            <div><img src='/assets/AccountLogo.png' alt=''className='w-[25px] h-[25px]' /> </div> </div> 
        </div>
      </div>
      <div className='w-full h-[5vh] flex justify-end items-center '>
        <div className='mt-5 flex-col flex items-end  mr-10 '><img src='/assets/ZimoAi.png' alt='' className=' ' />
        {sidebarstate === 'off' && <img src='/assets/TryForFree.png' alt='' className='mt-5 ' />} </div>
      </div>
    </div>
        
        <div className='h-[80%] w-full flex flex-row justify-end items-center  '>
            
            <div className='flex justify-end relative h-full md:w-[541px] w-[70%] '><img src='/assets/SidePic.png' alt='' className=' w-full h-full ' />
            <img src='/assets/SidePicSign.png' alt='' className='absolute right-7 top-2 md:w-[90%] w-[80%]'/>
            </div>
            
           
        </div>  
    </div>
    </div>
  )
}

export default Page1
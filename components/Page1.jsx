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
    // const [image, setImage] = useState(false);
    // const [toggled, setToggled] = useState(false);
    const { sidebarstate } = useSelector((state) => state.custom);
    console.log(sidebarstate)
    
    const handleCollapsedChange = () => {
      setCollapsed(!collapsed);
    };
  
    // const handleImageChange = (checked) => {
    //   setImage(checked);
    // };
  
    // const handleToggleSidebar = (value) => {
    //   setToggled(value);
    // };
    
  return (
    <div className='flex flex-row  '>
        <SideBar onClick={() => console.log("hello")} />

    <div className=' w-full flex flex-col justify-between'>
        

    <div className='flex flex-col w-full h-[35vh] justify-center items-end  '>
      <div className='flex flex-row w-full h-[15vh] justify-between items-center '>
        <div className='flex flex-col justify-start items-center w-[10%] ml-5'><div> <img src='/assets/ZimoDoc.png' alt=''/> </div>  </div>
        <div className='flex flex-col justify-center items-center '><div className='w-[60%] md:w-[100%]'> <img src='/assets/Logo.png' alt='' /></div></div>
        <div className='flex flex-col justify-between items-center mt-3 mr-5'>
          <div className='flex flex-row justify-center items-center '><ClockComponent/> 
            <div><img src='/assets/AccountLogo.png' alt='' /> </div> </div> 
        </div>
      </div>
      <div className='w-full h-[5vh] flex justify-end items-center  '>
        <div className='mt-5 flex-col flex items-end  mr-10 '><img src='/assets/ZimoAi.png' alt='' className=' ' />
        {sidebarstate === 'off' && <img src='/assets/TryForFree.png' alt='' className='mt-5 ' />} </div>
      </div>
    </div>
        
        <div className='h-[80%] w-full flex flex-row justify-end items-center mt-5 '>
            
            <div className='flex justify-end relative h-full md:w-[541px] w-[70%] '><img src='/assets/SidePic.png' alt='' className=' w-full h-full ' />
            <img src='/assets/SidePicSign.png' alt='' className='absolute top-18 md:w-[90%] w-[100%]'/>
            </div>
            
           
        </div>  
    </div>
    </div>
  )
}

export default Page1
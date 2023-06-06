/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import ClockComponent from './ClockComponent'
import SideBar from './SideBar'
import DrawerSideBar from './DrawerSideBar'
import Mysidebar from './Mysidebar'
// import  FaTachometerAlt from 'react-icons/fa';
import image from '../public/assets/ZimoAi.png'
import { FaBars } from 'react-icons/fa';

const Page1 = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(false);
    const [toggled, setToggled] = useState(false);
  
    const handleCollapsedChange = () => {
      setCollapsed(!collapsed);
    };
  
    const handleImageChange = (checked) => {
      setImage(checked);
    };
  
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };
    
  return (
    <div className='flex flex-row h-[100vh]'>
                {/* <DrawerSideBar/> */}
        {/* <Mysidebar/> */}
        {/* <Mysidebar
        image={image}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      /> */}
              {/* <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div> */}
        <SideBar/>
    <div className=' w-full flex flex-col justify-between'>
        

    <div className='flex flex-row w-full h-[20vh] justify-between items-center'>
        <div className='flex flex-col justify-start items-center w-[10%]'><div> <img src='/assets/ZimoDoc.png' alt=''/> </div>  </div>
        <div className='flex flex-col justify-center items-center'><div> <img src='/assets/Logo.png' alt='' /></div></div>
        <div className='flex flex-col justify-between items-center mt-3'>
            <div className='flex flex-row justify-center items-center mt-10'><ClockComponent/> <img src='/assets/AccountLogo.png' alt='' className='mx-5 cursor-pointer' /></div> 
            <div className='mt-5'><img src='/assets/ZimoAi.png' alt='' /> <img src='/assets/TryForFree.png' alt=''  className='my-5'/> </div>
            </div>
    </div>
        
        <div className='h-[75vh] w-full flex flex-row justify-end items-center'>
            <img src='/assets/SidePic.png' alt='' className='h-full' />
           
        </div>  
    </div>
    </div>
  )
}

export default Page1
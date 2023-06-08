// import { Link, NavLink } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from 'react-pro-sidebar';
import {
  FaUser,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
  FaGem,
  FaList,
  FaRegLaughWink,
  FaHeart
} from 'react-icons/fa';
// import sidebarBg from '../assets/bg1.jpg';

const Mysidebar = ({
  image,
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange
}) => {
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}
      breakPoint="md"
      className='bg-blue-500'
    >
      {/* Header */}
      <SidebarHeader>
        <Menu iconShape="circle">
          {collapsed ? (
            <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={handleCollapsedChange}
            >
              <div
                style={{
                  padding: '9px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: '1px'
                }}
              >
                Pro Sidebar
              </div>
            </MenuItem>
          )}
        </Menu>
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
       cdscscsdc
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter style={{ textAlign: 'center' }}>
        <div className="sidebar-btn-wrapper" style={{ padding: '16px' }}>

            <FaUser />
            <span>My Account</span>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Mysidebar;


{/* <div className='bg-black text-white flex flex-col w-[40px] h-[150vh] justify-between items-start' onClick={handleSidebarToggle}>
  <div className=' h-0 mb-[-40px] border-t-2 border-golden w-full'>
  <div className='transform -rotate-90 origin-top-left text-[12px] uppercase w-[80px]'>  &nbsp;  Products</div>
  </div>
  <div className='h-0 mb-[-10px] border-t-2 border-golden w-full'>
  <div className='transform -rotate-90 origin-top-left text-[12px] uppercase w-[100px]'>  &nbsp; Solutions</div>
  </div>
  <div className='h-12 mb-[-50px] border-t-2 border-golden w-full bg-red-500'>
  <div className='transform -rotate-90 origin-top-left text-[12px] uppercase  w-[120px] '>  &nbsp; Documentation</div>
  </div>
  <div className='h-0 mb-[-50px] border-t-2 border-golden w-full'>
  <div className='transform -rotate-90 origin-top-left text-[12px] bg-slate-500  w-[160px] uppercase '> &nbsp;  Electronic  &nbsp;  signature</div>
  </div>

    <div className='transform -rotate-90 origin-left  ml-2 w-[80px] text-[12px] border-r-2 border-golden  uppercase'>Industries</div>

  <div className=' h-0  border-t-2 border-golden w-full bg-red-500'>
    <div className='transform -rotate-90 origin-top-left pl-2 w-[200px] text-[12px] uppercase bg-blue-500'>Aes 256-bit encryption</div>
  </div>
  <div className=' h-28   bg-red-500 flex flex-col justify-center items-center w-full itms'>
    <div  className='transform -rotate-90 origin-center mb-5 w-[50px] text-[11px] uppercase bg-blue-500' >Pricing</div>
  </div>        
</div> */}
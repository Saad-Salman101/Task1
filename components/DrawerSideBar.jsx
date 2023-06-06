import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const DrawerSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  const sidebarStyle = {
    height: isOpen ? '100%' : '50px', // Adjust the height when open or closed
    transition: 'height 0.2s ease-in-out',
  };

  const getContent = () => {
    if (!isOpen) {
      return (
        <div>
          <p>Pricing</p>
          <p>Aes 256-bit encryption</p>
          <p>Industries</p>
          <p>Electronic signature</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <button onClick={handleSidebarToggle}>Toggle Sidebar</button>
      <Drawer
        open={isOpen}
        onClose={handleOverlayClick}
        direction="left"
        style={sidebarStyle}
      >
        <h2>Sidebar Content</h2>
      </Drawer>
      {getContent()}
    </div>
  );
};

export default DrawerSideBar;

import React, { useState } from 'react';
import './sidebar.css';
import SidebarButton from './SidebarButton';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div class="menu">
      <SidebarButton onClick={handleSidebarToggle} />
      {isSidebarOpen && <div className="sidebar">
        <li><a href="/">Home</a></li>
            <li><a href="/planos">Planos</a></li>
            <li><a href="/cadastro-instrutor">Instrutor</a></li>
            <li><a href="/">Contatos</a></li>
        
        </div>}
    </div>
  );
};

export default Sidebar;
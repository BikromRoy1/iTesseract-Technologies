import {
  Calendar,
  Flag,
  Home,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  StickyNote,
} from 'lucide-react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Common/Header/Header';
import TopHeader from '../components/Common/TopHeader/TopHeader';
import DBFooter from '../components/Dashboard/DBFooter/DBFooter';
import Sidebar, { SidebarItem } from '../components/Sidebar/Sidebar';

const DashboardLayout = () => {
  return (
    <div>
      <TopHeader />
      <Header />

      <div className='drawer drawer-mobile'>
        <input
          id='dashboard-drawer'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content'>
          <Outlet></Outlet>
        </div>
        <div className='drawer-side'>
          <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>

          <div className='flex'>
            <Sidebar>
              <SidebarItem icon={<Home size={20} />} text='হোম' active alert />
              <SidebarItem
                icon={<LayoutDashboard size={20} />}
                text='Dashboard'
              />
              <SidebarItem
                icon={<StickyNote size={20} />}
                text='Projects'
                alert
              />
              <SidebarItem icon={<Calendar size={20} />} text='Calendar' />
              <SidebarItem icon={<Layers size={20} />} text='Tasks' />
              <SidebarItem icon={<Flag size={20} />} text='Reporting' />
              <hr className='my-3' />
              <SidebarItem icon={<Settings size={20} />} text='Settings' />
              <SidebarItem icon={<LifeBuoy size={20} />} text='Logout' />
            </Sidebar>
          </div>
        </div>
      </div>
      <DBFooter />
    </div>
  );
};

export default DashboardLayout;

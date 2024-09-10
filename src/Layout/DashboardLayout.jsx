import {
  Video,
  LayoutDashboard,
  LogOut,
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
  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    window.location.replace('/');
  };

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
        <div className='drawer-content bg-[#F5F9FC] w-full h-screen'>
          <Outlet></Outlet>
        </div>
        <div className='drawer-side md:hidden'>
          <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>

          <div className='flex'>
            <Sidebar>
              <SidebarItem
                to='/dashboard'
                icon={<LayoutDashboard size={20} />}
                text='ড্যাশবোর্ড'
              />
              <SidebarItem
                to='/dashboard/my-courses'
                icon={<StickyNote size={20} />}
                text='আমার কোর্স'
              />
              <SidebarItem
                to='/dashboard/live-class'
                icon={<Video size={20} />}
                text='লাইভ ক্লাস'
                alert
              />
              <hr className='my-3' />
              <SidebarItem
                to='/dashboard/profile'
                icon={<Settings size={20} />}
                text='প্রোফাইল'
              />
              <SidebarItem
                handleLogout={handleLogout}
                icon={<LogOut size={20} />}
                text='লগ-আউট'
              />
            </Sidebar>
          </div>
        </div>
      </div>
      <DBFooter />
    </div>
  );
};

export default DashboardLayout;

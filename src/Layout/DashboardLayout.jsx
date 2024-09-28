import {
  LayoutDashboard,
  LogOut,
  Settings,
  StickyNote,
  Video,
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
    // <div>
    //   <TopHeader />
    //   <Header />

    //   <div className='drawer drawer-mobile'>
    //     <input
    //       id='dashboard-drawer'
    //       type='checkbox'
    //       className='drawer-toggle'
    //     />
    //     <div className='drawer-content bg-[#F5F9FC] w-full h-screen'>
    //       <Outlet></Outlet>
    //       <label
    //         htmlFor='dashboard-drawer'
    //         className='drawer-button btn btn-primary'
    //       >
    //         Open drawer
    //       </label>
    //     </div>
    //     <div className='drawer-side md:hidden'>
    //       <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>

    //       <div className='flex'>
    //         <Sidebar>
    //           <SidebarItem
    //             to='/dashboard'
    //             icon={<LayoutDashboard size={20} />}
    //             text='ড্যাশবোর্ড'
    //           />
    //           <SidebarItem
    //             to='/dashboard/my-courses'
    //             icon={<StickyNote size={20} />}
    //             text='আমার কোর্স'
    //           />
    //           <SidebarItem
    //             to='/dashboard/live-class'
    //             icon={<Video size={20} />}
    //             text='লাইভ ক্লাস'
    //             alert
    //           />
    //           <hr className='my-3' />
    //           <SidebarItem
    //             to='/dashboard/profile'
    //             icon={<Settings size={20} />}
    //             text='প্রোফাইল'
    //           />
    //           <SidebarItem
    //             handleLogout={handleLogout}
    //             icon={<LogOut size={20} />}
    //             text='লগ-আউট'
    //           />
    //         </Sidebar>
    //       </div>
    //     </div>
    //   </div>
    //   <DBFooter />
    // </div>

    <div>
      <TopHeader />
      <Header />

      <div className='drawer drawer-mobile'>
        <input
          id='dashboard-drawer'
          type='checkbox'
          className='drawer-toggle'
        />

        {/* Drawer Content */}
        <div className='drawer-content bg-[#F5F9FC] w-full h-screen'>
          <label
            htmlFor='dashboard-drawer'
            className='bg-gradient-to-tr from-green-200 to-green-100 text-[#1bb57b] border-none hover:bg-gray-100 btn md:hidden mx-6 mt-3 py-1 px-4'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              aria-hidden='true'
              class='h-7 inline-block w-7'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              ></path>
            </svg>
          </label>
          <Outlet></Outlet>

          {/* Button to open the drawer */}
        </div>

        {/* Sidebar drawer */}
        <div className='drawer-side'>
          <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>

          <div className='flex flex-col h-full'>
            {/* Close button for mobile (visible only on small screens) */}
            <div className='flex justify-end md:hidden'>
              <label
                htmlFor='dashboard-drawer'
                className='cursor-pointer text-1xl btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mr-2 absolute'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                  class='h-5 inline-block w-5'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                </svg>
              </label>
            </div>

            {/* Sidebar items */}
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

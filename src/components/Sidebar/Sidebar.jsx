import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';
import { createContext, useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Images/main-logo.svg';
import profile from '../../Images/teacher/student-01.png';

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      <aside className='h-screen'>
        <nav className='h-full flex flex-col bg-white border-r  ds-shadow'>
          <div className='p-4 pb-2 flex justify-between items-center'>
            <Link to='/'>
              <img
                src={logo}
                loading='lazy'
                alt='main-logo'
                className={`overflow-hidden transition-all ${
                  expanded ? 'w-32' : 'w-0'
                }`}
              />
            </Link>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className='flex-1 px-3'>{children}</ul>
          </SidebarContext.Provider>

          <div className='border-t flex p-3'>
            <img
              src={profile}
              loading='lazy'
              alt='userImage'
              className='w-10 h-10 rounded-md'
            />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? 'w-52 ml-3' : 'w-0'
              } `}
            >
              <div className='leading-4'>
                <h4 className='font-semibold'>constGenius</h4>
                <span className='text-xs text-gray-600'>
                  constgenius@gmail.com
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert, to }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to}>
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          isActive
            ? 'bg-gradient-to-tr from-green-200 to-green-100 text-[#1bb57b]'
            : 'hover:bg-green-50 text-gray-600'
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? 'w-52 ml-3' : 'w-0'
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-green-400 ${
              expanded ? '' : 'top-2'
            }`}
          ></div>
        )}

        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}

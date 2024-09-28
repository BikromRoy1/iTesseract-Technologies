import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';
import { createContext, useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Images/main-logo.svg';
import profile from '../../Images/teacher/student-01.png';
import { apiUrl } from '../../config/config';

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const getInfo = JSON.parse(localStorage.getItem('userInfo'));
  const userEmail = getInfo?.email;
  const token = getInfo?.token;

  // Maximum length of email to display
  const maxLength = 30;

  useEffect(() => {
    // Fetch the API data with token in headers
    fetch('https://itesseract.com.bd/main/api/v1/get-user-info', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Pass the token as a Bearer token
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserInfo(data); // Store the API data in the state
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array means this useEffect runs only once when the component mounts

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
              src={
                userInfo?.data?.user?.image
                  ? `${apiUrl}/${userInfo?.data?.user?.image}`
                  : profile
              }
              loading='lazy'
              alt='userImage'
              className='w-10 h-10 rounded-full'
            />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? 'w-52 ml-3' : 'w-0'
              } `}
            >
              <div className='leading-4'>
                <h4 className='font-semibold'>
                  {' '}
                  {userInfo?.data?.user?.name
                    ? userInfo?.data?.user?.name?.length > maxLength
                      ? userInfo?.data?.user?.name?.slice(0, maxLength) + '...'
                      : userInfo?.data?.user?.name
                    : 'not found'}
                </h4>
                <span className='text-xs text-gray-600'>
                  {userEmail
                    ? userEmail?.length > maxLength
                      ? userEmail?.slice(0, maxLength) + '...'
                      : userEmail
                    : 'not found'}
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

export function SidebarItem({ icon, text, active, alert, to, handleLogout }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to}>
      <li
        onClick={handleLogout}
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

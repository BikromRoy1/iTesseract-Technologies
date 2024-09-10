import React, { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import liveCourse from '../../../Images/icons/live-course.png';
import profile from '../../../Images/icons/profile.png';
import recordCourse from '../../../Images/icons/record-courses.png';
import logout from '../../../Images/icons/signout.png';
import logo from '../../../Images/main-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const getInfo = JSON.parse(localStorage.getItem('userInfo'));
    setUserEmail(getInfo?.email);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    window.location.reload();
  };

  return (
    <div className='px-4 py-5 bg-white mx-auto sm:max-w-full md:max-w-full lg:max-w-screen md:px-24 lg:px-14 sticky top-0 z-50 header-shadow'>
      <div className='relative flex items-center justify-between'>
        <Link
          to='/'
          aria-label='iTesser-act'
          title=' iTesser-act'
          className='inline-flex items-center'
        >
          <img className='w-48' src={logo} alt='logo' />
        </Link>
        <ul className='flex items-center hidden space-x-8 lg:flex'>
          <li>
            <Link
              to='/'
              aria-label='Home'
              title='হোম'
              className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#1bb57b]'
            >
              হোম
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              aria-label='About'
              title='আমাদের সম্পর্কে'
              className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#1bb57b]'
            >
              আমাদের সম্পর্কে{' '}
            </Link>
          </li>
          <li>
            <Link
              to='/product'
              aria-label='Product'
              title='প্রোডাক্টস'
              className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#1bb57b]'
            >
              <p> প্রোডাক্টস</p>
            </Link>
          </li>
          <li>
            <Link
              to='/team'
              aria-label='Team'
              title='টিম'
              className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#1bb57b]'
            >
              টিম
            </Link>
          </li>
          <li>
            <Link
              to='/recorded'
              aria-label='Courses '
              title='কোর্স সমূহ '
              className='font-medium dropdown dropdown-hover tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
            >
              <span className='flex items-center gap-1'>
                {' '}
                কোর্স সমূহ <FaAngleDown></FaAngleDown>
              </span>
              <ul
                tabIndex={0}
                className='dropdown-content menu p-2 shadow bg-base-300 rounded-md w-52'
              >
                <li>
                  <Link
                    title='রেকর্ডেড কোর্স'
                    className='hover:text-[#1bb57b]'
                    to='/recorded'
                  >
                    <img
                      width={24}
                      height={24}
                      src={recordCourse}
                      alt='liveCourse'
                      loading='lazy'
                    />
                    রেকর্ডেড কোর্স{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    title=' লাইভ কোর্স'
                    className='hover:text-[#1bb57b]'
                    to='/live'
                  >
                    <img
                      width={24}
                      height={24}
                      src={liveCourse}
                      alt='liveCourse'
                      loading='lazy'
                    />
                    লাইভ কোর্স
                  </Link>
                </li>
              </ul>
            </Link>
          </li>
          <li>
            <Link
              to='/blogs'
              aria-label='Blog '
              title=' ব্লগ '
              className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#1bb57b]'
            >
              ব্লগ
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              aria-label='Contact '
              title='যোগাযোগ'
              className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#1bb57b]'
            >
              যোগাযোগ
            </Link>
          </li>
          {userEmail ? (
            <li>
              <div className='dropdown dropdown-end'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div className='w-8 rounded-full'>
                    <img
                      alt='Tailwind CSS Navbar component'
                      src='https://picsum.photos/200'
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44'
                >
                  <li>
                    <Link to='/dashboard' className=''>
                      <img
                        width={22}
                        height={22}
                        src={profile}
                        alt='profile-icons'
                        loading='lazy'
                      />
                      প্রোফাইল
                    </Link>
                  </li>
                  <li onClick={handleLogout}>
                    <Link>
                      {' '}
                      <img
                        width={22}
                        height={22}
                        src={logout}
                        alt='logout'
                        loading='lazy'
                      />
                      লগ-আউট
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <Link
              to='/login'
              aria-label='login '
              title='login'
              className=' bg-[#1bb57b] px-4 py-1 rounded-md font-medium tracking-wide text-white transition-colors whitespace-nowrap duration-200'
            >
              লগ-ইন
            </Link>
          )}
        </ul>
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link
                      to='/'
                      aria-label=' iTesser-act'
                      title=' iTesser-act'
                      className='inline-flex items-center'
                    >
                      <img className='w-48' src={logo} alt='logo' />
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4 text-center'>
                    <li>
                      <Link
                        to='/about'
                        aria-label='About'
                        title=' আমাদের সম্পর্কে'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#1bb57b]'
                      >
                        আমাদের সম্পর্কে
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/product'
                        aria-label='Product'
                        title='প্রোডাক্টস'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#1bb57b]'
                      >
                        <p> প্রোডাক্টস</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/team'
                        aria-label='Team'
                        title='টিম'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#1bb57b]'
                      >
                        টিম
                      </Link>
                    </li>
                    <li>
                      <Link
                        aria-label='Courses '
                        title='কোর্স সমূহ '
                        className='font-medium dropdown dropdown-bottom tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        <span className='flex items-center gap-1'>
                          {' '}
                          কোর্স সমূহ <FaAngleDown></FaAngleDown>
                        </span>
                        <ul
                          tabIndex={0}
                          className='dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52'
                        >
                          <li>
                            <Link
                              title='রেকর্ডেড কোর্স'
                              className='hover:text-[#1bb57b]'
                              to='/recorded'
                            >
                              <img
                                width={24}
                                height={24}
                                src={recordCourse}
                                alt='liveCourse'
                                loading='lazy'
                              />
                              রেকর্ডেড কোর্স{' '}
                            </Link>
                          </li>
                          <li>
                            <Link
                              title='লাইভ কোর্স'
                              className='hover:text-[#1bb57b]'
                              to='/live'
                            >
                              <img
                                width={24}
                                height={24}
                                src={liveCourse}
                                alt='liveCourse'
                                loading='lazy'
                              />
                              লাইভ কোর্স
                            </Link>
                          </li>
                        </ul>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blogs'
                        aria-label='Blog '
                        title=' ব্লগ '
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#1bb57b]'
                      >
                        ব্লগ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/contact'
                        aria-label='contact'
                        title='যোগাযোগ'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#1bb57b]'
                      >
                        যোগাযোগ
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

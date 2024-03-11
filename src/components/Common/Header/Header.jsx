import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { FcDecision, FcGraduationCap } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import logo from '../../../Images/main-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='px-4 py-5 bg-white mx-auto sm:max-w-full md:max-w-full lg:max-w-screen md:px-24 lg:px-14 sticky top-0 z-50'>
      <div className='relative flex items-center justify-between'>
        <Link
          to='/'
          aria-label=' iTesser-act'
          title=' iTesser-act'
          className='inline-flex items-center'
        >
          <img className='w-48' src={logo} alt='logo' />
        </Link>
        <ul className='flex items-center hidden space-x-8 lg:flex'>
          <li>
            <Link
              to='/home'
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
              to='/school'
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
                className='dropdown-content menu p-2 shadow bg-base-300 rounded-sm w-52'
              >
                <li>
                  <Link
                    title='মাধ্যমিক'
                    className='hover:text-[#1bb57b]'
                    to='/school'
                  >
                    {' '}
                    <svg
                      viewBox='-102.4 -102.4 1228.80 1228.80'
                      className='icon w-5'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='#1bb57b'
                      stroke='#1bb57b'
                      strokeWidth='0.01024'
                      transform='matrix(1, 0, 0, 1, 0, 0)'
                    >
                      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                      <g
                        id='SVGRepo_tracerCarrier'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        stroke='#CCCCCC'
                        strokeWidth='2.048'
                      ></g>
                      <g id='SVGRepo_iconCarrier'>
                        <path
                          d='M176.910193 234.97977l670.210234 0 0 758.14994-670.210234 0 0-758.14994Z'
                          fill='#FFFFFF'
                        ></path>
                        <path
                          d='M865.195794 707.782626h55.850852v226.043633H865.195794zM93.438554 707.782626h55.850853v226.043633H93.438554z'
                          fill='#eae31f'
                        ></path>
                        <path
                          d='M271.958189 625.529552h480.723523v367.19397H271.958189zM234.791986 129.777073h546.729075v264.022213H234.791986z'
                          fill='#22c353'
                        ></path>
                        <path
                          d='M460.226337 316.826656h107.842919v186.643396h-107.842919z'
                          fill='#eae31f'
                        ></path>
                        <path
                          d='M906.220784 678.740182h-28.636256v-406.18802a60.928203 60.928203 0 0 0-60.928203-60.928203V178.925823a81.237604 81.237604 0 0 0-81.237604-81.237604h-81.237604a101.547005 101.547005 0 0 0-101.547005-97.688219h-81.237604a101.547005 101.547005 0 0 0-101.547006 97.688219h-81.237604a81.237604 81.237604 0 0 0-81.237604 81.237604v32.698136a60.928203 60.928203 0 0 0-60.928203 60.928203v406.18802H117.606742a40.618802 40.618802 0 0 0-40.618802 40.618803v203.09401a40.618802 40.618802 0 0 0 40.618802 40.618802h28.839349a60.928203 60.928203 0 0 0 60.928203 60.928203h609.282031a60.928203 60.928203 0 0 0 60.928203-60.928203h28.636256a40.618802 40.618802 0 0 0 40.618802-40.618802v-203.09401a40.618802 40.618802 0 0 0-40.618802-40.618803z m-759.774693 243.712813H117.606742v-203.09401h28.839349v203.09401z m324.950417-881.631099h81.237604a60.928203 60.928203 0 0 1 60.928203 57.069417h-203.094011a60.928203 60.928203 0 0 1 60.928204-57.272511z m-223.403412 138.307021a40.618802 40.618802 0 0 1 40.618802-40.618802h446.806823a40.618802 40.618802 0 0 1 40.618802 40.618802v162.475208a40.618802 40.618802 0 0 1-40.618802 40.618802h-142.165807v-55.850852a37.775486 37.775486 0 0 0-37.775486-37.775486h-86.924237a37.775486 37.775486 0 0 0-37.775486 37.775486v55.647758h-142.165807a40.618802 40.618802 0 0 1-40.618802-40.618802v-162.475208z m304.641016 150.289568v162.475208h-81.237604v-162.475208h81.237604z m182.784609 654.165807h-446.806823v-324.950417a20.309401 20.309401 0 0 1 20.309401-20.309401h406.188021a20.309401 20.309401 0 0 1 20.309401 20.309401v324.950417z m101.547005-304.641016v284.331615a20.309401 20.309401 0 0 1-20.309401 20.309401h-40.618802v-324.950417a60.928203 60.928203 0 0 0-60.928203-60.928203h-406.188021a60.928203 60.928203 0 0 0-60.928203 60.928203v324.950417h-40.618802a20.309401 20.309401 0 0 1-20.309401-20.309401v-690.519635a20.309401 20.309401 0 0 1 20.309401-20.309401v89.15827a81.237604 81.237604 0 0 0 81.237604 81.237604h142.165807v71.89528a37.775486 37.775486 0 0 0 37.775486 37.775486h86.924237a37.775486 37.775486 0 0 0 37.775486-37.775486v-71.89528h142.165807a81.237604 81.237604 0 0 0 81.237604-81.237604v-89.15827a20.309401 20.309401 0 0 1 20.309401 20.309401v406.18802z m69.255058 243.712813h-28.636256v-203.09401h28.636256v203.09401z'
                          fill='#3F4651'
                        ></path>
                      </g>
                    </svg>{' '}
                    মাধ্যমিক{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    title='বিশ্ববিদ্যালয়'
                    className='hover:text-[#1bb57b]'
                    to='/university'
                  >
                    {' '}
                    <FcGraduationCap></FcGraduationCap> বিশ্ববিদ্যালয়
                  </Link>
                </li>
                <li>
                  <Link
                    title='সার্টিফিকেশন'
                    className='hover:text-[#1bb57b]'
                    to='/certification'
                  >
                    <FcDecision></FcDecision> সার্টিফিকেশন
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
                    src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44'
              >
                <li>
                  <a className='justify-between'>Profile</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </li>
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
                              title='মাধ্যমিক'
                              className='hover:text-[#1bb57b]'
                              to='/school'
                            >
                              {' '}
                              <svg
                                viewBox='-102.4 -102.4 1228.80 1228.80'
                                className='icon w-5'
                                version='1.1'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='#1bb57b'
                                stroke='#1bb57b'
                                strokeWidth='0.01024'
                                transform='matrix(1, 0, 0, 1, 0, 0)'
                              >
                                <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                                <g
                                  id='SVGRepo_tracerCarrier'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  stroke='#CCCCCC'
                                  strokeWidth='2.048'
                                ></g>
                                <g id='SVGRepo_iconCarrier'>
                                  <path
                                    d='M176.910193 234.97977l670.210234 0 0 758.14994-670.210234 0 0-758.14994Z'
                                    fill='#FFFFFF'
                                  ></path>
                                  <path
                                    d='M865.195794 707.782626h55.850852v226.043633H865.195794zM93.438554 707.782626h55.850853v226.043633H93.438554z'
                                    fill='#eae31f'
                                  ></path>
                                  <path
                                    d='M271.958189 625.529552h480.723523v367.19397H271.958189zM234.791986 129.777073h546.729075v264.022213H234.791986z'
                                    fill='#22c353'
                                  ></path>
                                  <path
                                    d='M460.226337 316.826656h107.842919v186.643396h-107.842919z'
                                    fill='#eae31f'
                                  ></path>
                                  <path
                                    d='M906.220784 678.740182h-28.636256v-406.18802a60.928203 60.928203 0 0 0-60.928203-60.928203V178.925823a81.237604 81.237604 0 0 0-81.237604-81.237604h-81.237604a101.547005 101.547005 0 0 0-101.547005-97.688219h-81.237604a101.547005 101.547005 0 0 0-101.547006 97.688219h-81.237604a81.237604 81.237604 0 0 0-81.237604 81.237604v32.698136a60.928203 60.928203 0 0 0-60.928203 60.928203v406.18802H117.606742a40.618802 40.618802 0 0 0-40.618802 40.618803v203.09401a40.618802 40.618802 0 0 0 40.618802 40.618802h28.839349a60.928203 60.928203 0 0 0 60.928203 60.928203h609.282031a60.928203 60.928203 0 0 0 60.928203-60.928203h28.636256a40.618802 40.618802 0 0 0 40.618802-40.618802v-203.09401a40.618802 40.618802 0 0 0-40.618802-40.618803z m-759.774693 243.712813H117.606742v-203.09401h28.839349v203.09401z m324.950417-881.631099h81.237604a60.928203 60.928203 0 0 1 60.928203 57.069417h-203.094011a60.928203 60.928203 0 0 1 60.928204-57.272511z m-223.403412 138.307021a40.618802 40.618802 0 0 1 40.618802-40.618802h446.806823a40.618802 40.618802 0 0 1 40.618802 40.618802v162.475208a40.618802 40.618802 0 0 1-40.618802 40.618802h-142.165807v-55.850852a37.775486 37.775486 0 0 0-37.775486-37.775486h-86.924237a37.775486 37.775486 0 0 0-37.775486 37.775486v55.647758h-142.165807a40.618802 40.618802 0 0 1-40.618802-40.618802v-162.475208z m304.641016 150.289568v162.475208h-81.237604v-162.475208h81.237604z m182.784609 654.165807h-446.806823v-324.950417a20.309401 20.309401 0 0 1 20.309401-20.309401h406.188021a20.309401 20.309401 0 0 1 20.309401 20.309401v324.950417z m101.547005-304.641016v284.331615a20.309401 20.309401 0 0 1-20.309401 20.309401h-40.618802v-324.950417a60.928203 60.928203 0 0 0-60.928203-60.928203h-406.188021a60.928203 60.928203 0 0 0-60.928203 60.928203v324.950417h-40.618802a20.309401 20.309401 0 0 1-20.309401-20.309401v-690.519635a20.309401 20.309401 0 0 1 20.309401-20.309401v89.15827a81.237604 81.237604 0 0 0 81.237604 81.237604h142.165807v71.89528a37.775486 37.775486 0 0 0 37.775486 37.775486h86.924237a37.775486 37.775486 0 0 0 37.775486-37.775486v-71.89528h142.165807a81.237604 81.237604 0 0 0 81.237604-81.237604v-89.15827a20.309401 20.309401 0 0 1 20.309401 20.309401v406.18802z m69.255058 243.712813h-28.636256v-203.09401h28.636256v203.09401z'
                                    fill='#3F4651'
                                  ></path>
                                </g>
                              </svg>{' '}
                              মাধ্যমিক{' '}
                            </Link>
                          </li>
                          <li>
                            <Link
                              title='বিশ্ববিদ্যালয়'
                              className='hover:text-[#1bb57b]'
                              to='/university'
                            >
                              {' '}
                              <FcGraduationCap></FcGraduationCap> বিশ্ববিদ্যালয়
                            </Link>
                          </li>
                          <li>
                            <Link
                              title='সার্টিফিকেশন'
                              className='hover:text-[#1bb57b]'
                              to='/certification'
                            >
                              {' '}
                              <FcDecision></FcDecision> সার্টিফিকেশন
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

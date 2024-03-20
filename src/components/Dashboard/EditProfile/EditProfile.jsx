import React from 'react';
import './editProfile.css';

const EditProfile = () => {
  let name = 'Bikrom Roy';
  let fatherName = 'Bipul Roy';
  let motherName = 'Sebika Roy';
  let email = 'email@example.com';
  let number = '01795-188538';
  let Gender = 'Male';
  let BirthDay = '14 March, 2002';
  let location = 'Bagerhat-বাগেরহাট';
  let school = 'ATKHALI SECONDARY SCHOOL';
  let Class = 'Higher Secondary Certificate';
  let Religion = 'Hindu';
  let address = 'Dhaka, Bangladesh';
  return (
    <section className='dashboard-section'>
      <div className='dashboard-box mt-[1.5rem] '>
        <div className='box-header flex justify-between items-center'>
          <div className='box-title relative '>প্রোফাইল আপডেট</div>
        </div>
        <div className='p-[1.25rem]'>
          <form className='grid grid-cols-1 gap-x-4 lg:grid-cols-3 lg:gap-x-6'>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  নাম
                  <span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  placeholder='আপনার পুরো নাম লিখুন'
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  ফোন নাম্বার
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  readOnly
                  value={number}
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  বাবার নাম
                  <span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  placeholder='তোমার বাবার নাম লিখ'
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  মায়ের নাম
                  <span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  placeholder='তোমার মায়ের নাম লিখ'
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  ইমেইল
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  value={email}
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  জন্ম তারিখ
                  <span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='date'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  placeholder='আপনার জন্ম তারিখ নির্বাচন করুন'
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  জেলা
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  placeholder='আপনার জেলার নাম লিখুন'
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  ক্লাস
                  <span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  placeholder='আপনার ক্লাস লিখুন'
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  আপনার স্কুল
                  <span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  placeholder='আপনার স্কুল নাম লিখুন'
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  ধর্ম
                  <span className='text-[#f76a78]'>*</span>
                </label>
                <select
                  name='department'
                  id='department'
                  class='form-select w-full rounded-md border-2 border-[#1BB57B] p-[8px] text-[15px] focus:outline-none'
                >
                  <option value=''>তোমার ধর্ম বাছাই করো</option>
                  <option value='Muslim'>ইসলাম ধর্মাবলম্বী</option>
                  <option value='Hindu'>হিন্দু ধর্মাবলম্বী</option>
                  <option value='Cristian'>ক্রিস্টিয়ান ধর্মাবলম্বী</option>
                  <option value='Buddhist'>বৌদ্ধ ধর্মাবলম্বী</option>
                  <option value='other'>অন্যান্য</option>
                </select>
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  বর্তমান ঠিকানা
                  <span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  placeholder='তোমার বর্তমান ঠিকানা লিখ'
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  লিঙ্গ
                  <span className='text-[#f76a78]'>*</span>
                </label>
                <div class='flex items-center space-x-6'>
                  <div class='flex items-center'>
                    <input
                      type='radio'
                      name='radio1'
                      id='radioButton1'
                      class='h-5 w-5'
                    />
                    <label
                      for='radioButton1'
                      class='pl-3 text-base font-medium text-[#07074D]'
                    >
                      Male
                    </label>
                  </div>
                  <div class='flex items-center'>
                    <input
                      type='radio'
                      name='radio1'
                      id='radioButton2'
                      class='h-5 w-5'
                    />
                    <label
                      for='radioButton2'
                      class='pl-3 text-base font-medium text-[#07074D]'
                    >
                      Female
                    </label>
                  </div>
                  <div class='flex items-center'>
                    <input
                      type='radio'
                      name='radio1'
                      id='radioButton3'
                      class='h-5 w-5'
                    />
                    <label
                      for='radioButton3'
                      class='pl-3 text-base font-medium text-[#07074D]'
                    >
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className='flex justify-center mt-3 mb-1'>
            <button className='bg-[#1BB57B] text-white font-medium px-4 py-1 rounded-md'>
              আপডেট করুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;

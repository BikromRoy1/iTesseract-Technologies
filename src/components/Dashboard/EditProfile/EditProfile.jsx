import React, { useState } from 'react';
import userphotos from '../../../Images/team/abdulhamid.png';
import './editProfile.css';

const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userName, setUserName] = useState(''); // Renamed from 'name' to 'userName'
  const [fathersName, setFathersName] = useState('');
  const [mothersName, setMothersName] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [religion, setReligion] = useState('');
  const [district, setDistrict] = useState('');
  const [address, setAddress] = useState('');
  const [classStudent, setClassStudent] = useState('');
  const [institute, setInstitute] = useState('');
  const [image, setImage] = useState(null); // To handle file upload

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Update the state with the selected image file
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const getInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = getInfo?.token;

    // Create a form data object with the necessary keys
    const formData = {
      name: name, // Example value from state
      fathers_name: fathersName, // Example value from state
      mothers_name: mothersName, // Example value from state
      gender: gender, // Example value from state
      date_of_birth: birthDate, // Example value from state
      religion: religion, // Example value from state
      district: district, // Example value from state
      address: address, // Example value from state
      class: classStudent, // Example value from state
      institute: institute, // Example value from state
      image: image, // Example value from file input or state
    };

    try {
      const response = await fetch(
        'https://itesseract.com.bd/main/api/v1/profile-update',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData), // Send formData as JSON
        }
      );

      // Check if the response is JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const data = await response.json();

        if (data.success) {
          alert('Profile updated successfully');
        } else {
          alert('Profile update failed: ' + data.message);
        }
      } else {
        // If the response is not JSON, throw an error
        const errorMessage = await response.text(); // Capture the HTML or error response as text
        console.error('Error:', errorMessage);
        alert(
          'An unexpected error occurred. Please check the server response.'
        );
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while updating the profile.');
    }
  };

  let email = 'email@example.com';
  let number = '01795-188538';

  console.log(formData);

  return (
    <section className='dashboard-section'>
      <div className='dashboard-box mt-[1.5rem] '>
        <div className='box-header'>
          <div className='box-title relative '>Change Profile</div>
          <p className='text-[#a1a5b7]'>
            Change your profile picture from here
          </p>
        </div>
        <div className='pt-3 pb-4 pl-6'>
          <div className='flex items-center gap-4'>
            <div className='w-[120px] h-[120px] rounded-full'>
              {selectedImage ? (
                <img
                  className='w-full h-full rounded-full object-cover'
                  src={selectedImage}
                  alt='user'
                />
              ) : (
                <img
                  className='w-full h-full rounded-full object-cover'
                  src={userphotos} // Your default image URL here
                  alt='user'
                />
              )}
            </div>
            <div>
              <label className='flex cursor-pointer items-center justify-center gap-2 rounded bg-[#1bb57b] py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90 xsm:px-4'>
                <input
                  type='file'
                  name='cover'
                  id='cover'
                  className='sr-only'
                  onChange={handleImageChange} // Call the event handler on change
                ></input>
                <span>
                  <svg
                    className='fill-current'
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z'
                      fill='white'
                    ></path>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M6.99992 5.83329C6.03342 5.83329 5.24992 6.61679 5.24992 7.58329C5.24992 8.54979 6.03342 9.33329 6.99992 9.33329C7.96642 9.33329 8.74992 8.54979 8.74992 7.58329C8.74992 6.61679 7.96642 5.83329 6.99992 5.83329ZM4.08325 7.58329C4.08325 5.97246 5.38909 4.66663 6.99992 4.66663C8.61075 4.66663 9.91659 5.97246 9.91659 7.58329C9.91659 9.19412 8.61075 10.5 6.99992 10.5C5.38909 10.5 4.08325 9.19412 4.08325 7.58329Z'
                      fill='white'
                    ></path>
                  </svg>
                </span>
                <span>Upload</span>
              </label>
            </div>
          </div>
          <p className='pt-2 text-base font-normal text-gray-400'>
            Allowed JPG, GIF or PNG. Max size of 800K
          </p>
        </div>
      </div>
      <div className='dashboard-box mt-[1.5rem] '>
        <div className='box-header flex justify-between items-center'>
          <div className='box-title relative '>প্রোফাইল আপডেট</div>
        </div>
        <div className='p-[1.25rem]'>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 gap-x-4 lg:grid-cols-3 lg:gap-x-6'>
              {/* Name Field */}
              <div className='mb-[16px]'>
                <label
                  className='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  htmlFor='name'
                >
                  নাম<span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='name'
                  className='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  placeholder='আপনার পুরো নাম লিখুন'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Phone Number Field (ReadOnly) */}
              <div className='mb-[16px]'>
                <label
                  className='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  htmlFor='phoneNumber'
                >
                  ফোন নাম্বার
                </label>
                <input
                  type='text'
                  name='phoneNumber'
                  className='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  value={formData.phoneNumber}
                  readOnly
                />
              </div>
              {/* Father's Name Field */}
              <div className='mb-[16px]'>
                <label
                  className='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  htmlFor='fatherName'
                >
                  বাবার নাম<span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='fatherName'
                  className='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  placeholder='তোমার বাবার নাম লিখ'
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Mother's Name Field */}
              <div className='mb-[16px]'>
                <label
                  className='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  htmlFor='motherName'
                >
                  মায়ের নাম<span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='motherName'
                  className='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  placeholder='তোমার মায়ের নাম লিখ'
                  value={formData.motherName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email Field */}
              <div className='mb-[16px]'>
                <label
                  className='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  htmlFor='email'
                >
                  ইমেইল
                </label>
                <input
                  type='text'
                  name='email'
                  className='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  value={formData.email}
                  onChange={handleInputChange} // Add onChange to make it editable
                />
              </div>
              {/* Birth Date Field */}
              <div className='mb-[16px]'>
                <label
                  className='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  htmlFor='birthDate'
                >
                  জন্ম তারিখ<span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='date'
                  name='birthDate'
                  className='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* District Field */}
              <div className='mb-[16px]'>
                <label
                  className='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  htmlFor='district'
                >
                  জেলা
                </label>
                <input
                  type='text'
                  name='district'
                  className='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  placeholder='আপনার জেলার নাম লিখুন'
                  value={formData.district}
                  onChange={handleInputChange}
                />
              </div>
              {/* Class Field */}
              <div className='mb-[16px]'>
                <label
                  className='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  htmlFor='classStudent'
                >
                  ক্লাস<span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='classStudent'
                  className='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  placeholder='আপনার ক্লাস লিখুন'
                  value={formData.class}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* School Field */}
              <div className='mb-[16px]'>
                <label
                  className='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  htmlFor='school'
                >
                  আপনার স্কুল<span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='school'
                  className='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  placeholder='আপনার স্কুল নাম লিখুন'
                  value={formData.school}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Religion Field */}
              <div className='mb-[16px]'>
                <label
                  className='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  htmlFor='religion'
                >
                  ধর্ম<span className='text-[#f76a78]'>*</span>
                </label>
                <select
                  name='religion'
                  className='form-select w-full rounded-md border-2 border-[#1BB57B] p-[8px] text-[15px] focus:outline-none'
                  value={formData.religion}
                  onChange={handleInputChange}
                  required
                >
                  <option value=''>তোমার ধর্ম বাছাই করো</option>
                  <option value='Muslim'>ইসলাম ধর্মাবলম্বী</option>
                  <option value='Hindu'>হিন্দু ধর্মাবলম্বী</option>
                  <option value='Cristian'>ক্রিস্টিয়ান ধর্মাবলম্বী</option>
                  <option value='Buddhist'>বৌদ্ধ ধর্মাবলম্বী</option>
                  <option value='other'>অন্যান্য</option>
                </select>
              </div>
              {/* Current Address Field */}
              <div className='mb-[16px]'>
                <label
                  className='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  htmlFor='currentAddress'
                >
                  বর্তমান ঠিকানা<span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='currentAddress'
                  className='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  placeholder='আপনার বর্তমান ঠিকানা লিখুন'
                  value={formData.currentAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Gender Field */}
              <div className='mb-[16px]'>
                <label
                  className='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  htmlFor='gender'
                >
                  লিঙ্গ<span className='text-[#f76a78]'>*</span>
                </label>
                <select
                  name='gender'
                  className='form-select w-full rounded-md border-2 border-[#1BB57B] p-[8px] text-[15px] focus:outline-none'
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value=''>লিঙ্গ বাছাই করুন</option>
                  <option value='Male'>পুরুষ</option>
                  <option value='Female'>মহিলা</option>
                  <option value='Other'>অন্যান্য</option>
                </select>
              </div>
            </div>
            <div className='flex justify-center mt-3 mb-1'>
              <button
                type='submit'
                className='bg-[#1BB57B] text-white font-medium px-4 py-1 rounded-md'
              >
                আপডেট করুন
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;

import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react';
import animation from '../../../Images/content.json';
import DBLoader from '../../DBLoader/DBLoader';

const PaymentHistory = () => {
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve token from localStorage
    const getInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = getInfo?.token; // Assuming the token is stored inside `userInfo`

    // Fetch the API data with token in headers
    fetch('https://itesseract.com.bd/main/api/v1/payments', {
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
        setPayment(data); // Store the API data in the state
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this useEffect runs only once when the component mounts

  if (loading) {
    return <DBLoader />;
  }

  if (error) {
    return (
      <p className='flex items-center justify-center h-[80vh] w-full capitalize font-medium text-base'>
        Error: {error.message}
      </p>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('bn-BD', options);
  };

  return (
    <section className='dashboard-section'>
      <div className='dashboard-box'>
        <div className='box-header flex justify-between items-center'>
          <div className='box-title relative '>
            পেমেন্ট <span className='text-green-400'>&&</span> আপনার করা লেনদেন
            দেখুন
          </div>
        </div>
        <div className='p-[1.25rem]'>
          {payment?.data?.length > 0 ? (
            <div className='overflow-x-auto'>
              <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
                <thead className='ltr:text-left rtl:text-right text-justify'>
                  <tr>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                      কোর্সের নাম
                    </th>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                      টাকার পরিমাণ
                    </th>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                      পেমেন্ট তারিখ
                    </th>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                      স্ট্যাটাস
                    </th>
                    <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                      লেনদেন আইডি
                    </th>
                  </tr>
                </thead>

                <tbody className='divide-y divide-gray-200'>
                  {payment?.data?.map((pay, index) => (
                    <tr key={pay.id} className='odd:bg-gray-50'>
                      <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                        {pay?.order?.course?.course_name}
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                        ৳ {pay?.amount}
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                        {pay?.updated_at
                          ? formatDate(pay?.updated_at)
                          : 'No Date'}
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                        <span
                          className={`uppercase font-sans font-semibold py-1 px-2 text-xs rounded-md ${
                            pay?.status === 'Pending'
                              ? 'bg-amber-500/20 text-amber-900'
                              : pay?.status === 'Success'
                              ? 'bg-green-500/20 text-green-900'
                              : 'bg-red-500/20 text-red-900'
                          }`}
                        >
                          {pay?.status}
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                        {pay?.transaction_id || 'Not Available'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className='flex items-center justify-center w-full h-[80vh]'>
              <div className='text-center'>
                <h2 className='mb-5 font-extrabold text-9xl dark:text-gray-600'>
                  <span className='logo-color'>
                    <Lottie animationData={animation}></Lottie>
                  </span>
                </h2>
                <p className='text-xl font-semibold md:text-3xl'>
                  😥দুঃখিত, এখন তোমার কোনো পেমেন্ট নাই
                </p>
                <p className='mt-4 mb-8 dark:text-gray-400'>
                  যত তাড়াতাড়ি পারো একটা কোর্স কিনে ফেলো , আর হয়ে যায় আয়রন ম্যান
                  😜।
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaymentHistory;

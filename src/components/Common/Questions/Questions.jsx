
import React from 'react';
import faq from '../../../Images/faq.png';

const Questions = () => {
  return (
    <div>
      <section className='bg-white '>
        <div className='container px-6 py-10 mx-auto'>
          <div className='mt-8 lg:-mx-6 lg:flex lg:items-center'>
            <div className='w-full lg:mx-6 lg:w-1/2'>
              <a
                href='#'
                className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
              >
                আপনার সাধারণ প্রশ্নের উত্তর
              </a>

              <p className='mt-3 text-base  dark:text-gray-400 md:text-base'>
                আমাদের শেখার উপকরণের মধ্যে রয়েছে বিস্তৃত শিক্ষামূলক, পেশাদার
                এবং দক্ষতা-ভিত্তিক কোর্স। আমরা সমস্ত স্কুল এবং কলেজ গ্রেড স্তর,
                সেইসাথে বিশ্ববিদ্যালয়ের কোর্স কভার করি
              </p>
              <img
                loading='lazy'
                className='object-contain w-full lg:mx-6 lg:w-1/2 h-72 lg:h-60'
                src={faq}
                alt='faq'
              />
            </div>
            <div className='mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 '>
              <div class='space-y-4'>
                <details
                  class='group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden'
                  open
                >
                  <summary class='flex items-center justify-between cursor-pointer'>
                    <h2 class='font-medium text-gray-900'>
                      আইটেসারেক্ট টেকনোলিজস কাদের জন্য সেরা?
                    </h2>

                    <span class='relative ml-1.5 h-5 w-5 flex-shrink-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </span>
                  </summary>

                  <p class='mt-4 leading-relaxed text-gray-500 text-justify'>
                    সবার জন্য উপযুক্ত! আপনি সবেমাত্র আপনার প্রজেক্ট-মেকিং
                    অ্যাডভেঞ্চার শুরু করেছেন, এটির মাঝে আছেন, বা একজন পাকা শখ,
                    আপনি যখন আইটেসারেক্ট টেকনোলিজস পরিদর্শন করবেন, আপনি খালি
                    হাতে যাবেন না! যে সমস্ত ব্যক্তিরা সবেমাত্র স্কুল বা কলেজের
                    মাধ্যমে তাদের যাত্রা শুরু করেছেন বা ইতিমধ্যে অর্ধেক পথ
                    অতিক্রম করেছেন, তাদের জন্য স্টার্টার কিট, IoT, AI, রোবোটিক্স
                    এবং প্রোগ্রামিং হল আদর্শ DIY STEM রোবট নির্মাণ কিট যাতে
                    DIY-এর জগতে একটি মসৃণ এবং আনন্দদায়ক প্রবেশ নিশ্চিত করা
                    যায়। .
                  </p>
                </details>

                <details class='group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden'>
                  <summary class='flex items-center justify-between cursor-pointer'>
                    <h2 class='font-medium text-gray-900'>
                      সর্বনিম্ন বয়স এবং পূর্বশর্ত কি?
                    </h2>

                    <span class='relative ml-1.5 h-5 w-5 flex-shrink-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='absolute inset-0 opacity-100 group-open:opacity-0'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='absolute inset-0 opacity-0 group-open:opacity-100'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </span>
                  </summary>

                  <p class='mt-4 leading-relaxed text-gray-500 text-justify'>
                    আমাদের রোবোটিক্স সরঞ্জামগুলির সাথে প্রোগ্রামিং করার জন্য
                    ন্যূনতম বয়স সুপারিশ পাঁচ বছর। যাইহোক, আপনি যদি লিটল শেলডন
                    হন তবে আপনি হাঁটা শুরু করার পরে যে কোনও মুহুর্তে এটি ব্যবহার
                    করতে পারেন। শেখা এবং অন্বেষণ শুরু করার জন্য, আপনার যা দরকার
                    তা হল মৌলিক কম্পিউটার ক্রিয়াকলাপের একটি কার্যকরী জ্ঞান;
                    অর্থাৎ, আপনি যদি গেম খেলতে পারেন বা কম্পিউটার ব্যবহার করতে
                    পারেন, আপনি আমাদের কাছ থেকে শিখতে পারেন।
                  </p>
                </details>
                <details class='group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden'>
                  <summary class='flex items-center justify-between cursor-pointer'>
                    <h2 class='font-medium text-gray-900'>
                      কিভাবে আইটেসারেক্ট টেকনোলিজস রোবোটিক্স ল্যাবে ভর্তির জন্য
                      আবেদন করবেন এবং শেখা শুরু করবেন?
                    </h2>

                    <span class='relative ml-1.5 h-5 w-5 flex-shrink-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='absolute inset-0 opacity-100 group-open:opacity-0'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        class='absolute inset-0 opacity-0 group-open:opacity-100'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </span>
                  </summary>

                  <p class='mt-4 leading-relaxed text-gray-500 text-justify'>
                    আপনাকে যা করতে হবে তা হল আমাদের একাডেমিক কাউন্সেলর @
                    +8801745610020 এই ফোন নম্বরে যোগাযোগ করুন অথবা আমাদের
                    রোবোটিক্স ল্যাব @ iTesseract Technologies Ltd. 151/7(5th
                    Floor), Good Luck Center, Green Road, Dhaka 1205-এ আসুন
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questions;

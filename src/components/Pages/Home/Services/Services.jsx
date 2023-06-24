import React from 'react';
import Title from '../../../Common/Title/Title';
import Features from '../Features/Features';
import './Services.css';
import 'boxicons';

const Services = () => {
  return (
    <section className='background-color'>
      <div className='container px-6 py-8 mx-auto'>
        <Title
          title='এক নজরে'
          text=' আইটেসারেক্টের সেবা'
          details='প্রতিনিয়ত রিচার্সের মাধ্যমে শিশুদের থেকে শুরু করে বিশ্ববিদ্যালয় পর্যন্ত সব শিক্ষায় আমাদের আধুনিক সিলেবাস, সার্টিফিকেশ্ন ও এডুকেশন সিস্টেমে পরিবর্তন আনতে যাচ্ছি
'
        ></Title>

        <div className='grid grid-cols-1 gap-8 mt-7 xl:mt-12 xl:gap-7 lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-4'>
          <div className='icon-box iconbox-yellow'>
            <div className='icon'>
              <svg
                width='100'
                height='100'
                viewBox='0 0 600 600'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke='none'
                  strokeWidth='0'
                  fill='#f5f5f5'
                  d='M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174'
                ></path>
              </svg>
              {/* <i class='bx bxl-dribbble'></i> */}
              <img
                loading='lazy'
                src='https://i.ibb.co/NNVjz4x/presentation.png'
                alt='training'
              />
            </div>
            <h4>
              <a href=''>প্রশিক্ষণ</a>
            </h4>
            <p>
              ৫ম থেকে শুরু করে মাধ্যমিক ও উচ্চ মধ্যমিক এবং বিশ্ববিদ্যালয়ের
              শিক্ষার্থীদের জন্য আমাদের নিজস্ব রোবটিক্স টুলস দিয়ে আইটি,
              প্রোগ্রামিং, ডাটা সায়েন্স, ইন্টারনেট অব থিংস ( আওটি) এর প্রশিক্ষণ
            </p>
          </div>

          <div className='icon-box iconbox-pink'>
            <div className='icon'>
              <svg
                width='100'
                height='100'
                viewBox='0 0 600 600'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke='none'
                  strokeWidth='0'
                  fill='#f5f5f5'
                  d='M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174'
                ></path>
              </svg>
              <img
                loading='lazy'
                src='https://i.ibb.co/1qXCT0T/certificate.png'
                alt='Certification'
              />
            </div>
            <h4>
              <a href=''>সার্টিফিকেশন</a>
            </h4>
            <p>
              ৪র্থ শিল্প বিপ্লবের জন্য স্টেম বেইজড প্রশিক্ষণ এবং প্রশিক্ষণ শেষে
              কোয়ালিটি বেইজড স্বীকৃতি পত্র বা সার্টিফিকেট প্রদান করা হয়।
            </p>
          </div>

          <div className='icon-box iconbox-red'>
            <div className='icon'>
              <svg
                width='100'
                height='100'
                viewBox='0 0 600 600'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke='none'
                  strokeWidth='0'
                  fill='#f5f5f5'
                  d='M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174'
                ></path>
              </svg>
              <img
                loading='lazy'
                src='https://i.ibb.co/p1RH5jK/lecture-1.png'
                alt='Educational Management'
              />
            </div>
            <h4>
              <a href=''>এডুকেশন ম্যানেজমেন্ট</a>
            </h4>
            <p>
              ব্যক্তি বা গোষ্ঠীতে ইমেলগুলি স্বয়ংক্রিয় এবং ট্র্যাক করুন।
              Skilline এর অন্তর্নির্মিত সিস্টেম আপনার প্রতিষ্ঠানকে সংগঠিত করতে
              সাহায্য করে।
            </p>
          </div>

          <div className='icon-box iconbox-teal'>
            <div className='icon'>
              <svg
                width='100'
                height='100'
                viewBox='0 0 600 600'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke='none'
                  strokeWidth='0'
                  fill='#f5f5f5'
                  d='M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174'
                ></path>
              </svg>
              <img
                loading='lazy'
                src='https://i.ibb.co/g7Fks5G/classroom.png'
                alt='VR Classroom'
              />
            </div>
            <h4>
              <a href=''>রিচার্স এন্ড ডেভেলপমেন্ট</a>
            </h4>
            <p>
              শিক্ষায় ও ইন্ডাস্ট্রিতে গবেষণার মাধ্যমে নতুন নতুন প্রযুক্তি নিয়ে
              আসা এবং সহজ সমাধান বের করা।
            </p>
          </div>
        </div>
        <Features></Features>
      </div>
    </section>
  );
};

export default Services;

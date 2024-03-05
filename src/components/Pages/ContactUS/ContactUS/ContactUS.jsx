import React from 'react';
import contactimg from '../../../../Images/contact.jpg';
import Breadcrumb from '../../../Breadcrumb/Breadcrumb';
import ContactFrom from '../ContactFrom/ContactFrom';
import Contactinfo from '../Contactinfo/Contactinfo';
import GoogleMap from '../GoogleMap/GoogleMap';

const ContactUS = () => {
  return (
    <div>
      <Breadcrumb
        title='যোগাযোগ করেন'
        subTitle='যোগাযোগ'
        slgs='/contact'
        img={contactimg}
      ></Breadcrumb>
      <Contactinfo
        title=' যেকোনো তথ্যের জন্য যোগাযোগ করুন '
        details='যে কোনো প্রয়োজনে যোগাযোগ করতে সরাসরি আমাদের অফিস ভিজিট করতে পারেন। তাছাড়া নম্বরে কল করে জেনে নিতে পারেন যেকোনো তথ্য। এছাড়াও উল্লেখিত মেইলে কিংবা ফেসবুক ম্যাসেঞ্জারেও নক দিতে পারেন। '
        subTitle='যোগাযোগ করুন'
      ></Contactinfo>
      <ContactFrom
        title='আমাদের বিশেষজ্ঞরা আপনাকে সাহায্য করবে'
        subTitle='আপনাদের জিজ্ঞাসা ইনবক্স করুন'
      ></ContactFrom>
      <GoogleMap mapLink='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9074736547177!2d90.3846032143484!3d23.750678694684026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b908bb495dd7%3A0x86ae1964522bfd37!2siZoom%20Limited!5e0!3m2!1sen!2sbd!4v1674923467425!5m2!1sen!2sbd'></GoogleMap>
    </div>
  );
};

export default ContactUS;

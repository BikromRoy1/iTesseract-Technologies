import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import blogsBanner from '../../../../Images/blogs.jpg';
import Breadcrumb from '../../../Breadcrumb/Breadcrumb';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/master/api/v1/blogs'
        );
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const blogsData = blogData.data;


  return (
    <div>
      <Breadcrumb
        title='ব্লগ'
        subTitle='ব্লগ'
        slgs='/blogs'
        img={blogsBanner}
      ></Breadcrumb>
      <section className='pt-10 pb-10 lg:pt-[50px] lg:pb-20 p-6'>
        <div className='container mx-auto'>
          <div className='text-center pb-10'>
            <p className='text-lg text-[#1bb57b] uppercase'>ব্লগ পোস্ট</p>

            <Link
              to='/'
              className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
            >
              সর্বশেষ ব্লগ পোস্ট গুলো দেখুন
            </Link>
          </div>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-4 container'>
            {blogsData?.map((blog) => (
              <BlogCard key={blog.id} blog={blog}></BlogCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;

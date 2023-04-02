import React, { useEffect } from 'react';
import { useState } from 'react';
import blogsBanner from '../../../../Images/blogs.jpg';
import Breadcrumb from '../../../Breadcrumb/Breadcrumb';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('Blog.json')
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(blogData);

  return (
    <div>
      <Breadcrumb
        title='ব্লগ'
        subTitle='ব্লগ'
        slgs='/blogs'
        img={blogsBanner}
      ></Breadcrumb>
      <section class='pt-20 pb-10 lg:pt-[80px] lg:pb-20'>
        <div class='container mx-auto'>
          <div class='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
            {blogData.map((blog) => (
              <BlogCard key={blog.cat_id} blog={blog}></BlogCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;

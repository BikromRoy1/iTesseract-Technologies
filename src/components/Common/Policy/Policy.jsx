import axios from 'axios';
import React, { useEffect, useState } from 'react';
import terms from '../../../Images/Robot.jpg';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';

const Policy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/main/api/v1/privacy-info'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const policy = data?.data?.privacy_policy;

  function removeHTMLTags(htmlString) {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(htmlString, 'text/html');
    return parsedDocument.body.textContent || '';
  }

  const plainText = removeHTMLTags(policy);
  return (
    <section>
      <Breadcrumb
        subTitle='Privacy & Policy'
        title='Privacy & Policy'
        img={terms}
      ></Breadcrumb>
      <div className='container p-4 mx-auto my-6 space-y-1 text-center'>
        <h2 className='pb-3 text-3xl font-bold md:text-4xl text-[#124265]'>
          Privacy & Policy
        </h2>
        <p className='max-w-4xl mx-auto text-base  dark:text-gray-400 md:text-base'>
          {plainText}
        </p>
      </div>
    </section>
  );
};

export default Policy;

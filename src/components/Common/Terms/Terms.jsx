import axios from 'axios';
import React, { useEffect, useState } from 'react';
import terms from '../../../Images/Terms.jpg';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';

import { apiUrl } from '../../../config/config';

const Terms = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/terms-info`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const tarms = data?.data?.terms_condition;

  function removeHTMLTags(htmlString) {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(htmlString, 'text/html');
    return parsedDocument.body.textContent || '';
  }

  const plainText = removeHTMLTags(tarms);

  return (
    <section>
      <Breadcrumb
        subTitle='Terms & Conditions'
        title='Terms & Conditions'
        img={terms}
      ></Breadcrumb>
      <div className='container p-4 mx-auto my-6 space-y-1 text-center'>
        <h2 className='pb-3 text-3xl font-bold md:text-4xl text-[#124265]'>
          Terms & Conditions
        </h2>
        <p className='max-w-4xl mx-auto text-base  dark:text-gray-400 md:text-base'>
          {plainText}
        </p>
      </div>
    </section>
  );
};

export default Terms;

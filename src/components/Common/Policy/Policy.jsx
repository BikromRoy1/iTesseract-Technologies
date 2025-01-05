import axios from 'axios';
import React, { useEffect, useState } from 'react';
import terms from '../../../Images/Robot.jpg';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';

import { apiUrl } from '../../../config/config';

const Policy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/privacy-info`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const policy = data?.data?.privacy_policy;

  return (
    <section>
      <Breadcrumb
        subTitle='Privacy & Policy'
        title='Privacy & Policy'
        img={terms}
      ></Breadcrumb>
      <div className='container p-4 mx-auto my-6 space-y-1 text-center'>
        <p
          className='max-w-4xl mx-auto text-left'
          dangerouslySetInnerHTML={{ __html: policy }}
        ></p>
      </div>
    </section>
  );
};

export default Policy;

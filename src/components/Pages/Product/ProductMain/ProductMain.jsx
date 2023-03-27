import React from 'react';
import Breadcrumb from '../../../Breadcrumb/Breadcrumb';
import ProductBanner from '../../../../Images/img.PNG';
import ProductList from '../ProductList/ProductList';

const ProductMain = () => {
    return (
      <div>
        <Breadcrumb
          title='আমাদের প্রোডাক্টস'
          subTitle='আমাদের প্রোডাক্টস'
          slgs='/product'
          img={ProductBanner}
        ></Breadcrumb>
        <ProductList></ProductList>
      </div>
    );
};

export default ProductMain;
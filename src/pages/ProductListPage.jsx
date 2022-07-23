import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

export const ProductListPage = () => {
  return (
    <main>
      <header className="sticky z-10 inset-0 pb-5 w-screen backdrop-blur-md bg-gray-100/40 border-b-1 border-gray-200  ">
        <Header />
      </header>
      <div className="px-24">
        <p className="text-black font-bold text-4xl pt-4 pb-6">
          shop now!
        </p>
        <ProductList className="flex flex-row flex-nowrap p-8" />
      </div>
    </main>
  );
};
export default ProductListPage;

import React from 'react';
import Header from './components/header';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div>
      <header className="sticky z-10 inset-0 px-8 pb-5 w-screen backdrop-blur-md bg-gray-100/40 border-b-1 border-gray-200">
        <Header />
      </header>
      <div className="px-8 pb-8">
        <h1 className="font-sans text-5xl font-black pt-7 pb-4 text-black">
          shop now!
        </h1>
        <ProductList />
      </div>
    </div>
  );
};

export default App;

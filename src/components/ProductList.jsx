import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';
import spinner from '../assets/images/spinner.gif';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [filteredList, setFilteredList] = useState([]);

  const fetchAllProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products/');

    setProducts(data);
    setFilteredList(data);
  };

  const filteredCategory = () => {
    const newProduct = products.filter((val) => {
      if (category === 'All') {
        return val;
      }
      return val.category === category;
    });
    setFilteredList(newProduct);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    filteredCategory();
  }, [category]);

  const FilteredLists = () => {
    return (
      <div>
        <section className="pb-4">
          <button
            className="bg-gray-200 hover:bg-gray-100 hover:border-2 rounded-2 text-black mx-2 mb-4 px-2 font-bold"
            onClick={() => {
              setCategory('All');
            }}
          >
            {' '}
            All Products
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-100 hover:border-2 rounded-2 text-black mx-2 mb-4 px-2 font-bold"
            onClick={() => {
              setCategory("women's clothing");
            }}
          >
            {' '}
            Women's Clothing
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-100 hover:border-2 rounded-2 text-black mx-2 mb-4 w-30 px-2 font-bold"
            onClick={() => {
              setCategory("men's clothing");
            }}
          >
            {' '}
            Men's Clothing
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-100 hover:border-2 rounded-2 text-black mx-2 mb-4 w-30 px-2 font-bold"
            onClick={() => {
              setCategory('jewelery');
            }}
          >
            {' '}
            Jewelry
          </button>
          <button
            className="bg-gray-200 rounded-2 hover:bg-gray-100 hover:border-2 text-black mx-2 mb-4 w-30 px-2 font-bold"
            onClick={() => {
              setCategory('electronics');
            }}
          >
            {' '}
            Electronics
          </button>
        </section>
        <section className='lg:grid lg:grid-cols-3 lg:gap-16'>
          {filteredList.map((product) => (
            <ProductItem
              id={product.id}
              key={product.id}
              imageUrl={product.image}
              price={product.price}
              title={product.title}
              category={product.category}
            ></ProductItem>
          ))}
        </section>
      </div>
    );
  };

  return (
    <main>
      {products.length <= 0 ? (
        <div className="flex justify-center my-10 mx-auto">
          <img src={spinner} className="w-10 h-auto" />
        </div>
      ) : (
      <FilteredLists />
        
      )}
    </main>
  );
};

export default ProductList;

import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import backIcon from '../assets/icons/back-icon.svg';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');
  const getProducts = JSON.parse(localStorage.getItem('products'));

  let totalAmount = getProducts
    .map((product) => product.price)
    .reduce((prev, curr) => prev + curr, 0);

  const fetchAllProducts = () => {
    setProducts(getProducts);
    console.log(getProducts);
    setTotalPrice(totalAmount);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const ShoppingList = () => {
    return (
      <div>
        <section className='px-24 flex flex-col overflow-x-hidden'>
          {products.map((product) => (
            <CartItem
              id={product.id}
              key={product.id}
              imageUrl={product.image}
              price={product.price}
              title={product.title}
            ></CartItem>
          ))}
        </section>
        <section className='px-32 text-right '>
          <p className='text-lg pt-12'>Total Amount to be paid:</p>
          <p className='text-5xl font-bold'>
            {totalPrice} <span className='text-sm'>PHP</span>
          </p>
          <button className='font-bold text-black uppercase text-sm px-4 py-2 rounded-1 bg-yellow my-8'>
            Proceed to Checkout
          </button>
        </section>
      </div>
    );
  };

  return (
    <div>
      <header className='sticky z-10 inset-0 w-screen backdrop-blur-md bg-gray-100/40 border-b-1 border-gray-200'>
        <nav className='flex flex-row justify-between items-center py-8 px-32'>
          <Link to='/'>
            <img src={backIcon} className='w-9 h-auto' />
          </Link>
          <div>
            <p className='font-bold text-black text-lg mr-14'>Shopping Cart</p>
          </div>
        </nav>
      </header>
      {products.length === 0 ? (
        <p className='text-center my-auto opacity-40 text-lg uppercase mt-40'>Your Shopping cart is empty</p>
      ) : (
        <ShoppingList />
      )}
    </div>
  );
};

export default ShoppingCart;

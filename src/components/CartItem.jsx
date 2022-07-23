import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ id, imageUrl, price, title }) => {

  const handleRemovefromCart = () => {
    let storageProducts = JSON.parse(localStorage.getItem('products'));
    let products = storageProducts.filter(product => product.id !== id );
    localStorage.setItem('products', JSON.stringify(products));
    window.location.reload();
  }

  return (
    <section>
      <div className="flex flex-col mx-auto pb-6 px-8">
        <div className="flex bg-white rounded-1 py-3 items-center w-full lg:w-full drop-shadow-xl pl-4">
          <img
            src={imageUrl}
            alt="product-image"
            className="w-1/4 lg:w-48 h-auto p-2 lg:pl-8"
          />
          <div className="text-black lg:pr-12 lg:pl-12 font-bold text-right lg:w-full">
          <Link to={`/product/${id}`}><p className=" text-xl leading-tight lg:pt-5">{title}</p>
            <p className="pt-3 text-4xl text-right">{parseFloat(price).toFixed(2)} <span className='text-base'>PHP</span> </p></Link>
            <button className="font-bold text-black text-sm uppercase px-4 py-2 rounded-1 bg-gray-200 lg:mt-5 lg:mb-5" onClick={handleRemovefromCart}>
            Remove from Cart
          </button>
          </div>
         
        </div>
        
      </div>
    </section>
  );
};

export default CartItem;

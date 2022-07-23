import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ProductItem = ({ id, imageUrl, price, title, category }) => {
  const [addCartBtn, setAddCartBtn] = useState({ display: 'block' });
  const [removeCartBtn, setRemoveCartBtn] = useState({ display: 'none' });

  const handleAddtoCart = () => {
    setAddCartBtn({ display: 'none' })
    setRemoveCartBtn({ display: 'block' })
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push({'id' : `${id}`, 'image' : imageUrl, 'title': title, 'price': price });
    localStorage.setItem('products', JSON.stringify(products));
}

const handleRemovefromCart = () => {
  setAddCartBtn({ display: 'block' })
  setRemoveCartBtn({ display: 'none' })
  let storageProducts = JSON.parse(localStorage.getItem('products'));
  let products = storageProducts.filter(product => product.id !== id );
  localStorage.setItem('products', JSON.stringify(products));
}

  return (
    <div className="bg-white rounded-2 p-4 w-full h-auto lg:h-fit mb-2 drop-shadow-xl">
      <Link to={`product/${id}`}>
        <div className="flex lg:grid lg:auto-rows-auto justify-center justify-items-center">
          <img
            src={imageUrl}
            alt="product-image"
            className="object-contain w-3/4 h-auto p-2.5"
          />
        </div>
        <div className="flex flex-col  justify-center m-3">
          <h1 className="font-extrabold text-base text-inherit">{title}</h1>
          <h2 className="font-light text-sm text-gray-200">
            {category.toUpperCase()}
          </h2>
          <p className="font-extrabold text-3xl mt-1">
            {parseFloat(price).toFixed(2)} <span className="text-xl">PHP</span>{' '}
          </p>
        </div>
      </Link>
      <div className="relative">
        <div className="absolute bottom-0 right-0 ">
          <button className="font-bold text-black uppercase text-sm px-4 py-2 rounded-1 bg-yellow" onClick={handleAddtoCart} style={addCartBtn}>
            Add to Cart
          </button>
          
        </div>
        <button className="font-bold text-black text-sm uppercase px-4 py-2 rounded-1 bg-gray-200" onClick={handleRemovefromCart} style={removeCartBtn}>
            Remove from Cart
          </button>
      </div>
    </div>
  );
};

export default ProductItem;

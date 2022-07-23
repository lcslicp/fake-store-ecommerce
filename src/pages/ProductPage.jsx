import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import backIcon from '../assets/icons/back-icon.svg';
import ratingIcon from '../assets/icons/rating-icon.svg';
import shoppingCartIcon from '../assets/icons/shoppingcart-icon.svg';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [rate, setRate] = useState();
  const [ratingCount, setRatingCount] = useState();
  const [category, setCategory] = useState();

  const [addCartBtn, setAddCartBtn] = useState({ display: 'flex' });
  const [removeCartBtn, setRemoveCartBtn] = useState({ display: 'none' });

  const handleAddtoCart = () => {
    setAddCartBtn({ display: 'none' })
    setRemoveCartBtn({ display: 'block' })
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push({'id' : `${id}`, 'image' : image, 'title': title, 'price': price });
    localStorage.setItem('products', JSON.stringify(products));
    console.log(products);
}

const handleRemovefromCart = () => {
  setAddCartBtn({ display: 'block' })
  setRemoveCartBtn({ display: 'none' })
  let storageProducts = JSON.parse(localStorage.getItem('products'));
  let products = storageProducts.filter(product => product.id !== id );
  localStorage.setItem('products', JSON.stringify(products));
}

  const fetchProductDetails = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products/' + id);

    const { title, price, description, image, rating, category } = data;
    setTitle(title);
    setPrice(parseFloat(price).toFixed(2));
    setDescription(description);
    setImage(image);
    setRate(rating.rate);
    setRatingCount(rating.count);
    setCategory(category.toUpperCase());
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <main className='flex flex-col'>
      {/* navigation bar  */}
      <header className='sticky z-10 inset-0 w-screen backdrop-blur-md bg-white/40 border-b-1 border-gray-200  '>
        <nav className='flex flex-row justify-between items-center py-8 px-24'>
          <Link to='/'>
            <img src={backIcon} className='w-9 h-auto' />
          </Link>
          <Link to='/shoppingcart'>
            <img src={shoppingCartIcon} className='w-9 h-auto' />
          </Link>
        </nav>
      </header>
      {/* product image  */}
      <section className='flex flex-row'>
        <div className='bg-white rounded-2 h-fit mt-16 drop-shadow-2xl w-1/3 ml-24'>
          <img src={image} alt='product-image' className='w-full p-8' />
        </div>

        {/* text description */}
        <section className='pl-20 py-24'>
          <div className='flex flex-row content-center items-center pt-8'>
            <p className='text-gray-300 font-bold'>{category}</p>
            <img src={ratingIcon} className='w-7 h-auto -mt-1' />
            <p className='text-black'>
              <span className='font-bold'>{rate}</span> ({ratingCount} Reviews)
            </p>
          </div>

          <div className='flex flex-col'>
            <h1 className='text-black font-extrabold text-3xl py-2'>{title}</h1>
            <p className='text-gray-400 lg:w-3/4 pt-1 lg:pt-8 pb-4 text-sm text-justify'>
              {description}
            </p>
          </div>
          <section className=' pb-8 lg:w-1/2 lg:mt-32'>
            <div className='w-full rounded-3 bg-white drop-shadow-2xl px-4'>
              <div className='flex flex-row justify-center items-center gap-4 py-9'>
                <p className='text-4xl font-extrabold'>
                  {price}
                  <span className='text-sm'> PHP</span>
                </p>

                <button
                  className='font-bold text-black uppercase text-sm px-4 py-2 rounded-1 bg-yellow justify-center'
                  onClick={handleAddtoCart}
                  style={addCartBtn}
                >
                  Add to Cart
                </button>

                <button
                  className='font-bold text-black text-sm uppercase px-4 py-2 rounded-1 bg-gray-200'
                  onClick={handleRemovefromCart}
                  style={removeCartBtn}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </section>
        </section>
        {/* price and cta button */}
      </section>
    </main>
  );
};

export default ProductPage;

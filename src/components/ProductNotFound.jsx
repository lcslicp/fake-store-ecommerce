import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/icons/search-icon.svg';

const ProductNotFound = () => {
  return (
    <div className="flex flex-col justify-center">
      <img src={searchIcon} className="w-25 h-auto opacity-20 -mt-20 pt-8" />
      <p className="font-bold text-5xl text-black text-center">Uh-oh!</p>
      <p className="font-normal text-base text-gray-300 text-center py-4">
        We can't find what you're looking for. <br /> Try something else.
      </p>
    </div>
  );
};

export default ProductNotFound;

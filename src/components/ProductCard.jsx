import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-xl font-bold mb-2 dark:text-gray-200">{product.name}</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-4">${product.price}</p>
      <Link 
        to={`/product/${product.id}`} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;

import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const products = [
    { id: 1, name: 'Product 1', price: 19.98, image:'logo192.png', description:'Description 1' },
    { id: 2, name: 'Product 2', price: 28.93, image:'logo192.png', description:'Description 2' },
    { id: 3, name: 'Product 3', price: 30.42, image:'logo192.png', description:'Description 3' },
];

const ProductPage = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const product = products.find((p) => p.id === parseInt(id));

    return (
        <div className="container mx-auto mt-8">
          <div className="flex">
            <img src={product.image} alt={product.name} className="w-1/2 h-auto object-cover rounded" />
            <div className="ml-8">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl text-gray-700 mb-4">${product.price}</p>
              <p className="mb-4">{product.description}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    }

export default ProductPage
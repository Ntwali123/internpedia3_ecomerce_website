import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-gray-500">${item.price}</p>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 mt-2 rounded">
                Remove
              </button>
            </div>
          ))}
          <div className="mt-8">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;

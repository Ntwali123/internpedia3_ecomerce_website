import React from 'react';

function CheckoutPage() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <form>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input type="text" className="border p-2 rounded w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input type="text" className="border p-2 rounded w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Card Details</label>
          <input type="text" className="border p-2 rounded w-full" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;

import React from "react";
import headphones from "../assets/headphones.png"
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const product = [
  { id:1, name:'Product 1', price:29.99, image: headphones },
  { id:2, name:'Product 2', price:39.99, image: headphones },
  { id:3, name:'Product 3', price:19.99, image: headphones },
];

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto mt-8 px-4">
        {/* Hero Section */}
        <section className="bg-blue-500 dark:bg-blue-700 text-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold">Welcome to E-Shop!</h1>
          <p className="mt-4 text-lg text-white dark:text-gray-200">
            Your one-stop shop for all your needs. Explore our wide range of
            products now!
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white dark:bg-gray-200 text-blue-500 dark:text-blue-700 px-6 py-3 mt-6 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors duration-200"
          >
            Start Shopping
          </Link>
        </section>

        {/* Featured Products */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold dark:text-gray-200">
            Featured Products
          </h2>
          <div className="container mx-auto mt-8 ">
            <h1 className="text-3xl font-bold mb-8 text-gray-200">Shop</h1>
            <div className="grid grid-cols-3 gap-8">
                {product.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            </div>
        </section>

        {/* Testimonials in Row Columns */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold dark:text-gray-200 mb-6">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-gray-300">
                "E-Shop is amazing! I found everything I needed and the service
                was excellent!"
              </p>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                - John Doe
              </p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-gray-300">
                "Great products and fast shipping. Highly recommended!"
              </p>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                - Jane Smith
              </p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-gray-300">
                "Quality products and excellent customer service. Will shop
                again!"
              </p>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                - Alex Johnson
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="mt-12 bg-green-500 dark:bg-green-700 text-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold">Don't Miss Out!</h2>
          <p className="mt-4 text-lg text-white dark:text-gray-200">
            Sign up for our newsletter and get 10% off your first order.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white dark:bg-gray-200 text-green-500 dark:text-green-700 px-6 py-3 mt-6 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors duration-200"
          >
            Sign Up Now
          </Link>
        </section>
      </div>

      
    </div>
  );
}

export default HomePage;

import React from "react";
import headphones from "../assets/headphones.png"
import ProductCard from "../components/ProductCard";

const product = [
    { id:1, name:'Product 1', price:29.99, image: headphones },
    { id:2, name:'Product 2', price:39.99, image: headphones },
    { id:3, name:'Product 3', price:19.99, image: headphones },
];

const ShopPage = () => {
    return (
        <div className="container mx-auto mt-8 ">
            <h1 className="text-3xl font-bold mb-8 text-gray-200">Shop</h1>
            <div className="grid grid-cols-3 gap-8">
                {product.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ShopPage;

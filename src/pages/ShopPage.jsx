import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
            <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 mx-auto object-contain"
            />
            <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{product.name}</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;

import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer border rounded-lg px-2 py-2"
    >
      <div className="h-[20rem] text-center">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            S/{product.discountedPrice}
          </span>
          {/* <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            {product.quantity}
          </span> */}
          <span
            className={`ml-3 mr-2 rounded px-2.5 py-0.5 text-xs font-semibold dark:text-cyan-800
            ${
              product.quantity !== 0
                ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-200"
                : "bg-red-500 text-white dark:bg-red-700"
            }`}
          >
            {product.quantity}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          {/* <p className="font-semibold">s/{product.discountedPrice}</p> */}
          <p className="line-through opacity-50">S/{product.price}</p>
          <p className="text-green-600 font-semibold">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";

const CartProduct = ({ item }) => {
  return (
    <div className="m-4 border">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img className="w-[8rem]" src={item.product.imageUrl} alt="" />
        </div>
        <div className="text-start ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70 mt-2">Seller: {item.product.brand}</p>
          <span className=" mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              Cantidad: {item.quantity}
          </span>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              S/{item.discountedPrice}
            </span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

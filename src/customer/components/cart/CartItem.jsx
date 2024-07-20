import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../state/Cart/Action";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.id,
    };
    dispatch(updateCartItem(data));
  };
  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.id));
  };
  return (
    <div className="p-5 shadow-lg border rounded-md mt-3">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="text-start ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70 mt-2">Marca: {item.product.brand}</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            {/* <p className="font-semibold">S/{item.discountedPrice}</p> */}
            <p className="opacity-50 line-through">S/{item.price}</p>
            <p className="text-green-600 font-semibold">
              {item.product.discountPersent}% off
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              S/{item.discountedPrice}
            </span>
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              {item.product.quantity}
            </span>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            sx={{ color: "#e3001b" }}
            disabled={item.quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
          <IconButton
            onClick={() => handleUpdateCartItem(1)}
            sx={{ color: "#2596be" }}
            disabled={item.product.quantity <= item.quantity}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button
            onClick={handleRemoveCartItem}
            variant="contained"
            color="error"
          >
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

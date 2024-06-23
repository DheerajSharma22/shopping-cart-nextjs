"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { removeFromCart } from "@/store/slices/cartSlice";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState();

  const  cart  = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalAmount(
      cart?.cartItems?.reduce((acc, curr) => (acc += curr.price), 0)
    );
  }, [cart?.cartItems]);

  if (cart && cart.cartItems.length === 0)
    return (
      <h1 className="font-bold text-center mt-10 text-3xl">Cart is empty.</h1>
    );

  return (
    <div className="bg-white py-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#333]">Cart</h2>
        <div className="overflow-y-auto">
          <table className="mt-12 w-full border-collapse divide-y">
            <thead className="whitespace-nowrap text-left">
              <tr>
                <th className="text-base text-gray-700 p-4">Title</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap divide-y">
              {cart?.cartItems?.map((item) => (
                <tr key={item?.id}>
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-6 w-max">
                      <div className="h-36 shrink-0">
                        <img
                          src={item?.thumbnail}
                          alt={item?.title}
                          className="w-full h-full object-contain bg-red-50 p-1 rounded-md"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-bold">{item?.title}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{item.price}</p>
                  </td>
                  <td className="py-5 px-4">
                    <Button
                      className="bg-red-700 hover:bg-red-500"
                      onClick={() => dispatch(removeFromCart(item?.id))}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="max-w-xl ml-auto mt-6 bg-red-100 shadow-sm p-5">
          <div className="flex items-center justify-between text-xl font-bold">
            <p>Total </p>
            <p>{totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

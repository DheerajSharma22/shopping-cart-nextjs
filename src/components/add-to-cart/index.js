'use client'
import { addToCart, removeFromCart } from '@/store/slices/cartSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../ui/button';

const AddToCart = ({ productDetails }) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    function handleAddToCart() {
        dispatch(addToCart(productDetails));
    }

    function handleRemoveFromCart() {
        dispatch(removeFromCart(productDetails?.id));
    }

    return (
        <Button className="w-fit" onClick={() => cart?.cartItems?.some((item) => item.id === productDetails?.id) ? handleRemoveFromCart() : handleAddToCart()}>{
            cart?.cartItems?.some((item) => item.id === productDetails?.id) ? "Remove From Cart" : "Add To Cart"
        }</Button>
    )
}

export default AddToCart

"use server"

import { signIn, signOut } from "../../auth";

// Get all products.
export const fetchAllProducts = async () => {
    try {
        const result = await fetch('https://dummyjson.com/products');
        const data = await result.json();

        if (data && data.products) {
            return {
                success: true,
                data: data.products,
                message: "Data fetched successfully..."
            }
        }
    } catch (error) {
        console.log(e);
        return {
            success: false,
            message: "Something went wrong! Please try again",
        }
    }
}

export const fetchProductDetails = async (productId) => {
    try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await res.json();
        if (data) {
            return {
                success: true,
                data,
                message: "Details fetched successfully..."
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong! Please try again",
        }
    }
}

export async function loginAction() {
    await signIn("github");
}

export async function logOutAction() {
    await signOut();
}
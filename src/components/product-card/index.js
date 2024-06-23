import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Card className="shadow-lg">
      <CardContent>
        <div className="w-full aspect-w-16 aspect-h-8">
          <Image
            src={product?.thumbnail}
            alt={product?.title}
            height={500}
            width={500}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="p-4">
          <CardTitle className="font-semibold text-gray-900 text-lg">
            {product?.title}
          </CardTitle>
          <CardDescription className="mt-2 text-lg text-gray-500 font-semibold">
            ₹{product?.price}
          </CardDescription>
          <Link href={`/product/${product?.id}`}>
            <div className="mt-2 bg-black text-white px-6 py-2 rounded-md w-fit hover:bg-gray-800">
              Details
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

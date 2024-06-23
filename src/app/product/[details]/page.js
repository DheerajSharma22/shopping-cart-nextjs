import { fetchProductDetails } from "@/actions";
import AddToCart from "@/components/add-to-cart";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { auth } from "../../../../auth";

const ProductDetails = async ({ params }) => {
  const productDetails = await fetchProductDetails(params.details);
  const getSession = await auth();

  if (!getSession?.user) {
      redirect("/unauth-page");
  }
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex md:flex-row flex-col-reverse gap-5">
          <div className="flex gap-3 md:flex-col">
            {productDetails?.data?.images?.map((imageURL, index) => (
              <div key={index}>
                <Image
                  src={imageURL}
                  alt={productDetails?.data?.title}
                  width={600}
                  height={700}
                  className="w-24 bg-red-50 p-2 rounded-md cursor-pointer"
                />
              </div>
            ))}
          </div>
          <Image
            className="bg-red-50 h-full"
            src={productDetails?.data?.thumbnail}
            alt={productDetails?.data?.title}
            width={600}
            height={700}
          />
        </div>

        <div className="py-5 flex flex-col gap-5">
          <div>
            <h2 className="font-bold text-xl">{productDetails?.data?.title}</h2>
            <h3>{productDetails?.data?.price}</h3>
          </div>
          <p>{productDetails?.data?.description}</p>

          <AddToCart productDetails={productDetails?.data}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

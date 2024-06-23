import { fetchAllProducts } from "@/actions";
import ProductCard from "@/components/product-card";
import React from "react";
import { auth } from "../../auth";
import { redirect } from "next/navigation";


const Home = async () => {
  const allProducts = await fetchAllProducts();
  const getSession = await auth();

  if (!getSession?.user) {
    redirect("/unauth-page");
  }

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {allProducts && allProducts.data && allProducts.data.length > 0
          ? allProducts.data.map((product) => <ProductCard key={product.id} product={product} />)
          : null}
      </div>
    </div>
  );
};

export default Home;

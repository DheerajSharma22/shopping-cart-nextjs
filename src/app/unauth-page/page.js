import { redirect } from "next/navigation";
import React from "react";
import { auth } from "../../../auth";

const UnauthPage = async() => {
  const getSession = await auth();

    if (getSession?.user) {
        redirect("/");
    }
  return (
    <div className="p-10">
      <h2 className="text-6xl font-bold">You are not logged In. Please login</h2>
    </div>
  );
};

export default UnauthPage;

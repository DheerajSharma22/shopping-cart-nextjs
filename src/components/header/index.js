'use client'
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { logOutAction, loginAction } from "@/actions";

const Header = ({ getSession }) => {
  const handleOauthSignIn = async () => await loginAction();
  const handleOauthSignOut = async () => await logOutAction();

  return (
    <header className="shadow-md py-4 bg-white min-h-16 tracking-wide relative z-50">
      <div className="w-11/12 mx-auto flex ">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          <Link href={"/"}>Shopping Cart</Link>
        </div>
        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-5">
            <li>
              <Link href={"/"}>Products</Link>
            </li>
            <li>
              <Link href={"/cart"}>Cart</Link>
            </li>
          </ul>

          <div className="flex space-x-3">
            <form action={getSession?.user ? handleOauthSignOut : handleOauthSignIn}>
              <Button type="submit">{getSession?.user ? "Logout" : "Login"}</Button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

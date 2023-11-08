import Link from "next/link";
import Menu from "./Menu";
import { useState } from "react";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  // temporary 'state' for logged user
  const user = false;

  return (
    <div className="h-12 md:h-24 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:justify-start lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 items-center flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:text-3xl font-bold italic flex-1 md:text-center">
        <Link href="/">Just Order</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center flex-1 md:justify-end">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md md:absolute top-3 r-2 lg:static">
          <Image src="/phone.png" alt="phone icon" width={20} height={20} />
          <span>123 456 789</span>
        </div>
        {user ? (
          <Link href="/orders">Orders</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;

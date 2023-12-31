"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import CartIcon from "./CartIcon";

const menuLinks = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  // state for menu button
  const [isOpen, setIsOpen] = useState(false);

  // temporary state for logged user
  const [user, setUser] = useState(null);

  const renderedLinks = menuLinks.map((item) => {
    return (
      <div key={item.id}>
        <Link href={item.url} onClick={() => setIsOpen(false)}>
          {item.title}
        </Link>
      </div>
    );
  });

  return (
    <div>
      <Image
        className="cursor-pointer"
        src={isOpen ? "/close.png" : "/open.png"}
        alt="menu button"
        width={20}
        height={20}
        onClick={() => setIsOpen((current) => !current)}
      />

      {isOpen && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {renderedLinks}
          {user ? (
            <Link href="/orders" onClick={() => setIsOpen(false)}>
              Orders
            </Link>
          ) : (
            <Link href="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          )}
          <CartIcon />
        </div>
      )}
    </div>
  );
};

export default Menu;

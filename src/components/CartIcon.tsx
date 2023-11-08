import Image from "next/image";
import Link from "next/link";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8">
        <Image src="/cart.png" alt="cart icon" fill></Image>
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
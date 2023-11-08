import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="text-xl md:text-3xl font-bold italic">
        Just Order
      </Link>
      <p className="uppercase">© All rights reserved.</p>
    </div>
  );
};

export default Footer;

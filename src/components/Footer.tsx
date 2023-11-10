import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between uppercase">
      <Link href="/" className="text-xl md:text-3xl font-bold italic">
        Just Order
      </Link>
      <p>© All rights reserved.</p>
    </div>
  );
};

export default Footer;

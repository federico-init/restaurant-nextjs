import Image from "next/image";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row text-red-500">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 flex flex-col justify-center p-4 overflow-scroll">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image
            src="/products/p1.png"
            alt="product image"
            width={100}
            height={100}
          />
          <div>
            <h1 className="uppercase font-bold text-xl">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">€79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image
            src="/products/p1.png"
            alt="product image"
            width={100}
            height={100}
          />
          <div>
            <h1 className="uppercase font-bold text-xl">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">€79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image
            src="/products/p1.png"
            alt="product image"
            width={100}
            height={100}
          />
          <div>
            <h1 className="uppercase font-bold text-xl">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">€79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className=" h-1/2 lg:h-full lg:w-1/3 2xl:w-1/2 p-4 bg-orange-50 flex flex-col justify-center gap-4 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>€81.70</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>€0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="uppercase text-green-500">Free!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="uppercase">Total(incl. IVA)</span>
          <span className="font-bold">€81.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end uppercase">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

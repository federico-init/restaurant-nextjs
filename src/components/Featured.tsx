import Image from "next/image";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-auto text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        <div className="w-screen h-[60vh] flex flex-col items-center justify-around m-4">
          {/* IMAGE CONTAINER */}
          <div className="relative flex-1 w-full">
            <Image
              src="/products/p1.png"
              alt="product image"
              fill
              className="object-contain"
            />
          </div>
          {/* TEXT CONTAINER */}
          <div className="flex flex-1 flex-col gap-4">
            <h1 className="text-xl font-bold uppercase">Title</h1>
            <p>Description</p>
            <span className="text-xl font-bold">123</span>
            <button className="bg-red-500 text-white p-2 rounded-md">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import Image from "next/image";
import { featuredProducts } from "@/data";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen md:w-[50vw] xl:w-[33vw] h-[60vh] xl:h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-orange-50 transition-all duration-300"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full hover:scale-105 transition-all duration-300">
                <Image
                  src={item.img}
                  alt="product image"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex flex-1 flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl xl:text-2xl 2xl:text-3xl font-bold uppercase">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">€{item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

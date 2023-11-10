"use client";

import { useState, useEffect } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const maxQuantity = 10;

const Price = ({ price, id, options }: Props) => {
  // quantity
  const [quantity, setQuantity] = useState(1);

  // total price
  const [total, setTotal] = useState(price);

  // selected option
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "rgb(239 68 68)",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"-"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() =>
                setQuantity((prev) =>
                  prev < maxQuantity ? prev + 1 : maxQuantity
                )
              }
            >
              {"+"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className="w-56 uppercase p-3 text-white bg-red-500 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;

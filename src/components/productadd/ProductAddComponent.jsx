"use client";
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const ProductAddComponent = () => {
  const [quantity, setQuantity] = useState(4);
  const price = 5182; // per piece for 1-99
  const subtotal = price * quantity;

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div>
      <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
        {/* Pricing Tiers */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col space-y-1">
            <p className="text-gray-500 text-sm">1 - 99 pieces</p>
            <p className="text-orange-600 font-semibold text-lg">FCFA 5,182</p>
          </div>
          <div className="flex flex-col space-y-1 text-right">
            <p className="text-gray-500 text-sm">100 - 999 pieces</p>
            <p className="text-gray-800 font-semibold text-xl  border-l border-r text-center border-gray-400/20">FCFA 3,563</p>
          </div>
          <div className="flex flex-col space-y-1 text-right">
            <p className="text-gray-500 text-sm">&gt;= 1000 pieces</p>
            <p className="text-gray-800 font-semibold text-xl text-center">FCFA 2,915</p>
          </div>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Quantity Section */}
        <div className="mb-6">
          <p className="text-gray-800 font-semibold mb-2">Quantity</p>
          <div className="flex items-center space-x-3">
            <button
              onClick={decrease}
              className="border border-gray-400 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
            >
              <Minus className="w-4 h-4 text-gray-700" />
            </button>
            <span className="px-4 py-1 border border-gray-300 rounded-md text-gray-800 font-medium">
              {quantity}
            </span>
            <button
              onClick={increase}
              className="border border-gray-400 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
            >
              <Plus className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Shipping Section */}
        <div className="mb-6">
          <h3 className="text-gray-800 font-semibold mb-1">Shipping</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Shipping fee and delivery date to be negotiated. Chat with supplier
            now for more details.
          </p>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Subtotals */}
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Item subtotal (1 variation {quantity} items)</span>
            <span className="font-semibold">
              FCFA {subtotal.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Shipping total</span>
            <span className="text-gray-500">To be negotiated</span>
          </div>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Final Subtotal */}
        <div className="flex justify-between items-center font-semibold text-gray-900 flex-wrap">
          <span>Subtotal</span>
          <span>
            FCFA {subtotal.toLocaleString()}{" "}
            <span className="text-gray-500 font-normal text-sm">
              (FCFA {price.toLocaleString()}/piece)
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductAddComponent;

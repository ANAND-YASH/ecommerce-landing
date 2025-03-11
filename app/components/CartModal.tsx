import { useState } from "react";

interface CartModalProps {
  cartItems: { id: number; name: string; price: number; quantity: number }[];
}

export default function CartModal({ cartItems }: CartModalProps) {
  return (
    <div className="absolute top-12 right-4 bg-white shadow-lg p-4 w-64 rounded-lg z-50">
      <h2 className="font-bold text-lg mb-2">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between py-2 border-b">
            <span>{item.name}</span>
            <span className="font-bold">₹{item.price} x {item.quantity}</span>
          </div>
        ))
      )}
    </div>
  );
}

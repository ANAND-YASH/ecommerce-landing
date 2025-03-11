"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter(); 

  
  const itemsTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = itemsTotal >= 499 ? 0 : 40; 
  const orderTotal = itemsTotal + deliveryFee;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="border-b pb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 mb-6">
               
                <img src={item.image} alt={item.name} className="w-28 h-28 object-cover rounded" />

               
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">{item.description}</p>
                  <p className="text-xl font-bold mt-1">₹{item.price}</p>

              
                  <div className="flex items-center mt-2">
                    <button
                      className="border px-2 py-1 rounded-l"
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      -
                    </button>
                    <span className="border-t border-b px-4">{item.quantity}</span>
                    <button
                      className="border px-2 py-1 rounded-r"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>

                  
                    <button
                      className="ml-4 text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="mt-6 border-t pt-4">
            <p className="text-lg">Items: ₹{itemsTotal}</p>
            <p className="text-lg">Delivery: ₹{deliveryFee}</p>
            <p className="text-xl font-bold">Order Total: ₹{orderTotal}</p>
            

           
            <button
              onClick={() => router.push("/checkout")}
              className="w-full bg-yellow-500 text-white py-3 mt-4 rounded text-lg"
            >
              Proceed to Buy ({cart.length} item{cart.length > 1 ? "s" : ""})
            </button>
          </div>
        </>
      )}
    </div>
  );
}

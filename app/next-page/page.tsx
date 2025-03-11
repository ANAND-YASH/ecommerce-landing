"use client";
import { useRouter } from "next/navigation";

export default function NextPage() {
  const router = useRouter();

  const foodItems = [
    { name: "Margherita Pizza", price: "₹299" },
    { name: "Veg Burger", price: "₹149" },
    { name: "Pasta Alfredo", price: "₹249" },
    { name: "French Fries", price: "₹99" },
    { name: "Chocolate Shake", price: "₹199" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🍽️ Online Food Order</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg text-center w-60"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-lg text-gray-700">{item.price}</p>
            <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <button
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
        onClick={() => router.back()}
      >
        ⬅ Go Back
      </button>
    </div>
  );
}

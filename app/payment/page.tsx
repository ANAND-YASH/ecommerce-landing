"use client";
import { useSearchParams } from "next/navigation";


export default function PaymentPage() {
  const searchParams = useSearchParams();
  const productName = searchParams.get("name");
  const productPrice = searchParams.get("price");

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpeg')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full">
        <h1 className="text-3xl font-bold text-gray-800">Payment Page</h1>
        <p className="text-gray-600 mt-2">Complete your purchase</p>

        {productName && productPrice ? (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900">{productName}</h2>
            <p className="text-lg text-gray-700 mt-1">Price: ₹{productPrice}</p>
          </div>
        ) : (
          <p className="text-red-500 mt-4">No product selected</p>
        )}

        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg shadow-md">
          Proceed to Payment
         
        </button>
      </div>
    </div>
  );
}
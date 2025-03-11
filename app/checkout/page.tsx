"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pinCode: "",
    address: "",
    locality: "",
    city: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Address Saved:", formData);
    alert("Address Saved Successfully!");
    router.push("/payment");
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      {/* Step Indicator */}
      <div className="flex items-center justify-between pb-4 border-b">
        <span className="text-green-600 font-semibold">Bag</span>
        <span className="text-green-600 font-semibold">Address</span>
        <span className="text-gray-400">Payment</span>
      </div>

      <h1 className="text-xl font-bold mt-4">ADD NEW ADDRESS</h1>

      {/* Address Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        {/* Contact Details */}
        <div>
          <h2 className="font-semibold">Contact Details</h2>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-2"
            autoComplete="email"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile No*"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-2"
          />
        </div>

        {/* Address Details */}
        <div>
          <h2 className="font-semibold">Address</h2>

          {/* Location Buttons */}
          <div className="flex justify-between">
            <button type="button" className="text-red-500 flex items-center">
              📍 Use my current Location
            </button>
            <button type="button" className="text-red-500 flex items-center">
              🗺 Search on map
            </button>
          </div>

          <input
            type="text"
            name="pinCode"
            placeholder="Pin Code*"
            value={formData.pinCode}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-2"
          />
          <input
            type="text"
            name="address"
            placeholder="Address (House No, Building, Street, Area)*"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-2"
          />
          <p className="text-yellow-600 text-sm">
            *Please update flat/house no and society/apartment details
          </p>
          <input
            type="text"
            name="locality"
            placeholder="Locality / Town*"
            value={formData.locality}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-2"
          />
          <div className="flex gap-2">
            <input
              type="text"
              name="city"
              placeholder="City / District*"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-1/2 p-2 border rounded mt-2"
            />
            <input
              type="text"
              name="state"
              placeholder="State*"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-1/2 p-2 border rounded mt-2"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="w-1/2 border py-2 rounded text-black"
            onClick={() => router.back()}
          >
            Cancel
          </button>
          <button type="submit" className="w-1/2 bg-red-500 text-white py-2 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

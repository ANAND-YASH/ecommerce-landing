"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { AiOutlineQrcode } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5"; 

export default function Navbar() {
  const { cart } = useCart();
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      
      <div className="flex items-center space-x-4">
       
        <Image 
          src="/image.webp"  
          alt="Logo"
          width={40} 
          height={40} 
        />
        <h1 className="text-2xl font-bold">ONLINE BUSINESS</h1>
        <div className="flex space-x-6 text-gray-700 ml-8">
          <Link href="/products">
            <span className="hover:text-black cursor-pointer">Products</span>
          </Link>
          <Link href="#">
            <span className="hover:text-black cursor-pointer">Solutions</span>
          </Link>
          <Link href="#">
            <span className="hover:text-black cursor-pointer">Resources</span>
          </Link>
        </div>
      </div>

      
      <div className="relative flex items-center border rounded-full shadow-sm bg-gray-100 px-3 py-1">
        <FiSearch size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search Online"
          className="w-64 px-4 py-2 bg-transparent focus:outline-none"
        />
        <button className="p-2 hover:bg-gray-200 rounded-full transition">
          <AiOutlineQrcode size={22} className="text-gray-600 hover:text-black" />
        </button>
      </div>

      
      <div className="flex items-center space-x-6 relative">
        
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setIsAccountOpen(true)}
          onMouseLeave={() => setIsAccountOpen(false)}
        >
          <IoPersonOutline size={28} className="text-gray-700 hover:text-black" />
          {isAccountOpen && (
            <div className="absolute left-0 top-10 w-64 bg-white shadow-md rounded-md p-4">
              <p className="font-semibold text-gray-700">Hello, User</p>
              <Link href="/account" className="block hover:text-blue-500 mt-2">Your Account</Link>
              <Link href="/orders" className="block hover:text-blue-500 mt-2">Your Orders</Link>
              <Link href="/settings" className="block hover:text-blue-500 mt-2">Settings</Link>
              <Link href="/logout" className="block text-red-500 hover:text-red-700 mt-2">Sign Out</Link>
            </div>
          )}
        </div>

     
        <div className="relative">
          <Link href="/cart">
            <FiShoppingCart size={28} className="text-gray-700 hover:text-black cursor-pointer" />
          </Link>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

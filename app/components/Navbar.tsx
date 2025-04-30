"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { AiOutlineQrcode } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { cart } = useCart();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setIsAccountOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm(""); // Clear search after submit
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <div className="flex items-center space-x-4">
        <Image src="/image.webp" alt="Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">ONLINE BUSINESS</h1>
        <div className="flex space-x-6 text-gray-700 dark:text-gray-300 ml-8">
          <Link href="/products"><span className="hover:text-black dark:hover:text-white cursor-pointer">Products</span></Link>
          <Link href="#"><span className="hover:text-black dark:hover:text-white cursor-pointer">Solutions</span></Link>
          <Link href="#"><span className="hover:text-black dark:hover:text-white cursor-pointer">Resources</span></Link>
        </div>
      </div>

      <form
        onSubmit={handleSearch}
        className="relative flex items-center border rounded-full shadow-sm bg-gray-100 dark:bg-gray-800 px-3 py-1"
      >
        <FiSearch size={18} className="text-gray-500 dark:text-gray-300" />
        <input
          type="text"
          placeholder="Search Online"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64 px-4 py-2 bg-transparent focus:outline-none"
        />
        <button type="submit" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition">
          <AiOutlineQrcode size={22} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" />
        </button>
      </form>

      <div className="flex items-center space-x-6 relative">
        {/* Account Dropdown */}
        <div
          ref={accountRef}
          className="relative cursor-pointer"
          onClick={() => setIsAccountOpen(!isAccountOpen)}
        >
          <IoPersonOutline size={28} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" />
          {isAccountOpen && (
           <div className="absolute right-0 top-10 w-30 bg-white dark:bg-gray-900 shadow-md rounded-md p-3 z-50">
              <p className="font-semibold text-gray-700 dark:text-gray-300">Hello, User</p>
              <Link href="/account" className="block hover:text-blue-500 dark:hover:text-blue-400 mt-2">Your Account</Link>
              <Link href="/orders" className="block hover:text-blue-500 dark:hover:text-blue-400 mt-2">Your Orders</Link>
              <Link href="/settings" className="block hover:text-blue-500 dark:hover:text-blue-400 mt-2">Settings</Link>
              <Link href="/logout" className="block text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-500 mt-2">Sign Out</Link>
            </div>
          )}
        </div>

        {/* Cart */}
        <div className="relative">
          <Link href="/cart" className="relative block">
            <FiShoppingCart
              size={28}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer"
            />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  );
}

"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      router.push("/next-page"); 
    }, 10000);

   
  }, []);

  return (
    <div>
      <Head>
        <title>Ecommerce Website</title>
      </Head>

      <div className="w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center bg-blue-100">
        <h2 className="text-lg font-medium tracking-wide text-gray-700">
          AN ECOMMERCE WEBSITE
        </h2>
        <h1 className="text-5xl font-bold text-black mt-2">
          Start selling immediately.
        </h1>
        <h1 className="text-5xl font-bold text-black">Grow without limits.</h1>
        <p className="text-gray-600 text-lg mt-4">
          Everything you need to start an online store and sell online.
        </p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition">
          Your Store
        </button>
      </div>
    </div>
  );
}

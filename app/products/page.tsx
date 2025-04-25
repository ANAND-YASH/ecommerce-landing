"use client";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";


type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};


const products: Product[] = [
  { id: "1", name: "Laptop", description: "A high-performance laptop for gaming and work.", price: 999, image: "/laptop.jpeg" },
  { id: "2", name: "Smartphone", description: "Latest smartphone with amazing features.", price: 699, image: "/laptop.jpeg" },
  { id: "3", name: "Headphones", description: "Noise-canceling wireless headphones.", price: 199, image: "/laptop.jpeg" },
  { id: "4", name: "Camera", description: "Capture high-quality photos and videos.", price: 499, image: "/laptop.jpeg" },
];

export default function ProductsPage() {
  const router = useRouter();
  const { cart, addToCart, updateCartQuantity } = useCart();

  
  const handleBuyNow = (product: Product) => {
    router.push(
      `/checkout?name=${encodeURIComponent(product.name)}&price=${product.price}`
    );
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <div key={product.id} className="border p-4 shadow-md rounded-lg flex flex-col">
              
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />

              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="font-bold text-lg">₹{product.price}</p>

            
              <div className="mt-4 flex flex-col gap-2">
                {quantity > 0 ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateCartQuantity(product.id, Math.max(0, quantity - 1))}
                      className="bg-gray-300 px-3 py-1 rounded text-lg"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(product.id, quantity + 1)}
                      className="bg-gray-300 px-3 py-1 rounded text-lg"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart({ ...product, quantity: 1 })}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    Add to Cart
                  </button>
                )}

                
                <button
                  onClick={() => handleBuyNow(product)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

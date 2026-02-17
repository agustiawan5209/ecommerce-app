import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaTrash,
  FaArrowLeft,
} from "react-icons/fa";
import type { Product } from "../data/products";

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart dari localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]") || [];
    setCart(storedCart);
  }, []);

  // Update localStorage
  const updateStorage = (updatedCart: any) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  // Hapus item
  const removeItem = (id: number) => {
    const updated = cart.filter((item) => item.id !== id);
    updateStorage(updated);
  };

  // Update quantity
  const updateQty = (id: number, qty: number) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    updateStorage(updated);
  };

  // Perhitungan
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity ?? 1),
    0
  );

  const tax = subtotal * 0.11; // PPN 11%
  const shipping = subtotal > 0 ? 20000 : 0;
  const total = subtotal + tax + shipping;

  return (
    <section className="bg-slate-50 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-slate-800 flex items-center gap-3 mb-12"
        >
          <FaShoppingCart className="text-indigo-600" />
          Keranjang Belanja
        </motion.h1>

        {cart.length === 0 ? (
          /* EMPTY STATE */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center bg-white p-16 rounded-3xl shadow-md"
          >
            <FaShoppingCart
              size={50}
              className="mx-auto text-indigo-400 mb-6"
            />
            <p className="text-lg text-slate-600 mb-6">
              Keranjang masih kosong
            </p>
            <a
              href="/products"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
            >
              <FaArrowLeft />
              Belanja Sekarang
            </a>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">

            {/* ================= CART ITEMS ================= */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row gap-6 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-xl"
                  />

                  <div className="flex-1 space-y-3">
                    <h2 className="text-lg font-semibold">
                      {item.name}
                    </h2>
                    <p className="text-indigo-600 font-bold">
                      Rp {item.price.toLocaleString()}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQty(
                            item.id,
                            (item.quantity ?? 1) > 1
                              ? (item.quantity ?? 1) - 1
                              : 1
                          )
                        }
                        className="px-3 py-1 border rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity ?? 1}</span>
                      <button
                        onClick={() =>
                          updateQty(item.id, (item.quantity ?? 1) + 1)
                        }
                        className="px-3 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* ================= SUMMARY ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-3xl shadow-lg h-fit space-y-6"
            >
              <h2 className="text-xl font-semibold">
                Ringkasan Belanja
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp {subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Pajak (11%)</span>
                  <span>Rp {tax.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Ongkir</span>
                  <span>Rp {shipping.toLocaleString()}</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-indigo-600">
                    Rp {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition shadow-lg">
                Checkout
              </button>
            </motion.div>

          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;

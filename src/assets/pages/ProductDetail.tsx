import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "../data/products";
import {
  FaShoppingCart,
  FaStar,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product)
    return (
      <div className="pt-32 text-center text-xl">
        Product not found
      </div>
    );

  const AddToStorage = (product: Product) => {

    // check if product already in cart

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find((p: Product) => p.id === product.id);

    if (existingProduct) {
      alert("Product already in cart!");
      return;
    }

    // add quantity to product object
    product.quantity = qty;
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
  }
  return (
    <section className="bg-slate-50 pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-2xl object-cover"
              />
            </div>

            {/* Highlight Features */}
            <div className="flex gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <FaTruck className="text-indigo-600" />
                Fast Shipping
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-indigo-600" />
                Secure Payment
              </div>
            </div>
          </motion.div>

          {/* ================= DETAILS ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-10 rounded-3xl shadow-lg space-y-6"
          >
            <h1 className="text-4xl font-extrabold text-slate-800">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="text-slate-500 text-sm">(120 Reviews)</span>
            </div>

            <p className="text-3xl font-bold text-indigo-600">
              Rp {product.price.toLocaleString()}
            </p>

            <p className="text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded-xl">
                <button
                  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                  className="px-4 py-2"
                >
                  -
                </button>
                <span className="px-4">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-2"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button onClick={() => AddToStorage(product)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg transition"
              >
                <FaShoppingCart />
                Add to Cart
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-50 transition"
              >
                Buy Now
              </motion.button>
            </div>

            {/* Stock Info */}
            <p className="text-sm text-green-600 font-medium">
              ✔ In Stock - Ready to ship
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

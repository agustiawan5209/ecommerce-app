import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { FaFilter, FaSortAmountDown } from "react-icons/fa";

const Products = () => {
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(10000000);

  // Filter harga
  let filteredProducts = products.filter(
    (p) => p.price <= maxPrice
  );

  // Sorting
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="bg-slate-50 min-h-screen pt-5 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-800 flex items-center gap-3">
            <FaFilter className="text-indigo-600" />
            Semua Produk
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-10">

          {/* ================= SIDEBAR ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-2xl shadow-md h-fit space-y-6"
          >
            <h2 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
              <FaFilter />
              Filter
            </h2>

            {/* Filter Harga */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Harga Maksimal
              </label>
              <input
                type="range"
                min="0"
                max="10000000"
                step="500000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
              <p className="text-sm mt-2 text-slate-600">
                Rp {maxPrice.toLocaleString()}
              </p>
            </div>

            {/* Sorting */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Urutkan
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
              >
                <option value="default">Default</option>
                <option value="low">Harga Terendah</option>
                <option value="high">Harga Tertinggi</option>
              </select>
            </div>
          </motion.div>

          {/* ================= PRODUCT GRID ================= */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Products;

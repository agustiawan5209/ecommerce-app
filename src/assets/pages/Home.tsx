import { motion } from "framer-motion";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-300 via-blue-600 to-indigo-100 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ================= IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 flex justify-center relative"
            >
              {/* Blur background */}
              <div
                className="absolute inset-0 flex justify-center items-center z-10
               bg-[url('/coretan.png')] bg-no-repeat bg-contain bg-center"
              ></div>
              <motion.img
                src="/sepatupng.png"
                alt="Sepatu Premium"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="w-full max-w-xl z-20 drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
              />
            </motion.div>

            {/* ================= TEXT CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 text-center lg:text-left space-y-8"
            >
              <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 text-sm rounded-full font-medium">
                #Toko Sepatu Fashion & Sport
              </span>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-800 leading-tight">
                Temukan Sepatu
                <span className="block text-indigo-50">
                  Stylish & Nyaman
                </span>
              </h1>

              <p className="text-slate-100 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Jelajahi koleksi sepatu terbaik mulai dari sneaker kasual,
                sepatu formal, hingga sport premium dengan kualitas unggulan
                dan desain modern. Produk original, harga terbaik, dan
                pengiriman cepat ke seluruh Indonesia.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#produk"
                  className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg transition"
                >
                  <FaShoppingCart size={16} />
                  Belanja Sekarang
                </motion.a>

                <motion.a
                  whileHover={{ x: 5 }}
                  href="#koleksi"
                  className="flex items-center justify-center gap-2 border border-indigo-600 text-indigo-50 px-8 py-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-700 transition"
                >
                  Lihat Koleksi
                  <FaArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">
              Produk Unggulan
            </h2>
            <a
              href="/products"
              className="text-indigo-600 font-medium hover:underline"
            >
              Lihat Semua
            </a>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.slice(0, 3).map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  // check real time cart length
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* ================= LOGO ================= */}
          <motion.a
            href="/"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-extrabold tracking-tight text-slate-800"
          >
            E<span className="text-indigo-600">-Shop</span>
          </motion.a>

          {/* ================= MENU DESKTOP ================= */}
          <div className="hidden md:flex items-center space-x-8">

            {["Home", "Products", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="relative text-slate-700 font-medium transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 hover:w-full"></span>
              </motion.a>
            ))}

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center space-x-4">

            {/* Search */}
            <div className="hidden sm:flex items-center bg-gray-100 px-3 py-1.5 rounded-full focus-within:ring-2 focus-within:ring-indigo-500 transition">
              <FaSearch className="text-gray-500 mr-2" size={14} />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none text-sm w-40"
              />
            </div>

            {/* Cart */}
            <motion.a
              href="/cart"
              whileHover={{ scale: 1.1 }}
              className="relative text-slate-700"
            >
              <FaShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-1.5 rounded-full">
                {cart.length}
              </span>
            </motion.a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-slate-700"
            >
              {open ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>

          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-4">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="block text-slate-700 font-medium hover:text-indigo-600 transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

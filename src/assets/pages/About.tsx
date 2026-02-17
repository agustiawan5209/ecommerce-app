import { motion } from "framer-motion";
import {
    FaShippingFast,
    FaMedal,
    FaHeadset,
    FaStore,
} from "react-icons/fa";

const About = () => {
    return (
        <section className="bg-slate-50 pt-28 pb-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 space-y-24">

                {/* ================= HERO ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
                        Tentang <span className="text-indigo-600">E-Shop</span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                        Kami adalah toko sepatu fashion & sport yang menghadirkan
                        koleksi berkualitas tinggi dengan desain modern dan harga terbaik.
                        Komitmen kami adalah memberikan pengalaman belanja yang nyaman,
                        cepat, dan terpercaya untuk seluruh pelanggan di Indonesia.
                    </p>
                </motion.div>

                {/* ================= STORY SECTION ================= */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <img
                            src="/sepatupng.png"
                            alt="Tentang Kami"
                            className="w-full max-w-md mx-auto drop-shadow-xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-slate-800">
                            Misi Kami
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Kami percaya bahwa sepatu bukan hanya alas kaki,
                            tetapi bagian dari gaya hidup. Karena itu kami
                            menghadirkan produk original dengan kualitas terbaik,
                            desain stylish, dan kenyamanan maksimal untuk
                            aktivitas sehari-hari hingga olahraga profesional.
                        </p>

                        <p className="text-slate-600 leading-relaxed">
                            Dengan sistem pengiriman cepat dan layanan pelanggan
                            responsif, kami memastikan setiap transaksi berjalan
                            aman dan memuaskan.
                        </p>
                    </motion.div>

                </div>

                {/* ================= FEATURES ================= */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center text-slate-800 mb-12"
                    >
                        Kenapa Memilih Kami?
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                icon: <FaMedal size={28} />,
                                title: "Produk Original",
                                desc: "Semua produk 100% original dan berkualitas tinggi.",
                            },
                            {
                                icon: <FaShippingFast size={28} />,
                                title: "Pengiriman Cepat",
                                desc: "Pengiriman cepat ke seluruh Indonesia dengan tracking real-time.",
                            },
                            {
                                icon: <FaHeadset size={28} />,
                                title: "Support 24/7",
                                desc: "Tim customer service siap membantu kapan saja.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-md text-center space-y-4 hover:shadow-xl transition"
                            >
                                <div className="text-indigo-600 flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-lg text-slate-800">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </div>

                {/* ================= CTA ================= */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-indigo-600 rounded-3xl py-16 px-8 text-center text-white"
                >
                    <FaStore size={40} className="mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">
                        Siap Menemukan Sepatu Impian Anda?
                    </h2>
                    <p className="mb-6 opacity-90">
                        Jelajahi koleksi terbaru kami sekarang dan temukan gaya terbaik Anda.
                    </p>
                    <a
                        href="/products"
                        className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-100 transition"
                    >
                        Lihat Produk
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default About;

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category?: string;
    brand?: string;
    rating?: number;
    stock?: number;
    quantity?: number; // Optional, can be used for cart functionality
}

export const products: Product[] = [
    {
        id: 1,
        name: "Nike Air Max 270",
        price: 1850000,
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1000",
        description: "Sepatu running dengan teknologi Air Max untuk kenyamanan maksimal.",
        category: "Running",
        brand: "Nike",
        rating: 4.8,
        stock: 15
    },
    {
        id: 2,
        name: "Adidas Ultraboost 22",
        price: 2350000,
        image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1000",
        description: "Boost technology untuk responsivitas terbaik saat berlari.",
        category: "Running",
        brand: "Adidas",
        rating: 4.9,
        stock: 10
    },
    {
        id: 3,
        name: "Converse Chuck Taylor All Star",
        price: 599000,
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1000",
        description: "Sepatu kanvas klasik yang timeless untuk gaya kasual.",
        category: "Casual",
        brand: "Converse",
        rating: 4.7,
        stock: 25
    },
    {
        id: 4,
        name: "Vans Old Skool",
        price: 849000,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000",
        description: "Sepatu skate ikonik dengan side stripe khas Vans.",
        category: "Skate",
        brand: "Vans",
        rating: 4.6,
        stock: 20
    },
    {
        id: 5,
        name: "New Balance 990v5",
        price: 2890000,
        image: "https://images.unsplash.com/photo-1539185445255-65325b67930b?q=80&w=1000",
        description: "Sepatu lifestyle premium dengan kenyamanan superior.",
        category: "Lifestyle",
        brand: "New Balance",
        rating: 4.8,
        stock: 8
    },
    {
        id: 6,
        name: "Puma RS-X³",
        price: 1590000,
        image: "https://images.unsplash.com/photo-1552347433-0548ce71f3dc?q=80&w=1000",
        description: "Desain chunky sneakers dengan warna kontras yang eye-catching.",
        category: "Fashion",
        brand: "Puma",
        rating: 4.5,
        stock: 12
    },
    {
        id: 7,
        name: "Reebok Classic Leather",
        price: 899000,
        image: "https://images.unsplash.com/photo-1584735175095-8e6c5c44d2a1?q=80&w=1000",
        description: "Desain minimalis yang elegan untuk segala acara.",
        category: "Casual",
        brand: "Reebok",
        rating: 4.6,
        stock: 18
    },
    {
        id: 8,
        name: "Nike Air Jordan 1 Mid",
        price: 2250000,
        image: "https://images.unsplash.com/photo-1552347433-1562b4f7b7d7?q=80&w=1000",
        description: "Ikon basket yang menjadi fashion statement.",
        category: "Basket",
        brand: "Jordan",
        rating: 4.9,
        stock: 6
    },
    {
        id: 9,
        name: "Adidas Stan Smith",
        price: 1199000,
        image: "https://images.unsplash.com/photo-1571731958679-4227c8c88be6?q=80&w=1000",
        description: "Desain简约 dengan kulit premium yang timeless.",
        category: "Casual",
        brand: "Adidas",
        rating: 4.7,
        stock: 22
    },
    {
        id: 10,
        name: "Asics Gel-Kayano 28",
        price: 2150000,
        image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1000",
        description: "Sepatu running dengan teknologi GEL untuk stabilisasi maksimal.",
        category: "Running",
        brand: "Asics",
        rating: 4.8,
        stock: 14
    },
    {
        id: 11,
        name: "Hoka Clifton 8",
        price: 1999000,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000",
        description: "Max cushioning untuk kenyamanan lari jarak jauh.",
        category: "Running",
        brand: "Hoka",
        rating: 4.7,
        stock: 11
    },
    {
        id: 12,
        name: "Diadora N9000",
        price: 1799000,
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1000",
        description: "Italian heritage sneakers dengan bahan premium.",
        category: "Lifestyle",
        brand: "Diadora",
        rating: 4.5,
        stock: 9
    },
    {
        id: 13,
        name: "Saucony Shadow 5000",
        price: 1699000,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000",
        description: "Retro runner dengan warna-warna klasik.",
        category: "Retro",
        brand: "Saucony",
        rating: 4.6,
        stock: 13
    },
    {
        id: 14,
        name: "Fila Disruptor II",
        price: 999000,
        image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=1000",
        description: "Chunky sneakers dengan platform tebal yang stylish.",
        category: "Fashion",
        brand: "Fila",
        rating: 4.4,
        stock: 17
    },
    {
        id: 15,
        name: "Nike Air Force 1 '07",
        price: 1599000,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000",
        description: "Sepatu basket legendaris yang jadi ikon streetwear.",
        category: "Casual",
        brand: "Nike",
        rating: 4.8,
        stock: 30
    },
    {
        id: 16,
        name: "Adidas NMD R1",
        price: 1999000,
        image: "https://images.unsplash.com/photo-1584735175095-8e6c5c44d2a1?q=80&w=1000",
        description: "Sepatu modern dengan desain futuristik.",
        category: "Lifestyle",
        brand: "Adidas",
        rating: 4.6,
        stock: 16
    },
    {
        id: 17,
        name: "Puma Suede Classic",
        price: 799000,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000",
        description: "Sepatu suede ikonik dari era 70-an.",
        category: "Casual",
        brand: "Puma",
        rating: 4.5,
        stock: 24
    },
    {
        id: 18,
        name: "Reebok Club C 85",
        price: 849000,
        image: "https://images.unsplash.com/photo-1539185445255-65325b67930b?q=80&w=1000",
        description: "Tennis shoes klasik yang nyaman untuk daily wear.",
        category: "Casual",
        brand: "Reebok",
        rating: 4.6,
        stock: 19
    },
    {
        id: 19,
        name: "Mizuno Wave Rider 25",
        price: 1899000,
        image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1000",
        description: "Sepatu running dengan teknologi Wave Plate.",
        category: "Running",
        brand: "Mizuno",
        rating: 4.7,
        stock: 8
    },
    {
        id: 20,
        name: "Bata Sneakers Heritage",
        price: 399000,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000",
        description: "Sepatu lokal dengan kualitas ekspor, nyaman untuk sehari-hari.",
        category: "Local Brand",
        brand: "Bata",
        rating: 4.3,
        stock: 35
    }
];

// Optional: Export fungsi helper untuk memfilter produk
// export const getProductsByCategory = (category: string) => {
//     return products.filter(product => product.category === category);
// };

// export const getProductsByBrand = (brand: string) => {
//     return products.filter(product => product.brand === brand);
// };

// export const getProductsByPriceRange = (min: number, max: number) => {
//     return products.filter(product => product.price >= min && product.price <= max);
// };

// export const searchProducts = (query: string) => {
//     const lowercaseQuery = query.toLowerCase();
//     return products.filter(product =>
//         product.name.toLowerCase().includes(lowercaseQuery) ||
//         product.description.toLowerCase().includes(lowercaseQuery) ||
//         product.brand?.toLowerCase().includes(lowercaseQuery)
//     );
// };
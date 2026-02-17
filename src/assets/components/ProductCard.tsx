import { Link } from "react-router-dom";
import type { Product } from "../data/products";

interface Props {
  product: Product;
}


const ProductCard = ({ product }: Props) => {


  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-2">
          Rp {product.price.toLocaleString()}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Detail
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

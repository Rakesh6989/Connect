import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProductCard = ({ product, isWishlisted, onWishlistToggle, onClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:scale-105 duration-300 relative">
      {/* Wishlist Icon */}
      <button
        className="absolute top-2 right-2 text-red-500 z-10"
        onClick={(e) => {
          e.stopPropagation(); // prevent opening modal
          onWishlistToggle(product.id);
        }}
      >
        {isWishlisted ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="w-full h-52 object-cover"
        onClick={onClick}
      />

      <div className="p-4" onClick={onClick}>
        <h3 className="text-lg font-semibold mb-1 truncate">{product.title}</h3>
        <p className="text-gray-500 text-sm mb-2">{product.category}</p>

        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold text-md">₹{product.price}</span>
          <span
            className={`text-xs px-2 py-1 rounded ${
              product.inStock ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Ratings and Preview */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-yellow-600">⭐ {product.rating}</span>
          <VisibilityIcon className="text-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

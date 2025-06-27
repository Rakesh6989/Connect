import CloseIcon from "@mui/icons-material/Close";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg max-w-xl w-full relative p-6"
        onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <CloseIcon />
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />

        {/* Product Info */}
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 text-sm mb-2">{product.category}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>

        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-blue-600">
            ₹{product.price}
          </span>
          <span
            className={`text-sm font-medium px-3 py-1 rounded ${
              product.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-yellow-600 text-sm">⭐ {product.rating}</span>
          <span className="text-sm text-gray-400">ID: {product.id}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            onClick={() => alert("Proceed to Buy Now (demo only)")}
          >
            Buy Now
          </button>
          <button
            className="flex-1 bg-gray-800 hover:bg-black text-white py-2 rounded-lg"
            onClick={() => alert("Added to Cart (demo only)")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

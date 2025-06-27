import { useState } from "react";
import FilterSidebar from "../Components/FilterSidebar";
import ProductCard from "../Components/ProductCard";
import ProductModal from "../Components/ProductModal";

const dummyProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 1499,
    image: "https://source.unsplash.com/400x300/?headphones",
    rating: 4.5,
    inStock: true,
    description: "High-quality noise-cancelling headphones.",
  },
  {
    id: 2,
    title: "Fitness Smartwatch",
    category: "Wearables",
    price: 2999,
    image: "https://source.unsplash.com/400x300/?watch",
    rating: 4.2,
    inStock: false,
    description: "Track your health and fitness goals.",
  },
  // Add more products
];

const Marketplace = () => {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [filters, setFilters] = useState({ category: "All", maxPrice: 10000 });

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  const filteredProducts = dummyProducts.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filters.category === "All" || p.category === filters.category;
    const matchesPrice = p.price <= filters.maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6">
        {/* Filters */}
        <FilterSidebar filters={filters} setFilters={setFilters} />

        <div className="flex-1">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4 shadow-sm"
          />

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onWishlistToggle={toggleWishlist}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-10">No products found.</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default Marketplace;

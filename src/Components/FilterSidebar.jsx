const categories = ["All", "Electronics", "Wearables", "Furniture", "Clothing", "Books"];

const FilterSidebar = ({ filters, setFilters }) => {
  const handleCategoryChange = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  const handlePriceChange = (e) => {
    setFilters((prev) => ({ ...prev, maxPrice: parseInt(e.target.value) }));
  };

  const resetFilters = () => {
    setFilters({ category: "All", maxPrice: 10000 });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full lg:w-1/4">
      <h3 className="text-xl font-bold mb-4 text-gray-700">🔍 Filters</h3>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Category
        </label>
        <select
          value={filters.category}
          onChange={handleCategoryChange}
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Max Price: ₹{filters.maxPrice}
        </label>
        <input
          type="range"
          min={0}
          max={10000}
          step={100}
          value={filters.maxPrice}
          onChange={handlePriceChange}
          className="w-full"
        />
      </div>

      <button
        onClick={resetFilters}
        className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;

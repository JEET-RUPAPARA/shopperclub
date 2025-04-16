import { useContext, useState, useEffect, useRef } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const context = useContext(myContext);
  const { getAllProduct } = context;
  
  // Search State
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef(null);
  
  // Filter Search Data with debounce effect
  const filterSearchData = getAllProduct
    .filter((obj) => obj.title.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 8);
  
  const navigate = useNavigate();
  
  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Debounce search input
  useEffect(() => {
    if (search) {
      setLoading(true);
      const debounceTimer = setTimeout(() => {
        setShowDropdown(true);
        setLoading(false);
      }, 500);
      
      return () => clearTimeout(debounceTimer);
    } else {
      setShowDropdown(false);
    }
  }, [search]);
  
  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?query=${encodeURIComponent(search)}`);
      setShowDropdown(false);
    }
  };
  
  // Navigate to product
  const handleProductClick = (productId) => {
    navigate(`/productinfo/${productId}`);
    setShowDropdown(false);
    setSearch("");
  };
  
  return (
    <div className="relative" ref={searchRef}>
      {/* search form */}
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className="input flex items-center relative">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-100 border border-gray-300 rounded-full px-4 py-2 w-full md:w-96 lg:w-96 outline-none text-gray-700 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
            aria-label="Search products"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-2 mr-4 text-gray-500 hover:text-pink-600 transition-colors"
            aria-label="Search"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            )}
          </button>
        </div>
      </form>
      
      {/* search dropdown results */}
      {showDropdown && (
        <div className="absolute bg-white w-full mt-1 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto border border-gray-200">
          {filterSearchData.length > 0 ? (
            <>
              <h3 className="text-sm font-medium text-gray-500 px-4 py-2 border-b">
                Search Results
              </h3>
              
              {filterSearchData.map((item, index) => (
                <div 
                  key={index} 
                  className={`py-3 px-4 cursor-pointer hover:bg-gray-50 flex items-center gap-3 ${
                    index < filterSearchData.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                  onClick={() => handleProductClick(item.id)}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded overflow-hidden">
                    <img 
                      className="w-full h-full object-cover" 
                      src={item.productImageUrl} 
                      alt={item.title} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/50?text=E-Bharat";
                      }}
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {item.title}
                    </p>
                    {item.price && (
                      <p className="text-sm text-pink-600 font-semibold">
                        ₹{item.price.toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="px-4 py-3 border-t border-gray-100">
                <button 
                  onClick={() => navigate(`/search?query=${encodeURIComponent(search)}`)}
                  className="text-sm text-center w-full text-pink-600 hover:text-pink-700 font-medium"
                >
                  View all results
                </button>
              </div>
            </>
          ) : (
            <div className="py-8 px-4">
              <div className="flex flex-col items-center justify-center">
                <img 
                  className="w-16 h-16 mb-3" 
                  src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" 
                  alt="No results" 
                />
                <p className="text-gray-500 text-center">
                  No products found for "{search}"
                </p>
                <p className="text-gray-400 text-center text-sm mt-1">
                  Try using different keywords or browse our categories
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
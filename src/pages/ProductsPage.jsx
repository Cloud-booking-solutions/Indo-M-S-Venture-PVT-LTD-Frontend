
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useProducts } from "../contexts/ProductsContext";

const ProductsPage = () => {
  const location = useLocation();
  const { products, isLoading } = useProducts();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "import";
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const category = queryParams.get("category") || "import";
    setActiveCategory(category);
  }, [location.search]);

  useEffect(() => {
    // Filter products based on search query
    if (products && products[activeCategory]) {
      const filtered = products[activeCategory].filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products, activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchQuery("");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[450px] flex items-center justify-center">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url(https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwaWNlc3xlbnwwfHwwfHx8MA%3D%3D)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
  <div className="container relative z-10 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
    <p className="text-xl text-white max-w-2xl mx-auto">
      Discover our premium collection of authentic spices
    </p>
  </div>
</section>


      {/* Category Navigation */}
      <section className="bg-spice-50 py-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Button
                variant={activeCategory === "import" ? "default" : "outline"}
                className={activeCategory === "import" ? "bg-spice-600" : ""}
                onClick={() => handleCategoryChange("import")}
              >
                Import Products
              </Button>
              <Button
                variant={activeCategory === "export" ? "default" : "outline"}
                className={activeCategory === "export" ? "bg-spice-600" : ""}
                onClick={() => handleCategoryChange("export")}
              >
                Export Products
              </Button>
            </div>
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-container bg-white">
        <h2 className="text-3xl font-bold mb-8">
          {activeCategory === "import" ? "Import Products" : "Export Products"}
        </h2>
        
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-spice-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading products...</p>
            </div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No products found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                to={`/products/${product.category}/${product._id || product.id}`}
                key={product._id || product.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-spice-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500">
                    {product.description.substring(0, 80)}...
                  </p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-spice-600 text-sm font-medium">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-spice-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is ready to provide detailed specifications, pricing, and availability for any product you're interested in.
          </p>
          <Link to="/contact">
            <Button className="bg-spice-600 hover:bg-spice-700">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

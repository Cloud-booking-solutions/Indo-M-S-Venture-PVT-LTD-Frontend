import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProducts } from "../contexts/ProductsContext";

const ProductDetailPage = () => {
  const { category, id } = useParams();
  const { getProduct, isLoading } = useProducts();
  const navigate = useNavigate();
  
  const product = getProduct(id, category);
  
  useEffect(() => {
    // If product not found and not loading, redirect to products page
    if (!isLoading && !product) {
      navigate("/products");
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [product, navigate, isLoading]);
  
  if (isLoading) {
    return (
      <div className="section-container bg-white flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-spice-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="section-container bg-white">
      <div className="mb-6">
        <Link to="/products" className="flex items-center text-spice-600 hover:text-spice-800 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to Products</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div>
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-spice-100 text-spice-700 rounded-full">
            {category === "import" ? "Import Product" : "Export Product"}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-spice-900 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-8">{product.description}</p>
          
          <div className="bg-spice-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-3">Product Highlights</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-spice-600">✓</span>
                <span>Premium quality, directly sourced</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-spice-600">✓</span>
                <span>100% authentic and pure</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-spice-600">✓</span>
                <span>Available in various packaging options</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-spice-600">✓</span>
                <span>Competitive pricing for bulk orders</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <Button className="bg-spice-600 hover:bg-spice-700">Request Quotation</Button> */}
            <Link to="/contact">
              <Button variant="outline" className="border-spice-600 text-spice-600 hover:bg-spice-50">
                Contact Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Related Information */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Product Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-spice-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Origin</h3>
            <p className="text-gray-700">Sourced from the finest growing regions known for their optimal soil conditions and climate.</p>
          </div>
          <div className="bg-spice-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Quality Control</h3>
            <p className="text-gray-700">Undergoes rigorous testing for purity, aroma, and flavor before packaging and export.</p>
          </div>
          <div className="bg-spice-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Packaging Options</h3>
            <p className="text-gray-700">Available in various sizes from retail-ready packaging to bulk options for industrial use.</p>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-16 bg-spice-600 text-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Interested in this product?</h3>
            <p className="text-lg">Our team is ready to answer any questions and provide a custom quote.</p>
          </div>
          <Link to="/contact" className="mt-4 md:mt-0">
            <Button className="bg-white text-spice-600 hover:bg-gray-100">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

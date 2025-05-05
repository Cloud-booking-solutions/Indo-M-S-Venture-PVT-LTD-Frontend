
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "../contexts/AuthContext";
import { useProducts } from "../contexts/ProductsContext";
import { Trash2, Edit, Plus, LogOut, Save } from "lucide-react";

const AdminPage = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { products, addProduct, updateProduct, deleteProduct, isLoading } = useProducts();
  const navigate = useNavigate();
  
  const [activeCategory, setActiveCategory] = useState("import");
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    category: "import",
  });
  
  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setFormData(prev => ({
      ...prev,
      category: category
    }));
  };
  
  const handleAddProduct = async (e) => {
    e.preventDefault();
    
    try {
      if (editingProduct) {
        // Update existing product
        await updateProduct({
          ...formData,
          _id: editingProduct._id, // Use MongoDB _id
        });
        setEditingProduct(null);
      } else {
        // Add new product
        await addProduct(formData);
      }
      
      // Reset form
      setFormData({
        name: "",
        description: "",
        image: "",
        category: activeCategory,
      });
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };
  
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      image: product.image,
      category: product.category,
    });
  };
  
  const handleDeleteProduct = async (id, category) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id, category);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };
  
  const handleCancelEdit = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      description: "",
      image: "",
      category: activeCategory,
    });
  };
  
  // If not authenticated, don't render anything (will redirect in useEffect)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="section-container bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-spice-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome to the admin dashboard</p>
        </div>
        <Button variant="ghost" className="mt-4 md:mt-0" onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" /> Sign Out
        </Button>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-spice-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading products...</p>
          </div>
        </div>
      ) : (
        <Tabs defaultValue="import" onValueChange={handleCategoryChange}>
          <TabsList className="mb-8">
            <TabsTrigger value="import">Import Products</TabsTrigger>
            <TabsTrigger value="export">Export Products</TabsTrigger>
          </TabsList>
          
          <TabsContent value="import">
            <AdminProductsTab
              categoryProducts={products.import}
              activeCategory="import"
              formData={formData}
              editingProduct={editingProduct}
              handleInputChange={handleInputChange}
              handleAddProduct={handleAddProduct}
              handleEditProduct={handleEditProduct}
              handleDeleteProduct={handleDeleteProduct}
              handleCancelEdit={handleCancelEdit}
            />
          </TabsContent>
          
          <TabsContent value="export">
            <AdminProductsTab
              categoryProducts={products.export}
              activeCategory="export"
              formData={formData}
              editingProduct={editingProduct}
              handleInputChange={handleInputChange}
              handleAddProduct={handleAddProduct}
              handleEditProduct={handleEditProduct}
              handleDeleteProduct={handleDeleteProduct}
              handleCancelEdit={handleCancelEdit}
            />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

const AdminProductsTab = ({
  categoryProducts,
  activeCategory,
  formData,
  editingProduct,
  handleInputChange,
  handleAddProduct,
  handleEditProduct,
  handleDeleteProduct,
  handleCancelEdit,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Product Form */}
      <div className="lg:col-span-1 bg-spice-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">
          {editingProduct ? "Edit Product" : "Add New Product"}
        </h2>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <input type="hidden" name="category" value={activeCategory} />
          
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Product Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="e.g. Black Pepper"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="image" className="text-sm font-medium">
              Image URL
            </label>
            <Input
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              required
              placeholder="https://example.com/image.jpg"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              placeholder="Product description..."
              rows={5}
            />
          </div>
          
          <div className="flex space-x-2">
            <Button type="submit" className="bg-spice-600 hover:bg-spice-700 flex-1">
              {editingProduct ? (
                <>
                  <Save className="mr-2 h-4 w-4" /> Update Product
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" /> Add Product
                </>
              )}
            </Button>
            
            {editingProduct && (
              <Button type="button" variant="outline" onClick={handleCancelEdit}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </div>
      
      {/* Products List */}
      <div className="lg:col-span-2">
        <h2 className="text-xl font-bold mb-4">
          {activeCategory === "import" ? "Import Products" : "Export Products"} ({categoryProducts.length})
        </h2>
        
        <div className="bg-white border rounded-lg overflow-hidden">
          {categoryProducts.length === 0 ? (
            <p className="p-6 text-center text-gray-500">
              No products available. Add your first product using the form.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {categoryProducts.map((product) => (
                    <tr key={product._id || product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-12 w-12 object-cover rounded"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500 line-clamp-2">
                          {product.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditProduct(product)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Edit size={16} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteProduct(product._id || product.id, product.category)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

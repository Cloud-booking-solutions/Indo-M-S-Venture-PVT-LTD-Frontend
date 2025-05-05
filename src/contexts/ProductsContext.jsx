
import { createContext, useState, useContext, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { fetchProducts, createProduct, updateProduct, deleteProduct as deleteProductAPI } from "../services/productService";

// Sample product data as fallback
const sampleProducts = {
  import: [
    {
      id: "imp-1",
      name: "Black Pepper",
      description: "Aromatic, pungent black pepper sourced from Vietnam, known for its strong flavor and health benefits.",
      image: "https://images.unsplash.com/photo-1518477871634-5442d53091ed?q=80&w=2670&auto=format&fit=crop",
      category: "import"
    },
    {
      id: "imp-2",
      name: "Cinnamon",
      description: "Premium quality Sri Lankan cinnamon with a sweet, woody flavor perfect for both sweet and savory dishes.",
      image: "https://images.unsplash.com/photo-1599587897983-d13c7cc89f58?q=80&w=2670&auto=format&fit=crop",
      category: "import"
    },
    {
      id: "imp-3",
      name: "Star Anise",
      description: "Beautiful star-shaped spice from China with a strong licorice flavor, essential in Asian cooking.",
      image: "https://images.unsplash.com/photo-1620574387735-3624d75e4a5f?q=80&w=2274&auto=format&fit=crop",
      category: "import"
    },
    {
      id: "imp-4",
      name: "Saffron",
      description: "The world's most expensive spice, sourced from Iran, offering a distinctive flavor and golden color to dishes.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821eec95d8?q=80&w=2670&auto=format&fit=crop",
      category: "import"
    },
  ],
  export: [
    {
      id: "exp-1",
      name: "Turmeric",
      description: "Vibrant yellow Indian turmeric known for its earthy flavor and medicinal properties, perfect for curries and health beverages.",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2670&auto=format&fit=crop",
      category: "export"
    },
    {
      id: "exp-2",
      name: "Cardamom",
      description: "Aromatic green cardamom pods from Kerala, prized for their intense, slightly sweet flavor in both sweet and savory dishes.",
      image: "https://images.unsplash.com/photo-1638829214157-64959bf58bbd?q=80&w=2574&auto=format&fit=crop",
      category: "export"
    },
    {
      id: "exp-3",
      name: "Cloves",
      description: "Intensely aromatic dried flower buds from the Moluccas, used in Indian, Middle Eastern, and Western cuisines.",
      image: "https://images.unsplash.com/photo-1638828004052-a8bfbdd1d4c5?q=80&w=2670&auto=format&fit=crop",
      category: "export"
    },
    {
      id: "exp-4",
      name: "Cumin",
      description: "Earthy, nutty cumin seeds cultivated in Gujarat, an essential spice in countless global cuisines.",
      image: "https://images.unsplash.com/photo-1596792475591-33e4a301e802?q=80&w=2670&auto=format&fit=crop",
      category: "export"
    },
  ]
};

const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({ import: [], export: [] });
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Load products from API on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const productsFromAPI = await fetchProducts();
        
        // Group products by category
        const groupedProducts = {
          import: productsFromAPI.filter(product => product.category === "import"),
          export: productsFromAPI.filter(product => product.category === "export")
        };
        
        setProducts(groupedProducts);
      } catch (error) {
        console.error("Failed to load products:", error);
        // Fallback to sample data if API fails
        setProducts(sampleProducts);
        toast({
          title: "Connection Error",
          description: "Using sample data. Check your backend connection.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProducts();
  }, [toast]);

  const addProduct = async (productData) => {
    try {
      const newProduct = await createProduct(productData);
      
      // Update local state
      setProducts(prevProducts => ({
        ...prevProducts,
        [productData.category]: [...prevProducts[productData.category], newProduct]
      }));
      
      return newProduct;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  };

  const updateProductState = async (productData) => {
    try {
      const { _id, category } = productData;
      const updatedProduct = await updateProduct(_id, productData);
      
      // Update local state
      setProducts(prevProducts => ({
        ...prevProducts,
        [category]: prevProducts[category].map(product => 
          product._id === _id ? updatedProduct : product
        )
      }));
      
      return updatedProduct;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  };

  const deleteProductState = async (id, category) => {
    try {
      await deleteProductAPI(id);
      
      // Update local state
      setProducts(prevProducts => ({
        ...prevProducts,
        [category]: prevProducts[category].filter(product => product._id !== id)
      }));
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  };

  const getProduct = (id, category) => {
    return products[category]?.find(product => product._id === id || product.id === id) || null;
  };

  const value = {
    products,
    isLoading,
    addProduct,
    updateProduct: updateProductState,
    deleteProduct: deleteProductState,
    getProduct,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === null) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

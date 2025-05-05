import { toast } from "@/components/ui/use-toast";


const API_URL = "https://indo-m-and-s-venture-pvt-ltd.onrender.com/api/products"; 

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    toast({
      title: "Error",
      description: "Failed to fetch products from server",
      variant: "destructive",
    });
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    toast({
      title: "Success",
      description: `${productData.name} has been added successfully.`,
    });
    
    return data;
  } catch (error) {
    console.error("Error creating product:", error);
    toast({
      title: "Error",
      description: "Failed to add product",
      variant: "destructive",
    });
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    toast({
      title: "Success",
      description: `${productData.name} has been updated successfully.`,
    });
    
    return data;
  } catch (error) {
    console.error("Error updating product:", error);
    toast({
      title: "Error",
      description: "Failed to update product",
      variant: "destructive",
    });
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    toast({
      title: "Success",
      description: "Product has been deleted successfully.",
    });
    
    return data;
  } catch (error) {
    console.error("Error deleting product:", error);
    toast({
      title: "Error",
      description: "Failed to delete product",
      variant: "destructive",
    });
    throw error;
  }
};

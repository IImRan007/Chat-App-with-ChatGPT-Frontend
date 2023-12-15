import axios from "axios";

const API_URL = "http://localhost:8000/api/product/";

// Create Product
export const createProduct = async (productData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(API_URL, productData, config);
    console.log("product-response", response);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Get Product
export const getSingleProduct = async (productId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(API_URL + productId, config);
    console.log("Product-response", response);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Get All Products
export const getAllProducts = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(API_URL + "all", config);
    console.log("All-Product-response", response);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Update Product
export const updateProduct = async (productId, productData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.put(API_URL + productId, productData, config);
    console.log("Update-Product-response", response);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Delete Product
export const deleteProduct = async (productId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(API_URL + productId, config);
    console.log("Delete-Product-response", response);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// import productData from "utils/products";
// import requests from "./httpService";

// const ProductServices = {
//   getAllProducts: async (
//     // {page, limit, category, title, price }
//   ) => {
//     // const searchCategory = category !== null ? category : "";
//     // const searchTitle = title !== null ? title : "";
//     // const searchPrice = price !== null ? price : "";

//     // return requests.get(
//     //   `/products?page=${page}&limit=${limit}&category=${searchCategory}&title=${searchTitle}&price=${searchPrice}`
//     // );
//     return (
//       { products: [{ _id: 1, title: { en: "Samsung" }, prices: { price: 120, discount: 10, originalPrice: 108 }, stock: 10, description: 'description', tag: 'none', category: { name: 'Phones' }, image: ['none'], status: 'none' }] }
//     );
//   },

//   getProductById: async (id) => {
//     // return requests.post(`/products/${id}`);  return (
//     // return ({ _id: 1, title: { en: "Samsung" }, prices: { price: 120, discount: 10, originalPrice: 108 }, stock: 10, description: 'description', tag: 'none', category: { name: 'Phones' }, image: ['none'], status: 'none' }
//     // );
//     try {
//       // Find the product with the specified ID in the productData array
//       const product = productData.find(product => product._id === id);
//       if (product) {
//         return { success: true, data: product };
//       } else {
//         return { success: false, message: "Product not found" };
//       }
//     } catch (error) {
//       return { success: false, message: "Failed to fetch product" };
//     }
//   },
//   // addProduct: async (body) => {
//   //   return requests.post("/products/add", body);
//   // },
//   addProduct: async (body) => {
//     try {
//       console.log("Adding product:", body);
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       productData.push(body);
//       return { success: true, message: "Product added successfully" };
//     } catch (error) {
//       return { success: false, message: "Failed to add product" };
//     }
//   },

//   // deleteProduct: async (id) => {
//   //   try {
//   //     console.log("Deleting product with ID:", id);
//   //     await new Promise(resolve => setTimeout(resolve, 1000));
//   //     const updatedProducts = productData.filter(product => product._id !== id);
//   //     productData.length = 0;
//   //     updatedProducts.forEach(product => productData.push(product));
//   //     return { success: true, message: "Product deleted successfully" };
//   //   } catch (error) {
//   //     return { success: false, message: "Failed to delete product" };
//   //   }
//   // },
//   addAllProducts: async (body) => {
//     return requests.post("/products/all", body);
//   },
//   updateProduct: async (id, body) => {
//     return requests.patch(`/products/${id}`, body);
//   },
//   updateManyProducts: async (body) => {
//     return requests.patch("products/update/many", body);
//   },
//   updateStatus: async (id, body) => {
//     return requests.put(`/products/status/${id}`, body);
//   },

//   // for now commeneted uncomment for backend integration

//   // deleteProduct: async (id) => {
//   //   return requests.delete(`/products/${id}`);
//   // },

//   deleteProduct: async (id) => {
//     try {
//       console.log("Deleting product with ID:", id);
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       const updatedProducts = productData.filter(product => product._id !== id);
//       productData.length = 0;
//       updatedProducts.forEach(product => productData.push(product));
//       return { success: true, message: "Product deleted successfully" };
//     } catch (error) {
//       return { success: false, message: "Failed to delete product" };
//     }
//   },

//   // for now commeneted uncomment for backend integration

//   // deleteManyProducts: async (body) => {
//   //   return requests.patch("/products/delete/many", body);
//   // },
//   deleteManyProducts: async (body) => {
//     console.log("Request Body:", body);
//     const { ids } = body;
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       const updatedProducts = productData.filter(product => !ids.includes(product._id));
//       productData.length = 0;
//       updatedProducts.forEach(product => productData.push(product));
//       return { success: true, message: "Products deleted successfully", data: updatedProducts };
//     } catch (error) {
//       return { success: false, message: "Failed to delete products" };
//     }
//   }
// };

// export default ProductServices;




// new backendss addedds

// import requests from './httpService';
// import io from "socket.io-client";

// // Create a socket connection to the server
// const socket = io("http://localhost:5055");
// const ProductServices = {
//   getAllProducts: async () => {
//     return requests.get("/api/products");
//   },

//   //  just added for slugss
//   //  updated the routes as well heree for now
//   getProductById: async (id) => {
//     return requests.get(`/api/products/product/${id}`);
//   },

//   //  just added for slugss

//   getProductBySlug: async (slug) => {
//     return requests.get(`/api/products/product/${slug}`);
//   },

//   addProduct: async (body) => {
//     return requests.post("/api/products/add", body);
//   },

//   addAllProducts: async (body) => {
//     return requests.post("/api/products/all", body);
//   },

//   updateProduct: async (id, body) => {
//     console.log("ids and bodyy : ", id, body)
//     return requests.patch(`/api/products/${id}`, body);
//   },

//   updateManyProducts: async (body) => {
//     return requests.patch("/api/products/update/many", body);
//   },

//   // updateStatus: async (id, body) => {
//   //   return requests.put(`/api/products/status/${id}`, body);
//   // },

//   updateStatus: async (id, body) => {
//     // Make the HTTP request to update the status
//     const response = await requests.put(`/api/products/status/${id}`, body);

//     // If the HTTP request is successful, emit a status update event to the server
//     if (response.status === 200) {
//       socket.emit("updateStatus", id, body.status);
//     }

//     return response;
//   },

//   // Method for subscribing to product status updates
//   subscribeToStatusUpdates: (callback) => {
//     // Listen for status updates from the server
//     socket.on("statusUpdate", callback);
//   },

//   // Method for unsubscribing from status updates
//   unsubscribeFromStatusUpdates: () => {
//     // Remove the event listener for status updates
//     socket.off("statusUpdate");
//   },

//   deleteProduct: async (id) => {
//     return requests.delete(`/api/products/${id}`);
//   },

//   deleteManyProducts: async (body) => {
//     return requests.patch("/api/products/delete/many", body);
//   },
//   // New methods for handling product reviews
//   addReview: async (productId, review) => {
//     console.log("id", productId);
//     console.log("review", review);
//     return requests.post(`/api/products/${productId}/reviews`, review);
//   },

//   // updateReview: async (productId, reviewId, review) => {
//   //   return requests.patch(`/api/products/${productId}/reviews/${reviewId}`, review);
//   // },

//   // deleteReview: async (productId, reviewId) => {
//   //   return requests.delete(`/api/products/${productId}/reviews/${reviewId}`);
//   // },

//   updateReview: async (productId, reviewId, review) => {
//     // console.log("Review updated successfully:", productId, reviewId, review);
//     try {
//       const response = await requests.patch(`/api/products/${productId}/reviews/${reviewId}`, review);
//       console.log("Review updated successfully:", response);
//       return response;
//     } catch (error) {
//       console.error("Error updating review:", error.message);
//       throw error;
//     }
//   },

//   deleteReview: async (reviewId) => {
//     console.log("Review to be deleted:", reviewId);
//     try {
//       const response = await requests.delete(`/api/products/reviews/${reviewId}`);
//       console.log("Review deleted successfully:", response);
//       return response;
//     } catch (error) {
//       console.error("Error deleting review:", error.message);
//       throw error;
//     }
//   },

//   getRatingsForProduct: async (productId) => {
//     try {
//       const response = await requests.get(`/api/products/${productId}/ratings`);
//       console.log("=========================", response);
//       return response;
//     } catch (error) {
//       console.error("Error fetching ratings:", error.message);
//       throw error;
//     }
//   },

//   setPaymentMethod: async (method, userId) => {
//     console.log("hey", method)
//     console.log("hi", userId)
//     try {
//       const { icon, ...methodData } = method;
//       const response = await requests.post(`/api/products/${userId}/payment`, methodData);
//       console.log("Response from server:", response.data);
//       return response;
//     } catch (error) {
//       console.error("Error setting default payment method:", error);
//       throw error;
//     }
//   },

//   addAddress: async (address, userId) => {
//     console.log("address", address);
//     console.log("id", userId);
//     return requests.post(`/api/products/${userId}/address`, { address });
//   },
//   getAddressByUserId: async (userId) => {
//     try {
//       const response = await requests.get(`/api/products/${userId}/address`);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching address:", error.message);
//       throw error;
//     }
//   },

//   getPaymentMethodByProductId: async (productId) => {
//     console.log("Fetching payment methods for product ID:", productId);
//     try {
//       const response = await requests.get(`/api/products/${productId}/payment`);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching payment method:", error.message);
//       throw error;
//     }
//   }

// };

// export default ProductServices;



// Above One works perfectly finess


import requests from './httpService';
import io from "socket.io-client";

// Create a socket connection to the server
// const socket = io("http://localhost:5055");
const ProductServices = {
  getAllProducts: async () => {
    return requests.get("/api/products");
  },

  //  just added for slugss
  //  updated the routes as well heree for now
  getProductById: async (id) => {
    return requests.get(`/api/products/product/${id}`);
  },

  //  just added for slugss

  getProductBySlug: async (slug) => {
    return requests.get(`/api/products/product/${slug}`);
  },

  addProduct: async (body) => {
    return requests.post("/api/products/add", body);
  },

  addAllProducts: async (body) => {
    return requests.post("/api/products/all", body);
  },

  updateProduct: async (id, body) => {
    console.log("ids and bodyy : ", id, body)
    return requests.patch(`/api/products/${id}`, body);
  },

  updateManyProducts: async (body) => {
    return requests.patch("/api/products/update/many", body);
  },

  // updateStatus: async (id, body) => {
  //   return requests.put(`/api/products/status/${id}`, body);
  // },

  // updateStatus: async (id, body) => {
  //   // Make the HTTP request to update the status
  //   const response = await requests.put(`/api/products/status/${id}`, body);

  //   // If the HTTP request is successful, emit a status update event to the server
  //   if (response.status === 200) {
  //     socket.emit("updateStatus", id, body.status);
  //   }

  //   return response;
  // },

  // Method for subscribing to product status updates
  // subscribeToStatusUpdates: (callback) => {
  //   // Listen for status updates from the server
  //   socket.on("statusUpdate", callback);
  // },

  // // Method for unsubscribing from status updates
  // unsubscribeFromStatusUpdates: () => {
  //   // Remove the event listener for status updates
  //   socket.off("statusUpdate");
  // },

  deleteProduct: async (id) => {
    return requests.delete(`/api/products/${id}`);
  },

  deleteManyProducts: async (body) => {
    return requests.patch("/api/products/delete/many", body);
  },
  // New methods for handling product reviews
  addReview: async (productId, review) => {
    console.log("id", productId);
    console.log("review", review);
    return requests.post(`/api/products/${productId}/reviews`, review);
  },

  // updateReview: async (productId, reviewId, review) => {
  //   return requests.patch(`/api/products/${productId}/reviews/${reviewId}`, review);
  // },

  // deleteReview: async (productId, reviewId) => {
  //   return requests.delete(`/api/products/${productId}/reviews/${reviewId}`);
  // },

  updateReview: async (productId, reviewId, review) => {
    // console.log("Review updated successfully:", productId, reviewId, review);
    try {
      const response = await requests.patch(`/api/products/${productId}/reviews/${reviewId}`, review);
      console.log("Review updated successfully:", response);
      return response;
    } catch (error) {
      console.error("Error updating review:", error.message);
      throw error;
    }
  },

  deleteReview: async (reviewId) => {
    console.log("Review to be deleted:", reviewId);
    try {
      const response = await requests.delete(`/api/products/reviews/${reviewId}`);
      console.log("Review deleted successfully:", response);
      return response;
    } catch (error) {
      console.error("Error deleting review:", error.message);
      throw error;
    }
  },

  getRatingsForProduct: async (productId) => {
    try {
      const response = await requests.get(`/api/products/${productId}/ratings`);
      console.log("=========================", response);
      return response;
    } catch (error) {
      console.error("Error fetching ratings:", error.message);
      throw error;
    }
  },

  setPaymentMethod: async (method, userId) => {
    console.log("hey", method)
    console.log("hi", userId)
    try {
      const { icon, ...methodData } = method;
      const response = await requests.post(`/api/products/${userId}/payment`, methodData);
      console.log("Response from server:", response.data);
      return response;
    } catch (error) {
      console.error("Error setting default payment method:", error);
      throw error;
    }
  },

  addAddress: async (address, userId) => {
    console.log("address", address);
    console.log("id", userId);
    return requests.post(`/api/products/${userId}/address`, { address });
  },
  getAddressByUserId: async (userId) => {
    try {
      const response = await requests.get(`/api/products/${userId}/address`);
      return response.data;
    } catch (error) {
      console.error("Error fetching address:", error.message);
      throw error;
    }
  },

  getPaymentMethodByProductId: async (productId) => {
    console.log("Fetching payment methods for product ID:", productId);
    try {
      const response = await requests.get(`/api/products/${productId}/payment`);
      return response.data;
    } catch (error) {
      console.error("Error fetching payment method:", error.message);
      throw error;
    }
  }

};

export default ProductServices;

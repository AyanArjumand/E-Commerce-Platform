import axios from 'axios';
import { API_CONFIG } from '../config/env';

const API_URL = API_CONFIG.API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  signup: (userData) => api.post('/auth/signup', userData),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (userData) => api.put('/auth/profile', userData)
};

// Product APIs
export const productAPI = {
  getProducts: (params) => api.get('/products', { params }),
  getProductById: (id) => api.get(`/products/${id}`),
  getFeaturedProducts: () => api.get('/products/featured'),
  getCategories: () => api.get('/products/categories')
};

// Cart APIs
export const cartAPI = {
  getCart: () => api.get('/cart'),
  addToCart: (data) => api.post('/cart', data),
  updateCartItem: (itemId, data) => api.put(`/cart/${itemId}`, data),
  removeFromCart: (itemId) => api.delete(`/cart/${itemId}`),
  clearCart: () => api.delete('/cart')
};

// Order APIs
export const orderAPI = {
  createOrder: (orderData) => api.post('/orders', orderData),
  getOrderById: (id) => api.get(`/orders/${id}`),
  getMyOrders: () => api.get('/orders/myorders'),
  createPaymentIntent: (orderId) => api.post(`/orders/${orderId}/create-payment-intent`),
  processPayment: (orderId, paymentData) => api.post(`/orders/${orderId}/pay`, paymentData)
};

export default api;

import api from "./axiosConfig";

export const getAllProducts = () => api.get("/products/");

export const getPageProducts = () => api.get("/products/?p=");

export const getProductById = (id) => api.get(`/products/?p=${id}`);





// https://api.devmmnd.com/products/

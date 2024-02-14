import axios from "axios";
const serverUrl = "https://dummyjson.com";

export const getCategories = axios.get(`${serverUrl}/products/categories`)

export const getProducts = (limit) => axios.get(`${serverUrl}/products?limit=${limit}`)

export const getSingleProduct = (id) => axios.get(`${serverUrl}/products/${id}`)
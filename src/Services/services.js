import axios from "axios";
const serverUrl = "https://dummyjson.com";

export const getCategories = axios.get(`${serverUrl}/products/categories`)
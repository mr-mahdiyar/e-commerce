import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status"
import { getCategories, getProductsCategory } from "../Services/services"

export const fetchAsyncCategories = createAsyncThunk('/categories/fetch', async () => {
    const response = await getCategories
    return response.data
})

const initialState = {
    categories: [],
    categoriesStatus: STATUS.IDEL,
    categoryProducts: [],
    categoryProductsStatus: STATUS.IDEL
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAsyncCategories.pending, (state, _ ) => {
            state.categoriesStatus = STATUS.LOADING
        })
        .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
            state.categories = action.payload
            state.categoriesStatus = STATUS.SUCCES
        })
        .addCase(fetchAsyncCategories.rejected, (state, _ ) => {
            state.categoriesStatus = STATUS.FAILED
        })
        .addCase(fetchAsyncProductsCategory.pending, (state, _ ) => {
            state.categoryProductsStatus = STATUS.LOADING
        })
        .addCase(fetchAsyncProductsCategory.fulfilled, (state, action) => {
            state.categoryProducts = action.payload
            state.categoryProductsStatus = STATUS.SUCCEEDED
        })
        .addCase(fetchAsyncProductsCategory.rejected, (state, _ ) => {
            state.categoryProductsStatus = STATUS.FAILED
        })
    }
})
export const fetchAsyncProductsCategory = createAsyncThunk("category-products/fetch", async (category) => {
    const response = await getProductsCategory(category)
    return response.data.products
})

export const getAllCategories = (state) => state.category.categories
export const getProductsByCategory = (state) => state.category.categoryProducts
export const getProductsCategoryStatus = (state) => state.category.categoryProductsStatus
export default categorySlice.reducer


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status"
import { getProducts, getSingleProduct } from "../Services/services";

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productSingle: [],
    productSingleStatus: STATUS.IDLE
}

const productsSLice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAsyncProducts.pending, (state, _ ) => {
            state.productsStatus = STATUS.LOADING
        })

        .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.productsStatus = STATUS.SUCCEEDED
        })

        .addCase(fetchAsyncSingleProduct.rejected, (state, _ ) => {
            state.productsStatus = STATUS.FAILED
        })

        .addCase(fetchAsyncSingleProduct.pending, (state, _ ) => {
            state.productSingleStatus = STATUS.LOADING
        })

        .addCase(fetchAsyncSingleProduct.fulfilled, (state, action) => {
            state.productSingle = action.payload
            state.productSingleStatus = STATUS.SUCCEEDED
        })

        .addCase(fetchAsyncProducts.rejected, (state, _ ) => {
            state.productSingleStatus = STATUS.FAILED
        })
    }
})

export const fetchAsyncProducts = createAsyncThunk("products/fetch", async (limit) => {
    const response = await getProducts(limit)
    return response.data.products
})

export const fetchAsyncSingleProduct = createAsyncThunk("products/singleProduct/fetch", async (id) => {
    const response = await getSingleProduct(id)
    return response.data
})


export const getAllProducts = (state) => state.products.products
export const getAllProductsStatus = (state) => state.products.productsStatus
export const getProductSingle = (state) => state.products.productSingle
export const getSingleProductStatus = (state) => state.products.productSingleStatus

export default productsSLice.reducer
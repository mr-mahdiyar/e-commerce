import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status"
import { getCategories } from "../Services/services"

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
    }
})

export const getAllCategories = (state) => state.category.categories
export default categorySlice.reducer

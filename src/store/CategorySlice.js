import { createSlice } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Status } from "../utiles/Status"
import { getCategories } from "../Services/services"

export const fetchAsyncCategories = createAsyncThunk('/categories/fetch', async () => {
    const response = await getCategories
    return response.data
})

const initialStata = {
    categories: [],
    categoriesStatus: Status.IDEL,
    categoryProducts: [],
    categoryProductsStatus: Status.IDEL
}

const CategorySlice = createSlice({
    name: "category",
    initialStata,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAsyncCategories.pending, (state, _ ) => {
            state.categoriesStatus = Status.LOADING
        })
    }
})

export const getAllCategories = (state) => state.category.categories
export default CategorySlice.reducer

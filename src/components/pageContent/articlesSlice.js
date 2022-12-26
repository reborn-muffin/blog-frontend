import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ArticlesAPI from "./articlesAPI";

export const fetchAll = createAsyncThunk(
    'articles/fetchAll',
    async () => {
        return await ArticlesAPI.fetchAll()
    }
)

const articlesSlice = createSlice({
    name: 'articles',
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(fetchAll.fulfilled, (state, action) => {
            return {...state, articles: action.payload}
        })
    }
})

export default articlesSlice.reducer

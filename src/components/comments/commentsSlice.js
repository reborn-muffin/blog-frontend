import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import CommentsAPI from "./commentsAPI";
export const fetchAll = createAsyncThunk(
    'comments/fetchAll',
    async () => {
        return await CommentsAPI.fetchAll()
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(fetchAll.fulfilled, (state, action) => {
            return {...state, comments: action.payload}
        })
    }
})

export default commentsSlice.reducer

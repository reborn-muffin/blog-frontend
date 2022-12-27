import {configureStore} from "@reduxjs/toolkit";
import articlesReducer from '../components/pageContent/articlesSlice'

const store = configureStore({
    reducer: articlesReducer
})

export default store
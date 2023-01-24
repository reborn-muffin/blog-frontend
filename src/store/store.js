import {configureStore} from "@reduxjs/toolkit";
import articlesReducer from '../components/pageContent/articlesSlice'
import commentsReducer from "../components/comments/commentsSlice";

const store = configureStore({
    reducer: {
        articles: articlesReducer,
        comments: commentsReducer
    }
})

export default store
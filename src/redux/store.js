import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from './bookmark';

export const store = configureStore({
    reducer : {
        bookmark : bookmarkReducer
    }
});




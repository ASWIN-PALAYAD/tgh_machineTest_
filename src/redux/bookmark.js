import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    items : [],
};

const bookMarkSlice = createSlice({
    name:'bookmark',
    initialState: INITIAL_STATE,
    reducers:{
        addToBookmark : (state,action) => {
            state.items = [...state.items,action.payload]
        },
        removeFromBookmark : (state,action) => {
            state.items = state.items.filter((item)=> item._id !== action.payload)
        },
        clearBookmark : (state,action) => {
            state.items = []
        },
        

    }
})

export const {addToBookmark,removeFromBookmark,clearBookmark} = bookMarkSlice.actions;
export default bookMarkSlice.reducer;
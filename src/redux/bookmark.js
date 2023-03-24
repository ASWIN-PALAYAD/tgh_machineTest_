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
        }
        

    }
})

export const {addToBookmark} = bookMarkSlice.actions;
export default bookMarkSlice.reducer;
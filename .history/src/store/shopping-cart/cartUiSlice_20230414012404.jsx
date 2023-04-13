import { createSlice } from "@reduxjs/toolkit";

const cratUiSlice = createSlice({
    name: 'cartUi',
    initialState: {cartIsVisible: false},
    reducers:{
        toggel(state){
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})

export const cartUiActions = cartUiActions.actions

export default cratUiSlice
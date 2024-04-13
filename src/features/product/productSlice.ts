/*
Redux slice that is used in the project.
*/

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import { productStructure } from "../../models/products.interfaces";

// This interface is only for this file and the state structure.
interface ProductState {
    allProducts: productStructure[]
    currentProduct: productStructure | null,
    isLoading: boolean,
    isError: boolean
}

// Initial state.
// Note: Normally this should be separated and both all and current should have isLoading and isError, 
// but since the file is a json file it does not need it, so keeping both here.
const initialState: ProductState = {
    allProducts: [],
    currentProduct: null,
    isLoading: true,
    isError: false,
}

// Redux Slice
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<productStructure[]>) => {
            // Set all product or an array of products.
            state.allProducts = action.payload;
            state.currentProduct = action.payload[0];
            state.isLoading = false;
            state.isError = false;
        },
        setProductsError: (state, action: PayloadAction<boolean>) => {
            // Sets if an error occurred when loading the data.
            state.isError = action.payload;
        }
    }
})

export const { setProducts } = productSlice.actions;

export const selectProducts = (state: RootState) => state.product.allProducts;

export default productSlice.reducer;